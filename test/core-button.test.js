describe('CoreButton Unit Tests', () => {
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

    it('should not have rounded, size, shadow, or color attribute',
        () => {
          // using the getters
          expect(element.rounded).toBe(false);
          expect(element.size).toBe(false);
          expect(element.shadow).toBe(false);
          expect(element.color).toBe(false);
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
          element.setAttribute('size', 'small');
          expect(element.getAttribute('size')).toBe('small');

          element.setAttribute('size', 'medium');
          expect(element.getAttribute('size')).toBe('medium');

          element.setAttribute('size', 'large');
          expect(element.getAttribute('size')).toBe('large');

          // element should have size attribute
          expect(element.size).toBe(true);

          // element should not have size attribute
          element.removeAttribute('size');
          expect(element.size).toBe(false);
        });

    // TODO - huge is not sanitized and will set it to huge
    it('should not change the size attribute if wrong input', () => {
      element.setAttribute('size', 'huge');
      expect(element.getAttribute('size')).toBe('huge');
    });
  });

  // test for shadow attribute
  describe('shadow', () => {
    it('should change the shadow attribute', () => {
      element.setAttribute('shadow', 'what?');
      expect(element.getAttribute('shadow')).toBe('what?');

      // element should have shadow attribute
      expect(element.shadow).toBe(true);

      // element should not have shadow attribute
      element.removeAttribute('shadow');
      expect(element.shadow).toBe(false);
    });
  });

  // test for color attribute
  describe('color', () => {
    it('should change the color attribute', () => {
      element.setAttribute('color', 'primary');
      expect(element.getAttribute('color')).toBe('primary');
      // expect(button.classList.contains('color')).toBe(true);
      // element.color = true;
      element.setAttribute('color', 'secondary');
      expect(element.getAttribute('color')).toBe('secondary');

      element.setAttribute('color', 'dark');
      expect(element.getAttribute('color')).toBe('dark');

      // element should have color attribute
      expect(element.color).toBe(true);

      // element should not have color attribute
      element.removeAttribute('shadow');
      expect(element.shadow).toBe(false);
    });

    // TODO - need test for wrong input
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
