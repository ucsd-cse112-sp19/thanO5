import HTMLString from './core-badge.html';
import styleString from './core-badge.scss';

const template = document.createElement('template');
template.innerHTML = HTMLString;

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
        this._updateTemplate();
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

        this._updateTemplate();
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

        this._updateTemplate();
      },
    });

    Object.defineProperty(this, 'value', {
      get() {
        return this.getAttribute('value');
      },
      set(val) {
        this.setAttribute('value', val);
        this._updateTemplate();
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

        this._updateTemplate();
      },
    });

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style.cloneNode(true));

    const config = {attributes: false, childList: true, subtree: true};
    const observer = new MutationObserver(this._updateTemplate.bind(this));
    observer.observe(this, config);
    this.addEventListener('change', this._updateTemplate.bind(this));

    this._updateTemplate();
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
    // this._updateTemplate();
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
    if (this.isDot) return '';
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
    const update = !this.hidden && (this.content || this.content === 0 || this.isDot) ? `
      <sup class="el-badge__content ${'el-badge__content--' + (this.type === null ? undefined : this.type)} ${this.innerHTML ? 'is-fixed' : ''} ${this.isDot ? 'is-dot' : ''}">
        ${this.content}
      </sup>
    ` : '';

    this.shadowRoot.querySelector('transition').innerHTML = update;
  }
};

if (!customElements.get('core-badge')) {
  customElements.define('core-badge', CoreBadge);
}
