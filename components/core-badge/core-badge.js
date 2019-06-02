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

    this._value = this.getAttribute('value') || undefined;
    this._max = this.getAttribute('max') || undefined;
    this._isDot = this.hasAttribute('is-dot') || false;
    this._hidden = this.hasAttribute('hidden') || false;
    this._type = this.getAttribute('type') || undefined;

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
   * max getter
   */
  get max() {
    return this._max;
  }

  /**
   * max setter
   * @param {*} val
   */
  set max(val) {
    if (typeof val === 'number') {
      this._max = val;
      this.setAttribute('max', val);
    } else {
      this._max = undefined;
      this.removeAttribute('max');
    }

    this._updateTemplate();
  }

  /**
   * isDot getter
   */
  get isDot() {
    return this._isDot;
  }

  /**
   * isDot setter
   * @param {*} val
   */
  set isDot(val) {
    if (val === true) {
      this._isDot = true;
      this.setAttribute('is-dot', '');
    } else {
      this._isDot = false;
      this.removeAttribute('is-dot');
    }

    this._updateTemplate();
  }

  /**
   * hidden setter
   * @param {*} val
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * hidden setter
   * @param {*} val
   */
  set hidden(val) {
    if (val === true) {
      this._hidden = true;
      this.setAttribute('hidden', '');
    } else {
      this._hidden = false;
      this.removeAttribute('hidden');
    }

    this._updateTemplate();
  }

  /**
   * value getter
   */
  get value() {
    return this._value;
  }

  /**
   * value setter
   * @param {*} val
   */
  set value(val) {
    if (typeof val === 'string' || typeof val === 'number') {
      this._value = val;
      this.setAttribute('value', val);
    } else {
      this._value = undefined;
      this.removeAttribute('value');
    }

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
    if (['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1) {
      this._type = val;
      this.setAttribute('type', val);
    } else {
      this._type = undefined;
      this.removeAttribute('type');
    }

    this._updateTemplate();
  }

  /**
   * content getter
   */
  get content() {
    if (this.isDot) return '';
    const value = this.value;
    const max = this.max;
    const valueNum = parseInt(value);
    const maxNum = parseInt(max);
    if (!isNaN(valueNum) && !isNaN(maxNum)) {
      return maxNum < valueNum ? `${maxNum}+` : valueNum;
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
