import HTMLString from './core-badge.html';
import styleString from './core-badge.scss';

const template = document.createElement('template');
template.innerHTML = HTMLString;

const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * A number or status mark on buttons and icons.
 */
class CoreBadge extends HTMLElement {
  /**
   * Initialize private fields, shadowRoot and the view
   */
  constructor() {
    super();

    //  Initialize all private fields
    this._value = this.getAttribute('value') || undefined;
    this._max = this.getAttribute('max') || undefined;
    this._isDot = this.hasAttribute('is-dot') || false;
    this._hidden = this.hasAttribute('hidden') || false;
    this._type = this.getAttribute('type') || undefined;

    // Initialize the shadowRoot
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style.cloneNode(true));

    // Add 'change' event listener to this element so that
    // every time a 'change' event is observed, update the view
    const config = {attributes: false, childList: true, subtree: true};
    const observer = new MutationObserver(this._updateTemplate.bind(this));
    observer.observe(this, config);
    this.addEventListener('change', this._updateTemplate.bind(this));

    // Initialize the view
    this._updateTemplate();
  }

  get max() {
    return this._max;
  }

  /**
   * The maximum number that can be put in the badge
   * <br>If the value field is a number larger than max field,
   * `${max}+` will be displayed in the badge
   * @param {number} val
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

  get isDot() {
    return this._isDot;
  }

  /**
   * If a little dot is displayed instead of the value
   * @param {boolean} val
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

  get hidden() {
    return this._hidden;
  }

  /**
   * If the badge is displayed or not.
   * @param {boolean} val
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

  get value() {
    return this._value;
  }

  /**
   * The content that the badge tries to display but may not be the same as the acutal displayed content
   * when the value is a number larger than max field.
   * @param {number|string} val
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

  get type() {
    return this._type;
  }

  /**
   * The type of the badge chosen from [primary, success, warning, info, danger]
   * @param {string} val
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
   * The actual content to be displayed. It may be different from the given value because of max field.
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
   * Update the content of the transition element inside our template
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

// Register the web component
if (!customElements.get('core-badge')) {
  customElements.define('core-badge', CoreBadge);
}
