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
export default class CoreProgress extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();

    this._type = this.getAttribute('type') || 'line';
    this._percentage = this.getAttribute('percentage') || 0;
    this._status = this.getAttribute('status') || undefined;
    this._strokeWidth = this.getAttribute('stroke-width') || 6;
    this._textInside = this.hasAttribute('text-inside') || false; // this.hasAttribute('text-inside')
    this._width = this.getAttribute('width') || 126;
    this._showText = this.hasAttribute('show-text') || true; // true
    this._color = this.getAttribute('color') || undefined;

    // define type
    Object.defineProperty(this, 'type', {
      get() {
        return this._type;
      },
      set(val) {
        if (['line', 'circle'].indexOf(val) > -1) {
          this._type = val;
          this.setAttribute('type', val);
        } else {
          this._type = 'line';
          this.setAttribute('type', 'line');
        }

        this._updateTemplate();
      },
    });

    // define percentage
    Object.defineProperty(this, 'percentage', {
      get() {
        return this._percentage;
      },
      set(val) {
        if (val <= 100 && val >= 0) {
          this._percentage = val;
          this.setAttribute('percentage', val);
        } else {
          this._percentage = 0;
          this.setAttribute('percentage', 0);
        }

        this._updateTemplate();
      },
    });

    // define status
    Object.defineProperty(this, 'status', {
      get() {
        return this._status;
      },
      set(val) {
        if (['success', 'exception', 'text'].indexOf(val) > -1) {
          this._status = val;
          this.setAttribute('status', val);
        } else {
          this._status = undefined;
          this.removeAttribute('status');
        }

        this._updateTemplate();
      },
    });

    // define strokeWith
    Object.defineProperty(this, 'strokeWidth', {
      get() {
        return this._strokeWidth;
      },
      set(val) {
        if (typeof val === 'number') {
          this._strokeWidth = val;
          this.setAttribute('stroke-width', val);
        } else {
          this._strokeWidth = 6;
          this.setAttribute('stroke-width', 6);
        }

        this._updateTemplate();
      },
    });

    // define textInside
    Object.defineProperty(this, 'textInside', {
      get() {
        return this._textInside;
      },
      set(val) {
        if (val === true) {
          this._textInside = true;
          this.setAttribute('text-inside', '');
        } else {
          this._textInside = false;
          this.removeAttribute('text-inside');
        }

        this._updateTemplate();
      },
    });

    // define width
    Object.defineProperty(this, 'width', {
      get() {
        return this._width;
      },
      set(val) {
        if (typeof val === 'number') {
          this._width = val;
          this.setAttribute('width', val);
        } else {
          this._width = 126;
          this.setAttribute('width', 126);
        }

        this._updateTemplate();
      },
    });

    // define showText
    Object.defineProperty(this, 'showText', {
      get() {
        return this._showText;
      },
      set(val) {
        if (val === true) {
          this._showText = true;
          this, setAttribute('show-text', '');
        } else {
          this._showText = false;
          this.removeAttribute('show-text');
        }

        this._updateTemplate();
      },
    });

    // define color
    Object.defineProperty(this, 'color', {
      get() {
        return this._color;
      },
      set(val) {
        if (typeof val === 'string') {
          this._color = val;
          this.setAttribute('color', val);
        } else {
          this._color = undefined;
          this.removeAttribute('color');
        }

        this._updateTemplate();
      },
    });

    this.attachShadow({mode: 'open'});
    this._template = document.createElement('template');
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
   * ironClass getter
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
