// import templateString from './element-image.html';
import styleString from './core-progress.scss';

// create template element
// const template = document.createElement('template');
// template.innerHTML = templateString;

// create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * <element-image> component
 */
class CoreProgress extends HTMLElement {
  /**
   * constructor
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
   * type getter
   */
  get type() {
    return this._type;
  }

  /**
   * type setter
   * @param {*} val
   */
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
   * percentage setter
   */
  get percentage() {
    return this._percentage;
  }

  /**
   * percentage setter
   * @param {*} val
   */
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
   * status getter
   */
  get status() {
    return this._status;
  }

  /**
   * status setter
   * @param {*} val
   */
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
   * strokeWidth getter
   */
  get strokeWidth() {
    return this._strokeWidth;
  }

  /**
   * strokeWidth setter
   * @param {*} val
   */
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
   * textInside getter
   */
  get textInside() {
    return this._textInside;
  }

  /**
   * textInside setter
   * @param {*} val
   */
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
   * width getter
   */
  get width() {
    return this._width;
  }

  /**
   * width setter
   * @param {*} val
   */
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
   * showText getter
   */
  get showText() {
    return this._showText;
  }

  /**
   * showText setter
   * @param {*} val
   */
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
   * color getter
   */
  get color() {
    return this._color;
  }

  /**
   * color setter
   * @param {*} val
   */
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
   * _updateTemplate()
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
   * barStyle getter
   */
  get barStyle() {
    return `width: ${this.percentage + '%'};` + ` ${this.color === null ? '' : 'background-color: ' + this.color + ';'}`;
  }

  /**
   * relativeStrokeWidth getter
   */
  get relativeStrokeWidth() {
    return (this.strokeWidth / this.width * 100).toFixed(1);
  }

  /**
   * trackPath getter
   */
  get trackPath() {
    const radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  }

  /**
   * perimeter getter
   */
  get perimeter() {
    const radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
    return 2 * Math.PI * radius;
  }

  /**
   * circlePathStyle getter
   */
  get circlePathStyle() {
    const perimeter = this.perimeter;
    return `stroke-dasharray: ${perimeter}px ${perimeter}px; ` +
      `stroke-dashoffset: ${(1 - this.percentage / 100) * perimeter + 'px'}; ` +
      `transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;`;
  }

  /**
   * stroke getter
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
   * iconClass getter
   */
  get iconClass() {
    if (this.type === 'line') {
      return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
    } else {
      return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
    }
  }

  /**
   * progressTextSize getter
   */
  get progressTextSize() {
    return this.type === 'line'
      ? 12 + this.strokeWidth * 0.4
      : this.width * 0.111111 + 2;
  }
}

if (!customElements.get('core-progress')) {
  customElements.define('core-progress', CoreProgress);
}
