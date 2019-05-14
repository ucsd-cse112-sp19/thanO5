const coreBtnSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const coreColor = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
};

const templateString = `
    <link rel="stylesheet" href="core-button.css">
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
    return ['rounded', 'size', 'shadow', 'color'];
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
   * shadow getter
   */
  get shadow() {
    return this.hasAttribute('shadow');
  }

  /**
   * color getter
   */
  get color() {
    return this.hasAttribute('color');
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
   * shadow setter
   * @param {string} val
   */
  set shadow(val) {
    if (val) {
      this.setAttribute('shadow', val);
    } else {
      this.removeAttribute('shadow');
    }
  }

  /**
   * color setter
   * @param {string} val
   */
  set color(val) {
    if (val) {
      this.setAttribute('color', val);
    } else {
      this.removeAttribute('color');
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
      case 'rounded':
      case 'shadow': {
        const toAdd = newValue == '';
        this.addToClassList(name, toAdd);
        break;
      }
      case 'size': { // FIXME: how does this code know what the new size is?
        const size = coreBtnSizes[newValue];
        const toAdd = size != undefined;
        this.addToClassList(size, toAdd);
        break;
      }
      case 'color': { // FIXME: how does this code know what the new color is?
        const tempColor = coreColor[newValue];
        const toAdd = tempColor != undefined;
        this.addToClassList(tempColor, toAdd);
        break;
      }
    }
  }

  /**
   * helper method to decrease complexity on code climate
   * @param {*} value
   * @param {boolean} toAdd
   */
  addToClassList(value, toAdd) {
    if (toAdd) {
      this._button.classList.add(value);
    } else {
      this._button.classList.remove(value);
    }
  }
}

// define core button element
customElements.define('core-button', CoreButton);
