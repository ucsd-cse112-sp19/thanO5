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
    <style>
      #button {
        text-align: center;
        border: 0.3rem solid #a5a5a5; /* default color is light grey*/
        width: 6rem;
        height: 3rem;
        transition-duration:0.4s;
        cursor: pointer;
      }

      #button:hover{
        background-color: #a5a5a5; /* default color is light grey*/
        color: white;
      }

      .shadow{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24);
      }

      .rounded{
        border-radius: 1rem;
      }

      #button.small{
        font-size: 10px;
        width: 4rem;
        height: 2rem;
        line-height: 2rem;
      }

      #button.medium{
        font-size: 16px;
        width: 7rem;
        height: 4rem;
        line-height: 4rem;
      }

      #button.large{
        font-size: 22px;
        width: 10rem;
        height: 5rem;
        line-height: 5rem;
      }

      #button.primary{
        border: 0.3rem solid #4286f4; /* primary color is blue*/
      }

      #button.primary:hover{
        background-color: #4386f4; /* primary color is blue */
        color: white;
      }

      #button.secondary{
        border: 0.3rem solid #f44336; /* secondary color is red*/
      }

      #button.secondary:hover{
        background-color: #f44336; /* secondary color is red */
        color: white;
      }

      #button.dark{
        border: 0.3rem solid #555555; /* dark color is dark grey */
      }

      #button.dark:hover{
        background-color: #555555; /* dark color is dark grey */
        color: white;
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
      case 'shadow': {
        if (newValue == '') {
          this._button.classList.add('shadow');
        } else {
          this._button.classList.remove('shadow');
        }
        break;
      }
      case 'color': { // FIXME: how does this code know what the new color is?
        const tempColor = coreColor[newValue];
        if (coreColor[newValue] != undefined) {
          this._button.classList.add(tempColor);
        } else {
          this._button.classList.remove(tempColor);
        }
      }
    }
  }
}

// define core button element
customElements.define('core-button', CoreButton);
