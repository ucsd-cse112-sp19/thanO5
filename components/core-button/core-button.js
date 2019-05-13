/**
 * Core button class.
 */
class CoreButton extends HTMLElement {
  /**
   * Constructor for CoreButton class.
   */
  constructor() {
    super(); // HTMLElement does class definitions by calling super()


    const shadowdom = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    const templateString = `
    <style>
      .rounded{
        border-radius:25px;
        border: 2px solid #73AD21;
        width: 200px;
        height: 150px;
      }
    </style>
    <button id="my-bt" type="button"><slot></slot></button>
    `;
    template.innerHTML = templateString;

    const templateHTML = template.content.cloneNode(true);
    shadowdom.appendChild(templateHTML);
  }
}
customElements.define('core-hello', CoreButton);
