import '../../components/core-hello/core-hello.js';

describe('CoreHello Unit Tests', () => {
  // console.log('***STARTING CORE-HELLO TESTS***');
  let element;
  let shadowRoot;
  let message;
  let hello;
  let name;
  beforeEach(() => {
    element = document.createElement('core-hello');
    shadowRoot = element.shadowRoot;
    message = shadowRoot.querySelector('p#message');
    hello = shadowRoot.querySelector('span#hello');
    name = shadowRoot.querySelector('slot[name="name"]');
    document.body.append(element);
  });

  // check that default message works
  describe('default', () => {
    it('should add a p element with an id message', () => {
      expect(message).toBeTruthy();
    });

    it(`should add a span element with an id hello and the content is "Hello 
        World "`, () => {
      expect(hello.innerHTML).toBe('Hello World ');
    });

    it('should add a slot named "name" and its content is "Default Text"',
        () => {
          expect(name.textContent).toBe('Default Text');
        });

    it('language attribute should be null', () => {
      expect(element.lang).toBeNull();
    });

    it('rainbow attribute should be false', () => {
      expect(element.rainbow).toBe(false);
    });
  });

  // check that message language can be changed through lang attribute
  describe('language', () => {
    it('should translate the hello message to Spanish', () => {
      element.setAttribute('lang', 'es');
      expect(hello.innerHTML).toBe('Hola Mundo ');
    });

    it('should translate the hello message to hindi', () => {
      element.setAttribute('lang', 'hi');
      expect(hello.innerHTML).toBe('नमस्ते दुनिया ');
    });

    it('should not translate the hello message', () => {
      // console.log(hello.innerHTML);
      element.setAttribute('lang', 'undefined_letters');
      expect(hello.innerHTML).toBe('Hello World ');
    });
  });

  // check that rainbow effect works via rainbow attribute
  describe('rainbow', () => {
    it(`should add the rainbow effect to the message by toggling the 
    rainbow attribute`, () => {
      element.setAttribute('rainbow', '');
      expect(message.classList.contains('rainbow')).toBe(true);
    });

    it('should remove the rainbow effect', () => {
      element.setAttribute('rainbow', '');
      // console.log('Rainbow effect:', message.classList.contains('rainbow'));
      element.removeAttribute('rainbow');
      expect(message.classList.contains('rainbow')).toBe(false);
    });

    it('should not render the rainbow effect if a wrong value is given', () => {
      element.setAttribute('rainbow', 'wrong');
      expect(message.classList.contains('rainbow')).toBe(false);
    });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
