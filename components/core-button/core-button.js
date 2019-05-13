const coreBtnSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const templateString = `
    <style>
      #button {
        text-align: center;
        line-height: 150px;
      }

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
    <div id="button">
      <slot></slot>
    </div>
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

    const shadowRoot = this.attachShadow({mode: 'open'});
    const templateHTML = template.content.cloneNode(true);
    shadowRoot.appendChild(templateHTML);

    // Get message button element and message slot element
    this._button = shadowRoot.getElementById('button');
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
    return this.hasAttribute('size');
  }

  /**
   * rounded setter
   * @param {boolean} val
   */
  set rounded(val) {
    if (val) {
      this.setAttribute('rounded', '');
    } else {
      this.removeAttribute('rounded');
    }
  }

  /**
   * size setter
   * @param {string} val
   */
  set size(val) {
    // TODO: need to sanitize the user input here
    if (val) {
      this.setAttribute('size', val);
    } else {
      this.removeAttribute('size');
    }
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
          this._button.classList.add('rounded');
        } else {
          this._button.classList.remove('rounded');
        }
        break;
      }
      case 'size': { // FIXME: how does this code know what the new size is?
        const size = coreBtnSizes[newValue];
        if (coreBtnSizes[newValue] != undefined) {
          this._button.classList.add(size);
        } else {
          this._button.classList.remove(size);
        }
      }
    }
  }
}

// define core button element
customElements.define('core-button', CoreButton);
