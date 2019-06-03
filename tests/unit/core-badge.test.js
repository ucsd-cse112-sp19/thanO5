import '../../components/core-badge/core-badge';

describe('CoreBadge Unit Tests', () => {
  // before each spec, set up the core-badge element
  let element;
  beforeEach(() => {
    element = document.createElement('core-badge');
    document.body.append(element);
  });

  // test for default badge
  describe('default', () => {
    it('should be empty', () => {
      expect(element.innerHTML).toBe('');
    });

    it('content should be undefined', () => {
      expect(element.content).toBeUndefined();
    });

    it('value attribute should be undefined', () => {
      expect(element.value).toBeUndefined();
    });

    it('max attribute should be undefined', () => {
      expect(element.max).toBeUndefined();
    });

    it('is-dot attribute should be false', () => {
      expect(element.isDot).toBe(false);
    });

    it('hidden attribute should be false', () => {
      expect(element.hidden).toBe(false);
    });

    it('type attribute should be undefined', () => {
      expect(element.type).toBeUndefined();
    });
  });

  // test for value attribute
  describe('value attribute setters/getters', () => {
    it('should change the value of the badge using number input', () => {
      element.value = 10;
      expect(element.value).toBe(10);
    });

    it('should change the value of the badge using string input', () => {
      element.value = 'hot';
      expect(element.value).toBe('hot');
    });

    it('should remove the value attribute and set it to undefined', () => {
      element.value = 10;
      element.value = false;
      expect(element.value).toBeUndefined();
    });

    it('bad input (not string or number) should remove value', () => {
      element.value = 10;
      element.value = true;
      expect(element.value).toBeUndefined();
    });
  });

  // test for max attribute
  describe('max attribute setters/getters', () => {
    it('should change the max value of the badge using number input', () => {
      element.max = 100;
      expect(element.max).toBe(100);
    });

    it('should not change the max value of the badge if string input', () => {
      element.max = 'very high';
      expect(element.max).toBeUndefined();
    });

    it('should remove the max attribute and set it to undefined', () => {
      element.max = 100;
      element.max = false;
      expect(element.max).toBeUndefined();
    });
  });

  // test for is-dot attribute
  describe('is-dot attribute getters/setters', () => {
    it('should set the isDot attribute to true', () => {
      element.isDot = true;
      expect(element.isDot).toBe(true);
    });

    it('should set the isDot attribute to false', () => {
      element.isDot = true;
      element.isDot = false;
      expect(element.isDot).toBe(false);
    });

    it('isDot should remain false is input is not the boolean true', () => {
      element.isDot = 10;
      expect(element.isDot).toBe(false);
    });
  });

  // test for hidden attribute
  describe('hidden attribute getters/setters', () => {
    it('should set the hidden attribute to true', () => {
      element.hidden = true;
      expect(element.hidden).toBe(true);
    });

    it('should set the hidden attribute to false', () => {
      element.hidden = true;
      element.hidden = false;
      expect(element.hidden).toBe(false);
    });

    it('hidden should remain false is input is not the boolean true', () => {
      element.hidden = 10;
      expect(element.hidden).toBe(false);
    });
  });

  // test for type attribute
  describe('type attribute getters/setters', () => {
    it('should set the type to primary', () => {
      element.type = 'primary';
      expect(element.type).toBe('primary');
    });

    it('should set the type to success', () => {
      element.type = 'success';
      expect(element.type).toBe('success');
    });

    it('should set the type to warning', () => {
      element.type = 'warning';
      expect(element.type).toBe('warning');
    });

    it('should set the type to info', () => {
      element.type = 'info';
      expect(element.type).toBe('info');
    });

    it('should set the type to danger', () => {
      element.type = 'danger';
      expect(element.type).toBe('danger');
    });

    it('should not set the type if string is not pre-defined', () => {
      element.type = 'happy';
      expect(element.type).toBeUndefined();
    });

    it('should not set the type if wrong value is passed in', () => {
      element.type = 10;
      expect(element.type).toBeUndefined();
    });
  });

  // test for when both value and max are numbers
  describe('content getter', () => {
    it('should set value to be value when less than max', () => {
      element.value = 10;
      element.max = 100;
      expect(element.content).toBe(10);
    });

    it('should set value to be max+ when more than max', () => {
      element.value = 100;
      element.max = 10;
      expect(element.content).toBe('10+');
    });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
