import styleString from './core-progress.scss';

// create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * A progress bar that shows the progress of current operation, and informs the user the current status.
 */
class CoreProgress extends HTMLElement {
  /**
   * Initialize private fields, shadowRoot and the view
   */
  constructor() {
    super();

    this._type = this.getAttribute('type') || 'line';
    this._percentage = this.getAttribute('percentage') || 0;
    this._status = this.getAttribute('status') || undefined;
    this._strokeWidth = this.getAttribute('stroke-width') || 6;
    this._textInside = this.hasAttribute('text-inside') || false;
    this._width = this.getAttribute('width') || 126;
    this._showText = this.hasAttribute('show-text') || false;
    this._color = this.getAttribute('color') || undefined;

    this.attachShadow({mode: 'open'});
    this._template = document.createElement('template');
    this._updateTemplate();
  }

  /**
   * The type of progress bar
   */
  get type() {
    return this._type;
  }

  set type(val) {
    if (['line', 'circle'].indexOf(val) > -1) {
      this._type = val;
      this.setAttribute('type', val);
    } else {
      this._type = 'line';
      this.setAttribute('type', 'line');
    }

    this._updateTemplate();
  }

  /**
   * Percentage, required
   */
  get percentage() {
    return this._percentage;
  }

  set percentage(val) {
    if (typeof val === 'number' && val <= 100 && val >= 0) {
      this._percentage = val;
      this.setAttribute('percentage', val);
    } else {
      this._percentage = 0;
      this.setAttribute('percentage', 0);
    }

    this._updateTemplate();
  }

  /**
   * the current status of progress bar
   */
  get status() {
    return this._status;
  }

  set status(val) {
    if (['success', 'exception', 'text'].indexOf(val) > -1) {
      this._status = val;
      this.setAttribute('status', val);
    } else {
      this._status = undefined;
      this.removeAttribute('status');
    }

    this._updateTemplate();
  }

  /**
   * the width of progress bar
   */
  get strokeWidth() {
    return this._strokeWidth;
  }

  set strokeWidth(val) {
    if (typeof val === 'number') {
      this._strokeWidth = val;
      this.setAttribute('stroke-width', val);
    } else {
      this._strokeWidth = 6;
      this.setAttribute('stroke-width', 6);
    }

    this._updateTemplate();
  }

  /**
   * Whether to place the percentage inside progress bar, only works when the type is 'line'
   */
  get textInside() {
    return this._textInside;
  }

  set textInside(val) {
    if (val === true) {
      this._textInside = true;
      this.setAttribute('text-inside', '');
    } else {
      this._textInside = false;
      this.removeAttribute('text-inside');
    }

    this._updateTemplate();
  }

  /**
   * The canvas width of circle progress bar
   */
  get width() {
    return this._width;
  }

  set width(val) {
    if (typeof val === 'number') {
      this._width = val;
      this.setAttribute('width', val);
    } else {
      this._width = 126;
      this.setAttribute('width', 126);
    }

    this._updateTemplate();
  }

  /**
   * Whether to show percentage
   */
  get showText() {
    return this._showText;
  }

  set showText(val) {
    if (val === true) {
      this._showText = true;
      this.setAttribute('show-text', '');
    } else {
      this._showText = false;
      this.removeAttribute('show-text');
    }

    this._updateTemplate();
  }

  /**
   * Background color of progress bar which overrides status attribute
   */
  get color() {
    return this._color;
  }

  set color(val) {
    if (typeof val === 'string') {
      this._color = val;
      this.setAttribute('color', val);
    } else {
      this._color = undefined;
      this.removeAttribute('color');
    }

    this._updateTemplate();
  }

  /**
   * Update the view
   */
  _updateTemplate() {
    let progressBar = '';
    let progressCircle = '';

    if (this.type === 'line') {
      progressBar = `
        <div class="el-progress-bar">
          <div 
            class="el-progress-bar__outer" 
            style="height: ${this.strokeWidth + 'px'};"
          >
            <div class="el-progress-bar__inner" style="${this.barStyle}">
              ${(this.showText && this.textInside) ? `<div class="el-progress-bar__innerText">${this.percentage}%</div>` : ''}
            </div>
          </div>
        </div>
      `;
    } else {
      progressCircle = `
        <div class="el-progress-circle" style="height: ${this.width + 'px'}; width: ${this.width + 'px'}">
          <svg viewBox="0 0 100 100">
            <path 
              class="el-progress-circle__track" 
              d="${this.trackPath}" 
              stroke="#e5e9f2" 
              stroke-width=${this.relativeStrokeWidth} 
              fill="none">
            </path>
            <path 
              class="el-progress-circle__path" 
              d="${this.trackPath}" 
              stroke-linecap="round" 
              stroke=${this.stroke} 
              stroke-width=${this.relativeStrokeWidth} 
              fill="none" 
              style="${this.circlePathStyle}">
            </path>
          </svg>
        </div>
      `;
    }

    this._template.innerHTML = `
      <div
        class="${`el-progress el-progress--${this.type} 
          ${this.status !== undefined ? `is-${this.status}` : ``} 
          ${!this.showText ? 'el-progress--without-text' : ''} 
          ${this.textInside ? 'el-progress--text-inside' : ''}`}"
        role="progressbar"
        aria-valuenow=${this.percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        ${progressBar}
        ${progressCircle}
        ${(this.showText && !this.textInside) ? ` 
          <div class="el-progress__text" style="font-size: ${this.progressTextSize + 'px'}">
            ${this.status === undefined ? `${this.percentage}%` : `<i class=${this.iconClass}></i>`}
          </div>` : ''}
      </div>
    `;

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this._template.content);
    this.shadowRoot.appendChild(style.cloneNode(true));
  }

  /**
   * CSS styles of the progress bar
   * @readonly
   */
  get barStyle() {
    return `width: ${this.percentage + '%'};` + ` ${this.color === null ? '' : 'background-color: ' + this.color + ';'}`;
  }

  /**
   * The ratio of stroke width to canvas width as a percentage
   * @readonly
   */
  get relativeStrokeWidth() {
    return (this.strokeWidth / this.width * 100).toFixed(1);
  }

  /**
   * The trackpath of circular progress bar
   * @readonly
   */
  get trackPath() {
    const radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  }

  /**
   * The perimeter of circular progress bar
   * @readonly
   */
  get perimeter() {
    const radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
    return 2 * Math.PI * radius;
  }

  /**
   * Styls of the path when the progress bar is circular
   * @readonly
   */
  get circlePathStyle() {
    const perimeter = this.perimeter;
    return `stroke-dasharray: ${perimeter}px ${perimeter}px; ` +
      `stroke-dashoffset: ${(1 - this.percentage / 100) * perimeter + 'px'}; ` +
      `transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;`;
  }

  /**
   * The stroke color represented as a hexadecimal number
   * @readonly
   */
  get stroke() {
    let ret;
    if (this.color) {
      ret = this.color;
    } else {
      switch (this.status) {
        case 'success':
          ret = '#13ce66';
          break;
        case 'exception':
          ret = '#ff4949';
          break;
        default:
          ret = '#20a0ff';
      }
    }
    return ret;
  }

  /**
   * The class name of icon when the status attribute is given
   * @readonly
   */
  get iconClass() {
    if (this.type === 'line') {
      return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
    } else {
      return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
    }
  }

  /**
   * The text size inside the progress bar
   * @readonly
   */
  get progressTextSize() {
    return this.type === 'line'
      ? 12 + this.strokeWidth * 0.4
      : this.width * 0.111111 + 2;
  }
}

// Register the web component
if (!customElements.get('core-progress')) {
  customElements.define('core-progress', CoreProgress);
}
