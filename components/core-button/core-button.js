const coreBtnSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const templateString = `
    <style>
      .rounded{
        border-radius:25px;
        border: 2px solid #73AD21;
        width: 200px;
        height: 150px;
      }

      .small{
        font-size: 10px;
      }

      .medium{
        font-size: 16px;
      }

      .large{
        font-size: 22px;
      }
    </style>
    <button id="core-button" type="button">
      <slot id="btn-text"></slot>
    </button>
    `;

const template = document.createElement('template');
template.innerHTML = templateString;

/**
 * Core button class.
 */
class CoreButton extends HTMLElement {
  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return ['rounded', 'size'];
  }

  /**
   * Constructor for CoreButton class.
   */
  constructor() {
    super(); // HTMLElement does class definitions by calling super()

    const shadowdom = this.attachShadow({mode: 'open'});
    const templateHTML = template.content.cloneNode(true);
    shadowdom.appendChild(templateHTML);

    // Get message button element and message slot element
    this._button = shadowRoot.getElementById('core-button');
    this._message = shadowRoot.getElementById('btn-text');
    this._message.innerHTML = 'YOYOUOUY';
  }

  /**
   * rounded getter
   */
  get rounded() {
    return this.hasAttribute('rounded');
  }

  /**
   * size getter
   */
  get size() {
    return this.getAttribute('size');
  }

  /**
   * rounded setter
   * @param {boolean} val
   */
  set rounded(val) {
    if (val) {
      this._button.classList.add('rounded');
    } else {
      this._button.classList.remove('rounded');
    }
  }

  /**
   * size setter
   * @param {string} val
   */
  set size(val) {
    // TODO: need to sanitize the user input here
    this._button.classList.add(val);
  }

  /**
   * attribute change event handler
   * @param {string} name
   * @param {*} oldValue
   * @param {*} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'rounded': {
        if (newValue == '') {
          this.rounded = true;
        } else {
          this.rounded = false;
        }
        break;
      }
      case 'size': { // FIXME: how does this code know what the new size is?
        const s = this.getAttribute('size');
        if (coreBtnSizes[s] != undefined) {
          this.size = s;
        }
      }
    }
  }
}

// define core button element
customElements.define('core-button', CoreButton);
