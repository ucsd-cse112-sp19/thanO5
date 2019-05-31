import {LitElement, html, css} from 'lit-element';

/**
 * Beast Button
 * (1) color this button with given attributes or other colors you like
 * (2) size the button with given attributes or other sizes you like
 * // TODO (3) change the font of the text in the button
 * (4) choose the theme of the button
 */
export default class CoreButtonFilled extends LitElement {
  /**
   * properties getter
   */
  static get properties() {
    return {
      color: String,
      size: String,
      theme: String,
    };
  }

  /**
   * constructor
   */
  constructor() {
    super();
    this.color = 'danger';
    this.size = 'medium';
    this.theme = 'standard';
  }

  /**
   * styles getter
   */
  static get styles() {
    return css`
      :host {
        display: inline-block;
        cursor: pointer;
      }

      :host([size="tiny"]) {
        --height: 10px;

        font-size: 10px;
      }

      :host([size="xsmall"]) {
        --height: 15px;

        font-size: 15px;
      }

      :host([size="small"]) {
        --height: 20px;

        font-size: 20px;
      }

      :host([size="medium"]) {
        --height: 30px;

        font-size: 30px;
      }

      :host([size="large"]) {
        --height: 40px;

        font-size: 40px;
      }

      :host([color="danger"]) {
        --background-color: #ff4057;
        --shadow-color: #900048;
        --color: white;
      }

      :host([color="primary"]) {
        --background-color: #007bff;
        --shadow-color: #004acc;
        --color: white;
      }

      :host([color="secondary"]) {
        --background-color: #6c757d;
        --shadow-color: #4c454d;
        --color: white;
      }

      :host([color="success"]) {
        --background-color: #28a745;
        --shadow-color: #188725;
        --color: white;
      }

      :host([color="warning"]) {
        --background-color: #ffc107;
        --shadow-color: #cca103;
        --color: black;
      }

      :host([color="info"]) {
        --background-color: #17a2b8;
        --shadow-color: #097a94;
        --color: white;
      }

      #button {
        background-color: var(--background-color);
        color: var(--color);
        border: none;
        border-radius: 0.5em;
        font-family: Sans-Serif;
        height: var(--height);
        line-height: var(--height);
        text-align: center;
        padding: 0.5em;
        width: 5em;
      }

      :host([theme="standard"]) #button {
        font-family: Sans-Serif;
        padding: 0.6em;
      }

      :host([theme="vivid"]) #button {
        box-shadow: 0 0.4em var(--shadow-color);
      }

      :host([theme="vivid"]) #button:hover {
        box-shadow: 0 0.35em var(--shadow-color);
        transform: translateY(0.05em);
      }

      :host([theme="vivid"]) #button:active {
        box-shadow: 0 0.2em var(--shadow-color);
        transform: translateY(0.2em);
      }
    `;
  }

  /**
   * render
   * @return {*}
   */
  render() {
    return html`
      <div id="button">
        <slot>Submit</slot>
      </div>
    `;
  }

  /**
   * refresh
   * @param {*} changedProperties
   */
  refresh(changedProperties) {
    // changedProperties.forEach((oldValue, propName) => {
    //   switch (propName) {
    //     case 'color': {
    //       this._button.classList.add('danger');
    //       break;
    //     }
    //     case 'size': {
    //       this._button.classList.add('medium');
    //       break;
    //     }
    //     case 'theme': {
    //       this._button.classList.add('threeD');
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // });
  }

  /**
   * clickHandler
   * @param {*} e
   */
  clickHandler(e) {
    console.log(e.target);
  }

  /**
   * firstUpdated
   * @param {*} changedProperties
   */
  firstUpdated(changedProperties) {
    this._button = this.shadowRoot.getElementById('button');
    this.refresh(changedProperties);
  }

  /**
   * Updated
   * @param {*} changedProperties
   */
  Updated(changedProperties) {
    this.refresh(changedProperties);
  }
}

if (!customElements.get('core-button-filled')) {
  customElements.define('core-button-filled', CoreButtonFilled);
}
