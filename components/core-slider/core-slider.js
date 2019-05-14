// Create an ES6 Class for the custom element that extends the base class
// HTMLElement.

// Set the template
const templateString = `
  <link rel="stylesheet" href="core-slider.css">
  <div class="slider">
    <!-- This allows us to place children into the element -->
    <slot></slot>
  </div>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

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
    this.shadow.appendChild(template.content.cloneNode(true));

    // Store element link
    this.slider = this.shadow.querySelector('.slider');
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
    if (this._index >= this.childElementCount) this.index = 0;
    if (this._index < 0) this.index = this.childElementCount - 1;
  }

  // ----------------------------------------------------------------- Methods
  // Tick the slider over
  /**
   * tick function
   */
  tick() {
    this.index += 1;
    Array.from(this.children).forEach((i) => i.classList.add('hide'));
    this.children[this.index].classList.remove('hide');
    setTimeout(this.tick.bind(this), parseFloat(this.time) * 1000);
  }
}


/* Register the class as a custom element on the dom.
 * This element can then be used in html.
 * EG:
 *  <image-slider />
 */
window.customElements.define('core-slider', coreSlider);
