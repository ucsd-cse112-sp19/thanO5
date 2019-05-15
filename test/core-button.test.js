describe('CoreButton Unit Tests', () => {
  console.log('***STARTING CORE-BUTTON TESTS***');
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

    it('getters: should not have rounded, size, shadow, or color attribute',
        () => {
      expect(element.rounded).toBe(false);
      expect(element.size).toBe(false);
      expect(element.shadow).toBe(false);
      expect(element.color).toBe(false);
    });
  });

  // test for text content
  describe('text content', () => {
    const textButton = `<core-button id='textButton'>Large</core-button>`;
    document.body.insertAdjacentHTML('afterbegin', textButton);
    const textElement = document.getElementById('textButton');
    const text = textElement.innerHTML;

    it('should say Large', () => {
      expect(text).toBe('Large');
    });
  });

  // test for rounded attribute
  describe('rounded', () => {
    it('should add or remove the rounded effect to the button', () => {
      element.setAttribute('rounded', '');
      expect(button.classList.contains('rounded')).toBe(true);
      expect(element.rounded).toBe(true);

      element.removeAttribute('rounded');
      expect(button.classList.contains('rounded')).toBe(false);
      expect(element.rounded).toBe(false);
    });

    it('should not have a rounded effect if a wrong value is given', () => {
      element.setAttribute('rounded', 'wrong');
      expect(button.classList.contains('rounded')).toBe(false);
      // TODO - if user input isn't sanitized, classList will be false but
      // the element will have the rounded attribute still
      // expect(element.rounded).toBe(false);
    });
  });

  // test for size attribute
  describe('size', () => {
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

    // TODO - huge is not sanitized and will set it to huge which we don't have
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
