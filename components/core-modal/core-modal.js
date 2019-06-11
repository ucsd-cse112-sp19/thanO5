import templateString from './core-modal.html';
import styleString from './core-modal.css';

// Create template element
const template = document.createElement('template');
template.innerHTML = templateString;

// Create style element
const style = document.createElement('style');
style.innerHTML = styleString;

/**
 * A modal that is triggered by any element that
 * has attribute 'modal' with the same value as the value of the 'name' attribute of it
 */
class coreModal extends HTMLElement {
  /**
   * Initialize the shadowDOM
   */
  constructor() {
    super();

    // create shadowroot
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.appendChild(style.cloneNode(true));
  }

  /**
   * When the web component is appended to the DOM,
   * <br>1. Store references to some components of <core-modal> 
   * <br>2. Add click linsteners
   */
  connectedCallback() {
    // Store elements
    this._modal = this.shadowRoot.querySelector('.modal');
    this._close = this.shadowRoot.querySelector('.close');
    this._button = document.querySelector(`[modal="${this.getAttribute('name')}"]`);

    // Add Listeners
    this._close.addEventListener('click', this._hideModal.bind(this));
    this._button.addEventListener('click', this._showModal.bind(this));
  }

  /**
   * Clean up linsteners when the web component is disconnected with the DOM
   */
  disconnectedCallback() {
    this._button.removeEventListener('click', this._showModal.bind(this));
    this._close.removeEventListener('click', this._hideModal.bind(this));
  }

  /**
   * Show the modal content in a popup
   */
  _showModal() {
    this._modalVisible = true;
    this._modal.style.display = 'block';
  }

  /**
   * Hide the modal content
   */
  _hideModal() {
    this._modalVisible = false;
    this._modal.style.display = 'none';
  }
}

// Register the web component
if (!customElements.get('core-modal')) {
  customElements.define('core-modal', coreModal);
}

