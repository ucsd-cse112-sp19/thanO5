// import $ from '../../utils/jquery.module.js';
// import $ from '../../../vendor/jquery-3.3.1.min';

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

    // create template prototype
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="../core-modal/core-modal.css">
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <slot name="header"><h1>Default text</h1></slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;

    // create shadowroot
    const shadowRoot = this.attachShadow({mode: 'open'});

    // Setup the template
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Get modal name
    const name = this.getAttribute('name');

    // Store elements
    this._modal = this.shadowRoot.querySelector('.modal');
    this._button = document.querySelector(`[modal="${name}"]`);
    this._close = this.shadowRoot.querySelector('.close');

    // This won't work beacuse I set overflow to hidden
    // $(this._modal).css('left', \
    // window.innerWidth / 2 - $(this._modal).offset().left);
    // $(this._modal).css('top', \
    // window.innerHeight / 2 - $(this._modal).offset().top);
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    this._button.addEventListener('click', this._showModal.bind(this));
    this._close.addEventListener('click', this._hideModal.bind(this));

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
  attributeChangedCallback(name, oldValue, newValue) {

  }
}

// define the beast-tooltip element
customElements.define('core-modal', coreModal);
