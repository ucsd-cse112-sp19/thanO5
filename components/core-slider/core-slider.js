import uuid from 'uuid/v1';
import templateString from './core-slider.html';
import styleString from './core-slider.css';
import '../core-button/core-button';
import '../core-modal/core-modal';

// Create template element
const template = document.createElement('template');
template.innerHTML = templateString;

// Create style element
const style = document.createElement('style');
style.innerHTML = styleString;

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
    this._controlInitialized = false;

    // Create the shadow dom
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.appendChild(style.cloneNode(true));

    // Store slider link
    this._slider = this.shadowRoot.getElementById('slider');
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
      'size',
      'theme',
      'shadow',
      'text',
      'control',
    ];
  }

  /**
   * size setter
   * @param {*} val
   */
  set size(val) {
    if (val) {
      this.setAttribute('size', val);
    } else {
      this.removeAttribute('size');
    }
  }

  /**
   * theme setter
   * @param {*} val
   */
  set theme(val) {
    if (val) {
      this.setAttribute('theme', val);
    } else {
      this.removeAttribute('theme');
    }
  }

  /**
   * shadow setter
   * @param {*} val
   */
  set shadow(val) {
    if (val === true) {
      this.setAttribute('shadow', '');
    } else {
      this.removeAttribute('shadow');
    }
  }

  /**
   * text setter
   * @param {*} val
   */
  set text(val) {
    if (val === true) {
      this.setAttribute('text', '');
    } else {
      this.removeAttribute('text');
    }
  }

  /**
   * control setter
   * @param {*} val
   */
  set control(val) {
    if (val === true) {
      this.setAttribute('control', '');
    } else {
      this.removeAttribute('control');
    }
  }

  /**
   * size getter
   */
  get size() {
    return this.getAttribute('size');
  }

  /**
   * theme getter
   */
  get theme() {
    return this.getAttribute('theme');
  }

  /**
   * shadow getter
   */
  get shadow() {
    return this.getAttribute('shadow') === '';
  }

  /**
   * text getter
   */
  get text() {
    return this.getAttribute('text') === '';
  }

  /**
   * control getter
   */
  get control() {
    return this.getAttribute('control') === '';
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    // Find all image children
    this._imageChildren = this.getElementsByTagName('img');
    this._imageChildCount = this._imageChildren.length;

    // change to setInterval to avoid recursion
    this._start(0);
  }

  /**
   * Initialize control
   */
  _initControl() {
    // Find all image children
    this._imageChildren = this.getElementsByTagName('img');
    this._imageChildCount = this._imageChildren.length;

    // Set up control menu
    let menuHTML = '';

    for (let i = 0; i < this._imageChildCount; i ++) {
      menuHTML += `<div index=${i} class="menu-item"></div>`;
    }

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = menuHTML;

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

    leftArrow.addEventListener('click', () => {
      this.index -= 1;
      this._start(this.index);
    });

    rightArrow.addEventListener('click', () => {
      this.index += 1;
      this._start(this.index);
    });

    this._menu = menu;
    this._leftArrow = leftArrow;
    this._rightArrow = rightArrow;
  }

  /**
   * attributeChangedCallback
   * @param {*} attr
   * @param {*} oldV
   * @param {*} newV
   */
  attributeChangedCallback(attr, oldV, newV) {
    switch (attr) {
      case 'time': {
        this._slider.style.transitionDuration = newV;
        break;
      }

      case 'control': {
        // Set up control
        if (!this._controlInitialized) {
          this._initControl();
          this._controlInitialized = false;
        }

        if (this.control) {
          this._slider.appendChild(this._menu);
          this._slider.appendChild(this._leftArrow);
          this._slider.appendChild(this._rightArrow);
        } else if (oldV === '') {
          this._slider.removeChild(this._slider.querySelector('#menu'));
          this._slider.removeChild(this._slider.querySelector('#left-arrow'));
          this._slider.removeChild(this._slider.querySelector('#right-arrow'));
        }
      }

      case 'text': {
        // Set up read more button;
        if (this.text && this._title === undefined && this._content === undefined) {
          this._title = this.querySelector('[slot="title"]');
          this._content = this.querySelector('[slot="content"]');

          if (this.text && this._title !== null && this._content !== null) {
            this._hideContent();
          }
        }
      }

      default: break;
    }
  }

  /**
   * time getter
   */
  get time() {
    return this.getAttribute('time') || '2s';
  }

  /**
   * time setter
   * @param {*} val
   */
  set time(val) {
    if (val) {
      this.setAttribute('time', val);
    } else {
      this.setAttribute('time', '2s');
    }
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

    if (this.control && this._menuItems !== null) {
      this._menuItems.forEach((item) => {
        item.removeAttribute('selected', '');
      });
      this._menuItems[index].setAttribute('selected', '');
    }
  }
}

if (!customElements.get('core-slier')) {
  customElements.define('core-slider', coreSlider);
}

