import templateString from './core-modal.html';
import styleString from './core-modal.css';

// Create template element
const template = document.createElement('template');
template.innerHTML = templateString;

// Create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * beastTooltip custom element
 */
class coreModal extends HTMLElement {
  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * constructor
   */
  constructor() {
    super();

    // create shadowroot
    const shadowRoot = this.attachShadow({mode: 'open'});

    // This won't work beacuse I set overflow to hidden
    // $(this._modal).css('left', \
    // window.innerWidth / 2 - $(this._modal).offset().left);
    // $(this._modal).css('top', \
    // window.innerHeight / 2 - $(this._modal).offset().top);

    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.appendChild(style.cloneNode(true));
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    // Store elements
    this._modal = this.shadowRoot.querySelector('.modal');
    this._close = this.shadowRoot.querySelector('.close');
    this._button = document.querySelector(`[modal="${this.getAttribute('name')}"]`);

    // Add Listeners
    this._close.addEventListener('click', this._hideModal.bind(this));
    this._button.addEventListener('click', this._showModal.bind(this));

    // Attach the modal to body
    // This won't work because you only attach the template content to body
    // document.body.appendChild(this._modal);
    // document.body.appendChild(this.style);
  }

  /**
   * disconnectedCallback
   */
  disconnectedCallback() {
    this._button.removeEventListener('click', this._showModal.bind(this));
    this._close.removeEventListener('click', this._hideModal.bind(this));
  }

  /**
   * showModal function
   */
  _showModal() {
    this._modalVisible = true;
    this._modal.style.display = 'block';
  }

  /**
   * hideModal function
   */
  _hideModal() {
    this._modalVisible = false;
    this._modal.style.display = 'none';
  }

  /**
   * attribute change event handler
   * @param {*} name
   * @param {*} oldValue
   * @param {*} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {}
}

// define the beast-tooltip element
if (!customElements.get('core-modal')) {
  customElements.define('core-modal', coreModal);
}

