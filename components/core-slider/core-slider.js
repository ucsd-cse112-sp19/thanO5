// const uuid = require('uuid/v1');

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

    // Create template prototype
    const template = document.createElement('template');
    template.innerHTML = `
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

    // Create the shadow dom
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content);

    // Store slider link
    this._slider = this.shadowRoot.getElementById('slider');

    // Set up text;
    if (this.getAttribute('text') === '') {
      this._title = this.querySelector('[slot="title"]');
      this._content = this.querySelector('[slot="content"]');

      if (this._title !== null && this._content !== null) {
        this._hideContent();
      }
    }

    // Find all image children
    this._imageChildren = this.getElementsByTagName('img');
    this._imageChildCount = this._imageChildren.length;

    // Set up control
    if (this.getAttribute('control') === '') {
      // Set up control menu
      let menuHTML = '';

      for (let i = 0; i < this._imageChildCount; i ++) {
        menuHTML += `<div index=${i} class="menu-item"></div>`;
      }

      const menu = document.createElement('div');
      menu.setAttribute('id', 'menu');
      menu.innerHTML = menuHTML;

      this._slider.appendChild(menu);

      Array.from(menu.children).forEach((child) => {
        child.addEventListener('click', () => {
          this._start(child.getAttribute('index'));
        });
      });

      this._menuItems = Array.from(menu.children);

      // Set up control arrows
      const leftArrow = document.createElement('div');
      const rightArrow = document.createElement('div');

      leftArrow.setAttribute('id', 'left-arrow');
      leftArrow.classList.add('arrow');

      rightArrow.setAttribute('id', 'right-arrow');
      rightArrow.classList.add('arrow');

      this._slider.appendChild(leftArrow);
      this._slider.appendChild(rightArrow);

      leftArrow.addEventListener('click', () => {
        this.index -= 1;
        this._start(this.index);
      });

      rightArrow.addEventListener('click', () => {
        this.index += 1;
        this._start(this.index);
      });
    }
  }

  /**
   * _hideContent
   */
  _hideContent() {
    const content = this._content.innerHTML;
    const title = this._title.innerHTML;
    const size = this.getAttribute('size');
    const theme = this.getAttribute('theme');
    const themeScale = theme === 'circle' ? 0.5 : 1;

    let needHide = false;
    let buttonSize;

    switch (size) {
      case 'small': {
        const limit = 30;
        buttonSize = 'tiny';
        if (content.length > limit * themeScale) {
          this._content.innerHTML = content.substring(0, limit) + '...';
          needHide = true;
        }
        break;
      }

      case 'medium': {
        const limit = 80;
        buttonSize = theme === 'circle' ? 'tiny' : 'xsmall';
        if (content.length > limit * themeScale) {
          this._content.innerHTML = content.substring(0, limit) + '...';
          needHide = true;
        }
        break;
      }

      case 'large': {
        const limit = 200;
        buttonSize = theme === 'circle' ? 'xsmall' : 'small';
        if (content.length > limit * themeScale) {
          this._content.innerHTML = content.substring(0, limit) + '...';
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
        button.setAttribute('style', 'margin: 20px 20px;');
        this._content.style['align-items'] = 'center';
      }

      button.innerHTML = 'Read more';
      this._content.appendChild(button);

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

  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return [
      'time',
    ];
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    // change to setInterval to avoid recursion
    this._start(0);
  }

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
    this._slider.style.transitionDuration = v;
  }

  /**
   * index getter
   */
  get index() {
    return this._index;
  }

  /**
   * index setter
   * @param {Number} v
   */
  set index(v) {
    this._index = v;
    // For looping
    if (this._index >= this._imageChildCount) this.index = 0;
    if (this._index < 0) this.index = Number(this._imageChildCount) - 1;
  }

  /**
   * start from a specific picture
   * @param {Number} index
   */
  _start(index) {
    if (this._interval !== undefined) {
      clearInterval(this._interval);
    }

    this._reRender(index);

    this.index = index;
    this._interval = setInterval(this._tick.bind(this), parseFloat(this.time) * 1000);
  }

  /**
   * tick function
   */
  _tick() {
    this.index = Number(this.index) + 1;
    this._reRender(this.index);
  }

  /**
   * @param {Number} index
   */
  _reRender(index) {
    Array.from(this._imageChildren).forEach((child) => {
      child.classList.add('hide');
    });
    this._imageChildren[index].classList.remove('hide');

    if (this.getAttribute('control') === '') {
      this._menuItems.forEach((item) => {
        item.removeAttribute('selected', '');
      });
      this._menuItems[index].setAttribute('selected', '');
    }
  }
}

window.customElements.define('core-slider', coreSlider);
