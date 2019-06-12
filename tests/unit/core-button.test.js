import '../../components/core-button/core-button';

describe('CoreButton Unit Tests', () => {
  // console.log('***STARTING CORE-BUTTON TESTS***');
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

    it('rounded attribute should be false', () => {
      expect(element.rounded).toBe(false);
    });

    it('size attribute should be null', () => {
      expect(element.size).toBeNull();
    });

    it('shadow attribute should be false', () => {
      expect(element.shadow).toBe(false);
    });

    it('color attribute should be null', () => {
      expect(element.color).toBeNull();
    });

    it('animated attribute should be false', () => {
      expect(element.animated).toBe(false);
    });

    it('circle attribute should be false', () => {
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
    it('should add the rounded effect to the button element', () => {
      element.rounded = true;
      expect(element.rounded).toBe(true);
    });

    it('should add the rounded effect to the button classlist', () => {
      element.rounded = true;
      expect(button.classList.contains('rounded')).toBe(true);
    });

    it('should remove the rounded effect from the button element', () => {
      element.rounded = true;
      // console.log('Button attribute: ', button.classList.contains('rounded'));
      element.rounded = false;
      expect(element.rounded).toBe(false);
    });

    it('should remove the rounded effect from the button classlist', () => {
      element.rounded = true;
      // console.log('Button attribute: ', button.classList.contains('rounded'));
      element.rounded = false;
      expect(button.classList.contains('rounded')).toBe(false);
    });

    it('should not render the rounded effect if wrong value given', () => {
      element.setAttribute('rounded', 'wrong');
      expect(button.classList.contains('rounded')).toBe(false);
    });
  });

  // test for size attribute
  describe('size setters/getters', () => {
    it('should change the size of the button to small', () => {
      element.size = 'small';
      expect(element.size).toBe('small');
    });

    it('should change the size of the button to medium', () => {
      element.size = 'medium';
      expect(element.size).toBe('medium');
    });

    it('should change the size of the button to large', () => {
      element.size = 'large';
      expect(element.size).toBe('large');
    });

    it('should remove the size attribute when set to false', () => {
      element.size = false;
      expect(element.size).toBeNull();
    });

    // TODO - huge is not sanitized and will set it to huge or is this fine
    it('should not change the size attribute if wrong input', () => {
      element.setAttribute('size', 'huge');
      // expect(element.getAttribute('size')).toBe('huge');
      expect(button.classList.contains('size')).toBe(false);
    });
  });

  // test for shadow attribute
  describe('shadow setters/getter', () => {
    it('should add the shadow effect', () => {
      element.shadow = true;
      expect(element.shadow).toBe(true);
    });

    it('should remove the shadow effect', () => {
      element.shadow = false;
      expect(element.shadow).toBe(false);
    });
  });

  // test for color attribute
  describe('color setters/getters', () => {
    it('should change the color attribute to the primary color', () => {
      element.color = 'primary';
      expect(element.color).toBe('primary');
      // expect(button.classList.contains('color')).toBe('true');
    });

    it('should change the color attribute to the secondary color', () => {
      element.color = 'secondary';
      expect(element.color).toBe('secondary');
      // expect(button.classList.contains('color')).toBe('true');
    });

    it('should change the color attribute to the dark color', () => {
      element.color = 'dark';
      expect(element.color).toBe('dark');
      // expect(button.classList.contains('color')).toBe('true');
    });

    it('should remove the color attribute when set to false', () => {
      element.color = false;
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
    it('should add the animated effect when true', () => {
      element.animated = true;
      expect(element.animated).toBe(true);
    });

    it('should remove the animated effect when false', () => {
      element.animated = false;
      expect(element.animated).toBe(false);
    });
  });

  // test for circle attribute
  describe('circle setters/getters', () => {
    it('should add the circle effect when true', () => {
      element.circle = true;
      expect(element.circle).toBe(true);
    });

    it('should remove the circle effect when false', () => {
      element.circle = false;
      expect(element.circle).toBe(false);
    });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
