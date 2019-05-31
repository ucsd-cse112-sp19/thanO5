// import Locale from '../helpers/mixins/locale';
import {on, off, getScrollContainer, isInContainer} from '../../element-helpers/utils/dom';
import {isString, isHtmlElement} from '../../element-helpers/utils/types';
import {throttle} from 'throttle-debounce';
// import templateString from './element-image.html';
// import styleString from '../styles/index.scss';
import styleString from './core-image.scss';

// create template element
// const template = document.createElement('template');
// template.innerHTML = templateString;
// const template = document.createElement('template');

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
export default class CoreImage extends HTMLElement {
  /**
   * constructor
   */
  constructor() {
    super();

    this._src = this.getAttribute('src') || undefined;
    this._fit = this.getAttribute('fit') || undefined;
    this._lazy = this.hasAttribute('lazy') || false;

    this._loading = true;
    this._error = false;

    this._show = !this._lazy;
    this._imageWidth = 0;
    this._imageHeight = 0;
    this._scrollContainer = {};
    this._isServer = !(typeof window != 'undefined' && window.document);

    this._template = document.createElement('template');
    this.attachShadow({mode: 'open'});
    this._updateTemplate();
  }

  /**
   * src getter
   */
  get src() {
    return this._src;
  }

  /**
   * src setter
   * @param {String} val
   */
  set src(val) {
    if (typeof val === 'string') {
      this._src = val;
      this.setAttribute('src', val);
    } else {
      this._src = undefined;
      this.removeAttribute('src');
    }

    this._show && this._loadImage();
  }

  /**
   * fit getter
   */
  get fit() {
    return this._fit;
  }

  /**
   * fit setter
   * @param {String} val
   */
  set fit(val) {
    if (['fill', 'contain', 'cover', 'none', 'scale-down'].indexOf(val) > -1) {
      this._fit = val;
      this.setAttribute('fit', val);
    } else {
      this._fit = undefined;
      this.removeAttribute('fit');
    }
  }

  /**
   * lazy getter
   */
  get lazy() {
    return this._lazy;
  }

  /**
   * lazy setter
   * @param {Boolean} val
   */
  set lazy(val) {
    if (val === true) {
      this._lazy = true;
      this.setAttribute('lazy', '');
    } else {
      this._lazy = false;
      this.removeAttribute('lazy');
    }
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    if (this.lazy) {
      this._addLazyLoadListener();
    } else {
      this._loadImage();
    }
  }

  /**
   * disconnectedCallback
   */
  disconnectedCallback() {
    this.lazy && this._removeLazyLoadListener();
  }

  /**
   * imageStyle getter
   */
  get imageStyle() {
    if (!this._isServer && this.fit) {
      if (isSupportObjectFit()) {
        return `object-fit:${this.fit}`;
      } else {
        const _imageStyle = this._getImageStyle(this.fit);
        return _imageStyle.substr(1, _imageStyle.length - 2);
      }
    }
    return '';
  }

  /**
   * loadTemplate
   */
  _updateTemplate() {
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

    this._template.innerHTML = templateString;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this._template.content);
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
    return !this._isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
  }

  /**
   * loadImage()
   */
  _loadImage() {
    if (this._isServer) return;
    // reset status
    this.loading = true;
    this.error = false;
    const img = new Image();
    img.onload = (e) => this._handleLoad(e, img);
    // img.onerror = this._handleError.bind(this);
    img.onerror = (e) => this._handleError(e);

    img.src = this.src;
  }

  /**
   * handleLoad()
   * @param {*} e
   * @param {*} img
   */
  _handleLoad(e, img) {
    this.imageWidth = img.width;
    this.imageHeight = img.height;
    this.loading = false;
    this._updateTemplate();
  }

  /**
   * handleError()
   * @param {*} e
   */
  _handleError(e) {
    this.loading = false;
    this.error = true;
    this._updateTemplate();
    // this.$emit('error', e);
  }

  /**
   * handleLazyLoad()
   */
  _handleLazyLoad() {
    if (isInContainer(this, this._scrollContainer)) {
      this.show = true;
      this._loadImage();
      this._removeLazyLoadListener();
    }
  }

  /**
   * addLazyLoadListener()
   */
  _addLazyLoadListener() {
    if (this._isServer) return;
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
      this._lazyLoadHandler = throttle(250, this._handleLazyLoad.bind(this));
      on(_scrollContainer, 'scroll', this._lazyLoadHandler);
      this._handleLazyLoad();
    }
  }

  /**
   * removeLazyLoadListener()
   */
  _removeLazyLoadListener() {
    const {_scrollContainer, _lazyLoadHandler} = this;
    if (this._isServer || !_scrollContainer || !_lazyLoadHandler) return;
    off(_scrollContainer, 'scroll', _lazyLoadHandler);
    this._scrollContainer = null;
    this._lazyLoadHandler = null;
  }

  /**
   * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
   * @param {*} fit
   * @return {*}
   */
  _getImageStyle(fit) {
    const {_imageWidth, _imageHeight} = this;
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

if (!customElements.get('core-image')) {
  customElements.define('core-image', CoreImage);
}
