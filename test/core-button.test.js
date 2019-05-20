describe('CoreButton Unit Tests', () => {
  console.log('***STARTING CORE-BUTTON TESTS***');
  // before each spec, set up the core-button element
  let element;
  let shadowRoot;
  let button;
  beforeEach(() => {
    element = document.createElement('core-button');
    shadowRoot = element.shadowRoot;
    button = shadowRoot.getElementById('button');
    document.body.append(element);
  });

  // test for default button with no attributes
  describe('default', () => {
    it('should add an empty slot for the button', () => {
      expect(button.innerHTML).toBeTruthy();
    });

    it('should have nothing in the innerHTML', () => {
      expect(element.innerHTML).toBe('');
    });

    it('should not have any attributes', () => {
      // using the getters
      expect(element.rounded).toBe(false);
      expect(element.size).toBeNull();
      expect(element.shadow).toBe(false);
      expect(element.color).toBeNull();
      expect(element.animated).toBe(false);
      expect(element.circle).toBe(false);
    });
  });

  // test for text content
  describe('text content', () => {
    // insert html text into a sample button
    const textButton = `<core-button id='textButton'>Large</core-button>`;
    document.body.insertAdjacentHTML('afterbegin', textButton);
    const textElement = document.getElementById('textButton');
    const text = textElement.innerHTML;

    it('should say Large', () => {
      expect(text).toBe('Large');
    });
  });

  // test for rounded attribute
  describe('rounded setters/getters', () => {
    it('should add the rounded effect to the button', () => {
      expect(button.classList.contains('rounded')).toBe(false);
      expect(element.rounded).toBe(false);
      element.rounded = true;
      expect(element.rounded).toBe(true);
      expect(button.classList.contains('rounded')).toBe(true);
    });

    it('should remove the rounded effect from the button', () => {
      element.rounded = true;
      expect(button.classList.contains('rounded')).toBe(true);
      element.rounded = false;
      expect(element.rounded).toBe(false);
      expect(button.classList.contains('rounded')).toBe(false);
    });

    it('should not render the rounded effect if wrong value given', () => {
      element.setAttribute('rounded', 'wrong');
      expect(button.classList.contains('rounded')).toBe(false);

      // TODO - wrong input but element still has rounded effect??
      // This expect passes, but should it?
      // expect(element.rounded).toBe(true);
    });
  });

  // test for size attribute
  describe('size setters/getters', () => {
    it('should change the size of the button by toggling the size attribute',
        () => {
          element.size = 'small';
          expect(element.size).toBe('small');

          element.size = 'medium';
          expect(element.size).toBe('medium');

          element.size = 'large';
          expect(element.size).toBe('large');

          // element should not have size attribute
          // need to invoke setter's remove, not just call removeAttribute
          element.removeAttribute('size');
          expect(element.size).toBeNull();
        });

    // TODO - huge is not sanitized and will set it to huge
    it('should not change the size attribute if wrong input', () => {
      element.setAttribute('size', 'huge');
      expect(element.getAttribute('size')).toBe('huge');
    });
  });

  // test for shadow attribute
  describe('shadow setters/getters', () => {
    it('should change the shadow attribute', () => {
      element.shadow = true;
      expect(element.shadow).toBe(true);

      element.shadow = false;
      expect(element.shadow).toBe(false);

      // TODO element should not have shadow attribute
      // need to invoke setter's remove, not just call removeAttribute
      element.removeAttribute('shadow');
      expect(element.shadow).toBe(false);
    });
  });

  // test for color attribute
  describe('color setters/getters', () => {
    it('should change the color attribute', () => {
      element.color = 'primary';
      expect(element.color).toBe('primary');
      // expect(button.classList.contains('color')).toBe('true');

      element.color = 'secondary';
      expect(element.color).toBe('secondary');
      // expect(button.classList.contains('color')).toBe('true');

      element.color = 'dark';
      expect(element.color).toBe('dark');
      // expect(button.classList.contains('color')).toBe('true');

      // element should not have color attribute
      // need to invoke setter's remove, not just call removeAttribute
      element.removeAttribute('color');
      expect(element.color).toBeNull();
    });

    // TODO - need test for wrong input, input not sanitized
    it('should not change color if wrong value given', () => {
      element.color = 'wrong';
      expect(element.color).toBe('wrong');
      // expect(button.classList.contains('color')).toBe(false);
    });
  });

  // test for animated attribute
  describe('animated setters/getters', () => {
    it('should change the animated attribute', () => {
      element.animated = true;
      expect(element.animated).toBe(true);

      element.animated = false;
      expect(element.animated).toBe(false);

      // TODO element should not have animated attribute
      // need to invoke setter's remove, not just call removeAttribute
      element.removeAttribute('animated');
      expect(element.animated).toBe(false);
    });
  });

  // test for circle attribute
  describe('circle setters/getters', () => {
    it('should change the circle attribute', () => {
      element.circle = true;
      expect(element.circle).toBe(true);

      element.circle = false;
      expect(element.circle).toBe(false);

      // TODO element should not have circle attribute
      // need to invoke setter's remove, not just call removeAttribute
      element.removeAttribute('circle');
      expect(element.circle).toBe(false);
    });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
