// import Locale from '../helpers/mixins/locale';
import {on, off, getScrollContainer, isInContainer} from '../../element-helpers/utils/dom';
import {isString, isHtmlElement} from '../../element-helpers/utils/types';
import {throttle} from 'throttle-debounce';
// import templateString from './element-image.html';
// import styleString from '../styles/index.scss';
import styleString from './element-image.scss';

// create template element
// const template = document.createElement('template');
// template.innerHTML = templateString;
const template = document.createElement('template');

// create style element
const style = document.createElement('style');
style.innerHTML = styleString;

const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
const ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down',
};

/**
 * <element-image> component
 */
export default class ElementImage extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();

    this.src = '';
    this.fit = '';
    this.lazy = false;

    this._loading = true;
    this._error = false;

    this.attachShadow({mode: 'open'});
    this.updateTemplate();

    this.isServer = !(typeof window != 'undefined' && window.document);
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    this.show = !this.lazy;
    this.imageWidth = 0;
    this.imageHeight = 0;
    this.scrollContainer = {};

    if (this.lazy) {
      this.addLazyLoadListener();
    } else {
      this.loadImage();
    }
  }

  /**
   * disconnectedCallback
   */
  disconnectedCallback() {
    this.lazy && this.removeLazyLoadListener();
  }

  /**
   * observedAttributes getter
   */
  static get observedAttributes() {
    return [
      'src',
      'fit',
      'lazy',
    ];
  }

  /**
   * attributeChangedCallback()
   * @param {*} name
   * @param {*} oldVal
   * @param {*} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case 'src': {
        this.src = this.getAttribute('src');
        this.show && this.loadImage();
      }

      case 'fit': {
        this.fit = this.getAttribute('fit');
      }

      case 'lazy': {
        this.lazy = this.hasAttribute('lazy');
        // this.show = !this.lazy;
      }
    }
  }

  /**
   * imageStyle getter
   */
  get imageStyle() {
    const {fit} = this;
    if (!this.isServer && fit) {
      if (isSupportObjectFit()) {
        return `object-fit:${fit}`;
      } else {
        const _imageStyle = this.getImageStyle(fit);
        return _imageStyle.substr(1, _imageStyle.length - 2);
      }
    }
    return '';
  }

  /**
   * loadTemplate
   */
  updateTemplate() {
    let templateString;
    if (this.loading) {
      templateString = `
        <slot name="placeholder">
          <div class="el-image__placeholder"></div>
        </slot>
      `;
    } else if (this.error) {
      templateString = `
        <slot name="error">
          <div class="el-image__error"></div>
        </slot>
      `;
    } else {
      let classAttr;
      if (this.alignCenter) {
        classAttr = `class="el-image__inner--center"`;
      } else {
        classAttr = '';
      }

      let imageStyleAttr;
      if (this.imageStyle !== {}) {
        imageStyleAttr = `style=${this.imageStyle}`;
      } else {
        imageStyleAttr = '';
      }

      templateString = `
        <img
          class="el-image__inner"
          src=${this.src}
          ${imageStyleAttr}
          ${classAttr}>
      `;
    }
    template.innerHTML = templateString;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style.cloneNode(true));
  }

  /**
   * loading getter
   * @return {*}
   */
  get loading() {
    return this._loading;
  }

  /**
   * loading setter
   * @param {*} val
   */
  set loading(val) {
    this._loading = val;
  }

  /**
   * error getter
   * @return {*}
  */
  get error() {
    return this._error;
  }

  /**
   * error setter
   * @param {*} val
   */
  set error(val) {
    this._error = val;
  }

  /**
   * alignCenter getter
   */
  get alignCenter() {
    return !this.isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
  }

  /**
   * loadImage()
   */
  loadImage() {
    if (this.isServer) return;
    // reset status
    this.loading = true;
    this.error = false;
    const img = new Image();
    img.onload = (e) => this.handleLoad(e, img);
    img.onerror = this.handleError.bind(this);

    img.src = this.src;
  }

  /**
   * handleLoad()
   * @param {*} e
   * @param {*} img
   */
  handleLoad(e, img) {
    this.imageWidth = img.width;
    this.imageHeight = img.height;
    this.loading = false;
    this.updateTemplate();
  }

  /**
   * handleError()
   * @param {*} e
   */
  handleError(e) {
    this.loading = false;
    this.error = true;
    this.updateTemplate();
    // this.$emit('error', e);
  }

  /**
   * handleLazyLoad()
   */
  handleLazyLoad() {
    if (isInContainer(this, this._scrollContainer)) {
      this.show = true;
      this.loadImage();
      this.removeLazyLoadListener();
    }
  }

  /**
   * addLazyLoadListener()
   */
  addLazyLoadListener() {
    if (this.isServer) return;
    const {scrollContainer} = this;
    let _scrollContainer = null;
    if (isHtmlElement(scrollContainer)) {
      _scrollContainer = scrollContainer;
    } else if (isString(scrollContainer)) {
      _scrollContainer = document.querySelector(scrollContainer);
    } else {
      _scrollContainer = getScrollContainer(this);
    }
    if (_scrollContainer) {
      this._scrollContainer = _scrollContainer;
      this._lazyLoadHandler = throttle(250, this.handleLazyLoad.bind(this));
      on(_scrollContainer, 'scroll', this._lazyLoadHandler);
      this.handleLazyLoad();
    }
  }

  /**
   * removeLazyLoadListener()
   */
  removeLazyLoadListener() {
    const {_scrollContainer, _lazyLoadHandler} = this;
    if (this.isServer || !_scrollContainer || !_lazyLoadHandler) return;
    off(_scrollContainer, 'scroll', _lazyLoadHandler);
    this._scrollContainer = null;
    this._lazyLoadHandler = null;
  }

  /**
   * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
   * @param {*} fit
   * @return {*}
   */
  getImageStyle(fit) {
    const {imageWidth, imageHeight} = this;
    const {
      clientWidth: containerWidth,
      clientHeight: containerHeight,
    } = this;
    if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};
    const vertical = imageWidth / imageHeight < 1;
    if (fit === ObjectFit.SCALE_DOWN) {
      const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
      fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
    }
    switch (fit) {
      case ObjectFit.NONE:
        return {width: 'auto', height: 'auto'};
      case ObjectFit.CONTAIN:
        return vertical ? {width: 'auto'} : {height: 'auto'};
      case ObjectFit.COVER:
        return vertical ? {height: 'auto'} : {width: 'auto'};
      default:
        return {};
    }
  }
}

if (!customElements.get('element-image')) {
  customElements.define('element-image', ElementImage);
}
