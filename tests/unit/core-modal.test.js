import '../../components/core-modal/core-modal';
import '../../components/core-button/core-button';

describe('CoreModal Unit Tests', () => {
  // before each spec, set up the core-modal element
  let element;
  let button;
  beforeEach(() => {
    button = document.createElement('core-button');
    button.innerHTML = 'Submit';
    button.setAttribute('modal', 'test');
    document.body.appendChild(button);

    element = document.createElement('core-modal');
    element.setAttribute('name', 'test');
    // element.innerHTML = `<h1 slot="header">${title}</h1><p>${content}</p>`;
    element.innerHTML = `
      <h1 slot="header">Lalaland</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium a, deserunt, 
        quos suscipit minus minima eveniet mollitia doloribus possimus nulla accusamus fuga vitae? 
        Enim, iste. Eum quaerat dicta quas nesciunt molestiae odit error, fugit exercitationem aut eligendi,
        provident vel deleniti perspiciatis delectus alias eaque quam dolorem sit amet minima earum. 
        Delectus laudantium, suscipit, officia tenetur eveniet, iste ab voluptatem incidunt necessitatibus enim rem. 
        Suscipit incidunt ad impedit, nobis, deserunt aliquam cumque aperiam cupiditate sint hic assumenda, 
        iste eos consequatur mollitia illum voluptas accusamus unde provident. Quo distinctio ipsum accusantium quod, 
        sit unde nisi fuga qui voluptates. Error, dolores consequuntur.</p>
    `;
    document.body.appendChild(element);
  });

  it('should show the modal', () => {
    button.click();
    // TODO run some expect
  });

  it('should hide the modal', () => {
    const close = element.shadowRoot.querySelector('.close');
    close.click();
    // TODO run some expect
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
