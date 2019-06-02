import '../../components/core-progress/core-progress';

describe('CoreProgress Unit Tests', () => {
  // before each spec, set up the core-progress element
  let element;
  beforeEach(() => {
    element = document.createElement('core-progress');
    document.body.append(element);
  });

  // test for default progress element
  describe('default', () => {
    it('type attribute should be a line', () => {
      expect(element.type).toBe('line');
    });

    it('percentage attribute should be 0', () => {
      expect(element.percentage).toBe(0);
    });

    it('status attribute should be undefined', () => {
      expect(element.status).toBeUndefined();
    });

    it('strokeWidth attribute should be 6', () => {
      expect(element.strokeWidth).toBe(6);
    });

    it('textInside attribute should be false', () => {
      expect(element.textInside).toBe(false);
    });

    it('width attribute should be 126', () => {
      expect(element.width).toBe(126);
    });

    it('showText attribute should be true', () => {
      expect(element.showText).toBe(true);
    });

    it('color attribute should be undefined', () => {
      expect(element.color).toBeUndefined();
    });
  });

  // test for type attribute
  describe('type attribute setters/getters', () => {
    it('should change the type to be a circle', () => {
      element.type = 'circle';
      expect(element.type).toBe('circle');
    });

    it('should not change the type with non pre-defined value', () => {
      element.type = 'square';
      expect(element.type).toBe('line');
    });

    it('should not change the type with a wrong input type', () => {
      element.type = 10;
      expect(element.type).toBe('line');
    });
  });

  // test for percentage attribute
  describe('type percentage setters/getters', () => {
    it('should change the percentage', () => {
      element.percentage = 50;
      expect(element.percentage).toBe(50);
    });

    it('should reset the percentage if number is < 0', () => {
      element.percentage = -5;
      expect(element.percentage).toBe(0);
    });

    it('should reset the percentage if number is > 100', () => {
      element.percentage = 110;
      expect(element.percentage).toBe(0);
    });

    it('should reset the percentage if wrong input type is given', () => {
      element.percentage = true;
      expect(element.percentage).toBe(0);
    });
  });

  // test for status attribute
  describe('status attribute setters/getters', () => {
    it('should set the status to success', () => {
      element.status = 'success';
      expect(element.status).toBe('success');
    });

    it('should set the status to exception', () => {
      element.status = 'exception';
      expect(element.status).toBe('exception');
    });

    it('should set the status to text', () => {
      element.status = 'text';
      expect(element.status).toBe('text');
    });

    it('should not set the status if input is not pre-defined', () => {
      element.status = 'failing';
      expect(element.status).toBeUndefined();
    });

    it('should not set the status if wrong input type is given', () => {
      element.status = true;
      expect(element.status).toBeUndefined();
    });
  });

  // test for strokeWidth attribute
  describe('type attribute setters/getters', () => {
    it('should set the strokeWidth to 20', () => {
      element.strokeWidth = 20;
      expect(element.strokeWidth).toBe(20);
    });

    it('should reset the strokeWidth if input type is not a number', () => {
      element.strokeWidth = true
      expect(element.strokeWidth).toBe(6);
    });
  });

  // test for textInside attribute
  describe('textInside attribute setters/getters', () => {
    it('should set the textInside attribute to true', () => {
      element.textInside = true;
      expect(element.textInside).toBe(true);
    });

    it('should set the textInside attribute to false', () => {
      element.textInside = true;
      element.textInside = false;
      expect(element.textInside).toBe(false);
    });

    it('non boolean input should set textInside attribute to false', () => {
      element.textInside = 10;
      expect(element.textInside).toBe(false);
    });
  });

  // test for width attribute
  describe('width attribute setters/getters', () => {
    it('should set the width to a double', () => {
      element.width = 100.0;
      expect(element.width).toBe(100.0);
    });

    it('should reset the width to 126 if input is not a number', () => {
      element.width = true;
      expect(element.width).toBe(126);
    });
  });

  // test for showText attribute
  describe('showText attribute setters/getters', () => {
    it('should set the showText attribute to true', () => {
      element.showText = true;
      expect(element.showText).toBe(true);
    });

    it('should set the showText attribute to false', () => {
      element.showText = true;
      element.showText = false;
      expect(element.showText).toBe(false);
    });

    it('should reset showText to false if input is anything but true', () => {
      element.showText = 10;
      expect(element.showText).toBe(false);
    });
  });

  // test for color attribute
  describe('color attribute setters/getters', () => {
    it('should set the color to a new value', () => {
      element.color = '#8e71c7';
      expect(element.color).toBe('#8e71c7');
    });

    it('should not set the color if input is not a string', () => {
      element.color = 10;
      expect(element.color).toBeUndefined();
    });
  });


  // test stroke getter for choosing the color
  describe('stroke getter for color input', () => {
    it('should pick the color if color attribute is set correctly', () => {
      element.color = '#8e71c7';
      expect(element.stroke).toBe('#8e71c7');
    });

    it('should use success color if color is not defined', () => {
      element.status = 'success';
      expect(element.stroke).toBe('#13ce66');
    });

    it('should use exception color if color is not defined', () => {
      element.status = 'exception';
      expect(element.stroke).toBe('#ff4949');
    });

    it('should use default color if color is not defined', () => {
      expect(element.stroke).toBe('#20a0ff');
    });
  });

  // Need a test for wrong color input like a random string

  describe('icon class', () => {
    it('should use non circle icons for circle without success', () => {
      element.type = 'circle';
      expect(element.iconClass).toBe('el-icon-close');
    });

    it('should use non circle icons for circle with success', () => {
      element.type = 'circle';
      element.status = 'success';
      expect(element.iconClass).toBe('el-icon-check');
    });

    it('should use circle icons for line without success', () => {
      element.type = 'line';
      expect(element.iconClass).toBe('el-icon-circle-close');
    });

    it('should use circle icons for line with success', () => {
      element.type = 'line';
      element.status = 'success';
      expect(element.iconClass).toBe('el-icon-circle-check');
    });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
