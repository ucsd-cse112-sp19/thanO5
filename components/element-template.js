import styleString from './core-<name>.scss';

const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * <core-radio> Web component
 */
export default class CoreName extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();
  }

  /**
   * observedAttributes getter
   */
  static get observedAttributes() {

  }

  /**
   * connectedCallback
   */
  connectedCallback() {

  }

  /**
   * attributeChangedCallback
   * @param {*} attr
   * @param {*} oldV
   * @param {*} newV
   */
  attributeChangedCallback(attr, oldV, newV) {

  }
};

if (!customElements.get('core-<name>')) {
  customElements.define('core-<name>', coreSlider);
}
