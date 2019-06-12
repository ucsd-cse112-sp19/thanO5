import templateString from './core-button.html';
import styleString from './core-button.css';

// Define valid button sizes
const coreBtnSizes = {
  tiny: 'tiny',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

// Define valid button colors
const coreColor = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
};

// Create template element
const template = document.createElement('template');
template.innerHTML = templateString;

// Create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * A button with customizable styles
 */
class CoreButton extends HTMLElement {
  /**
   * The list of attribute to observe
   */
  static get observedAttributes() {
    return ['rounded', 'size', 'shadow', 'color', 'animated', 'circle'];
  }

  /**
   * Initialize the shadowDOM
   */
  constructor() {
    super(); // HTMLElement does class definitions by calling super()

    const shadowRoot = this.attachShadow({mode: 'open'});

    // Set up the template
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Set up the style
    shadowRoot.appendChild(style.cloneNode(true));

    // Get message button element and message slot element
    this._button = shadowRoot.getElementById('button');
  }

  /**
   * If the button has rounded corners
   */
  get rounded() {
    return this.hasAttribute('rounded');
  }

  /**
   * Button size
   */
  get size() {
    return this.getAttribute('size');
  }

  /**
   * If the button has a border shadow
   */
  get shadow() {
    return this.hasAttribute('shadow');
  }

  /**
   * The color theme of the button
   */
  get color() {
    return this.getAttribute('color');
  }

  /**
   * If the button comes with an animated effect
   */
  get animated() {
    return this.hasAttribute('animated');
  }

  /**
   * If the button is circular
   */
  get circle() {
    return this.hasAttribute('circle');
  }

  set rounded(val) {
    if (val) {
      this.setAttribute('rounded', '');
    } else {
      this.removeAttribute('rounded');
    }
  }

  set size(val) {
    // TODO: need to sanitize the user input here
    if (val) {
      this.setAttribute('size', val);
    } else {
      this.removeAttribute('size');
    }
  }

  set shadow(val) {
    if (val) {
      this.setAttribute('shadow', val);
    } else {
      this.removeAttribute('shadow');
    }
  }

  set color(val) {
    if (val) {
      this.setAttribute('color', val);
    } else {
      this.removeAttribute('color');
    }
  }

  set animated(val) {
    if (val) {
      this.setAttribute('animated', val);
    } else {
      this.removeAttribute('animated');
    }
  }

  set circle(val) {
    if (val) {
      this.setAttribute('circle', val);
    } else {
      this.removeAttribute('circle');
    }
  }

  /**
   * Handle attribute changes
   * @param {string} name name of attribute that changed
   * @param {*} oldValue original value
   * @param {*} newValue updated value
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'rounded':
      case 'shadow':
      case 'animated':
      case 'circle': {
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
   * @param {string} className name of class
   * @param {boolean} toAdd whether add the class or not
   */
  addToClassList(className, toAdd) {
    if (toAdd) {
      this._button.classList.add(className);
    } else {
      this._button.classList.remove(className);
    }
  }
}

// Register the web component
if (!customElements.get('core-button')) {
  customElements.define('core-button', CoreButton);
}
