/*
            Notes: Without creating this class the 'my-wc' custom element will just be treated as a
            container, sort of like a div. 
        */
class CoreButton extends HTMLElement { // every HTML element extends HTMLELement 
    // so my wc must do so as well
    constructor() {
        super(); // HTMLElement does class definitions by calling super()

        // create a shadowdom to encapsulate data inside of the custom elements
        // private document. This data will not be accessed by the rest of the 
        // html DOM.
        let shadowdom = this.attachShadow({ mode: 'open' });
        //let template = document.getElementById('my-wc');

        const template = document.createElement('template');
        const templateString = '<button id="my-bt" type="button"><slot></slot></button>';
        template.innerHTML = templateString;

        let templateHTML = template.content.cloneNode(true);
        shadowdom.appendChild(templateHTML);
        
    }

}
customElements.define('core-hello', CoreButton);


