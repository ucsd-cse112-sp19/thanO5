// const uuid = require('uuid/v1');

// Create an ES6 Class for the custom element that extends the base class
// HTMLElement.
/**
 * ImageSlider Class
 */
class coreSlider extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();
    // Set the default prop values
    this._index = 0;
    this._time = '0.5s';

    // Create the shadow dom
    this.shadow = this.attachShadow({mode: 'closed'});
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="../core-slider/core-slider.css">
      <div id="slider">
        <!-- This allows us to place children into the element -->
        <slot></slot>
        <div id="description">
          <slot name="title"><span>Title</span></slot>
          <slot name="content"><p>Description of these pictures.</p></slot>
        </div>
      </div>
    `;

    // Store element links
    this.slider = this.shadow.getElementById('slider');
    this.title = this.shadow.querySelector('[slot="title"');
    this.content = this.querySelector('[slot="content"]');

    // Find all image children
    this.imageChildren = this.getElementsByTagName('img');
    this.imageChildCount = this.imageChildren.length;

    // Hide part of the description content
    this._hideContent();
  }

  /**
   * _hideContent
   */
  _hideContent() {
    const content = this.content.innerHTML;
    const title = this.title.innerHTML;
    const size = this.getAttribute('size');
    const theme = this.getAttribute('theme');
    const themeScale = theme === 'circle' ? 0.5 : 1;

    let needHide = false;
    let buttonSize;

    switch (size) {
      case 'small': {
        const limit = 30;
        buttonSize = 'small';
        if (content.length > limit * themeScale) {
          this.content.innerHTML = content.substring(0, limit) + '...';
          needHide = true;
        }
        break;
      }

      case 'medium': {
        const limit = 100;
        buttonSize = 'small';
        if (content.length > limit * themeScale) {
          this.content.innerHTML = content.substring(0, limit) + '...';
          needHide = true;
        }
        break;
      }

      case 'large': {
        const limit = 200;
        buttonSize = 'small';
        if (content.length > limit * themeScale) {
          this.content.innerHTML = content.substring(0, limit) + '...';
          needHide = true;
        }
        break;
      }

      default: break;
    }

    if (needHide) {
      // generate a modal name
      const id = uuid();

      // create a button linked to the modal
      const button = document.createElement('core-button');
      button.setAttribute('rounded', true);
      button.setAttribute('size', buttonSize);
      // button.setAttribute('theme', 'standard');
      button.setAttribute('color', 'secondary');
      button.setAttribute('modal', id);

      if (theme !== 'circle') {
        button.setAttribute('style', 'float: right; margin: 10px 20px;');
      } else {
        button.setAttribute('style', 'margin: 10px 20px;');
        this.content.style['align-items'] = 'center';
      }

      button.innerHTML = 'Read more';
      this.content.appendChild(button);

      // create a modal to show all description
      const modal = document.createElement('core-modal');
      modal.setAttribute('name', id);
      modal.innerHTML = `
        <h1 slot="header">${title}</h1>
        <p>${content}</p>
      `;
      document.body.appendChild(modal);
    }
  }

  // Listen for changes to the dom attributes. When one of these attrs changes
  // on the host element, it will trigger attrubuteChangedCallback
  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return [
      'time',
    ];
  }

  // -------------------------------------------------------------- Life-cycle
  // When the host element is inserted into the DOM, start the sliding
  /**
   * connectedCallback
   */
  connectedCallback() {
    this.tick();
  }

  // This function is automatically triggered every time an attribute on the
  // element changes (NOTE: This does not trigger for properties, only
  // attributes)
  /**
   * attributeChangedCallback
   * @param {*} attr
   * @param {*} oldV
   * @param {*} newV
   */
  attributeChangedCallback(attr, oldV, newV) {
    switch (attr) {
      case 'time':
        this.time = newV;
    }
  }

  // -------------------------------------------------------------- Properties
  // Get and set the time for fading and how long on each image
  // When it's updated, the inline styling for transition-duration is set
  /**
   * time getter
   */
  get time() {
    return this._time;
  }

  /**
   * time setter
   * @param {*} v
   */
  set time(v) {
    this._time = v;
    this.slider.style.transitionDuration = v;
  }

  // Internal property for looping over the images
  /**
   * index getter
   */
  get index() {
    return this._index;
  }

  /**
   * index setter
   * @param {*} v
   */
  set index(v) {
    this._index = v;
    // For looping
    if (this._index >= this.imageChildCount) this.index = 0;
    if (this._index < 0) this.index = this.imageChildCount - 1;
  }

  // ----------------------------------------------------------------- Methods
  // Tick the slider over
  /**
   * tick function
   */
  tick() {
    this.index += 1;
    Array.from(this.imageChildren).forEach((i) => i.classList.add('hide'));
    this.imageChildren[this.index].classList.remove('hide');
    setTimeout(this.tick.bind(this), parseFloat(this.time) * 1000);
  }
}


/* Register the class as a custom element on the dom.
 * This element can then be used in html.
 * EG:
 *  <image-slider />
 */
window.customElements.define('core-slider', coreSlider);
