import styleString from './core-badge.scss';

const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * <core-radio> Web component
 */
export default class CoreBadge extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();

    Object.defineProperty(this, 'max', {
      get() {
        return this.getAttribute('max');
      },
      set(val) {
        this.setAttribute('max', val);
      },
    });

    Object.defineProperty(this, 'isDot', {
      get() {
        return this.hasAttribute('is-dot');
      },
      set(val) {
        if (val) {
          this.setAttribute('is-dot', false);
        } else {
          this.removeAttribute('is-dot');
        }
      },
    });

    Object.defineProperty(this, 'hidden', {
      get() {
        return this.hasAttribute('hidden');
      },
      set(val) {
        if (val) {
          this.setAttribute('hidden', false);
        } else {
          this.removeAttribute('hidden');
        }
      },
    });

    Object.defineProperty(this, 'value', {
      get() {
        return this.getAttribute('value');
      },
      set(val) {
        this.setAttribute('value', val);
      },
    });

    Object.defineProperty(this, 'type', {
      get() {
        return this.getAttribute('type');
      },
      set(val) {
        if (['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1) {
          this.setAttribute('type', val);
        } else {
          this.removeAttribute('type');
        }
      },
    });

    this.attachShadow({mode: 'open'});
  }

  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return [
      'value',
      'max',
      'is-dot',
      'hidden',
      'type',
    ];
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    this._updateTemplate();
  }

  /**
   * attributeChangedCallback
   * @param {*} attr
   * @param {*} oldV
   * @param {*} newV
   */
  attributeChangedCallback(attr, oldV, newV) {

  }

  /**
   * content getter
   */
  get content() {
    if (this.isDot) return;
    const value = this.value;
    const max = this.max;
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value;
    }
    return value;
  }

  /**
   * updateTemplate
   */
  _updateTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="el-badge">
        <slot></slot>
        <transition name="el-zoom-in-center">
        </transition>
      </div>
    `;

    this.shadowRoot.appendChild(template.content);
    this.shadowRoot.appendChild(style.cloneNode(true));

    const content = !this.hidden && (this.content || this.content === 0 || this.isDot) ? `
      <sup class="el-badge__content ${'el-badge__content--' + this.type} ${this.innerHTML ? 'is-fixed' : ''} ${this.isDot ? 'is-dot' : ''}">
        ${this.content}
      </sup>
    ` : '';

    this.shadowRoot.querySelector('transition').innerHTML = content;
  }
};

if (!customElements.get('core-badge')) {
  customElements.define('core-badge', CoreBadge);
}
