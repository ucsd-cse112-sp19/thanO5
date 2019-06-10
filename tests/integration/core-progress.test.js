import '../../components/core-progress/core-progress';

describe('CoreProgress Integration Tests', () => {
  // set up the core-progress element before all of the specs
  const element = document.createElement('core-progress');
  document.body.append(element);

  // make sure the default progress element works as expected
  it('should start out as a default progress element', () => {
    console.log('TEST 1');

    expect(element.type).toBe('line');
    expect(element.percentage).toBe(0);
    expect(element.status).toBeUndefined();
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(false);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(false);
    expect(element.color).toBeUndefined();
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // status changes, doesn't affect other attributes
  it('should add status to the default progress element', () => {
    console.log('TEST 2');

    element.status = 'exception';
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(0);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(false);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(false);
    expect(element.color).toBeUndefined();
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // text is now inside, doesn't affect other attributes
  it('should set textInside to be true', () => {
    console.log('TEST 3');

    element.textInside = true;
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(0);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(false);
    expect(element.color).toBeUndefined();
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // showing text, doesn't affect other attributes
  it('should show text', () => {
    console.log('TEST 4');

    element.showText = true;
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(0);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(true);
    expect(element.color).toBeUndefined();
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // color changes, doesn't affect other attributes
  it('should change the color', () => {
    console.log('TEST 5');

    element.color = '#8e71c7';
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(0);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // percentage changes, doesn't affect other attributes
  it('should change the percentage', () => {
    console.log('TEST 6');

    element.percentage = 40;
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(40);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(6);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // strokeWidth changes, doesn't affect other attributes
  it('should change the strokeWidth', () => {
    console.log('TEST 7');

    element.strokeWidth = 20;
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(40);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(20);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(126);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // width changes, doesn't affect other attributes
  it('should change the width', () => {
    console.log('TEST 8');

    element.width = 150;
    expect(element.type).toBe('line');
    expect(element.percentage).toBe(40);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(20);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(150);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-circle-close');
  });

  // icon type changes, doesn't affect other attributes
  it('should change icon based on type', () => {
    console.log('TEST 9');

    element.type = 'circle';
    expect(element.type).toBe('circle');
    expect(element.percentage).toBe(40);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(20);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(150);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-close');
  });

  // removing/resetting attributes don't affect others in unexpected way
  it('removal of attributes 1 by 1', () => {
    console.log('TEST 10');

    expect(element.type).toBe('circle');
    expect(element.percentage).toBe(40);
    expect(element.status).toBe('exception');
    expect(element.strokeWidth).toBe(20);
    expect(element.textInside).toBe(true);
    expect(element.width).toBe(150);
    expect(element.showText).toBe(true);
    expect(element.color).toBe('#8e71c7');
    expect(element.iconClass).toBe('el-icon-close');
    element.type = false;
    expect(element.type).toBe('line');
    expect(element.iconClass).toBe('el-icon-circle-close');
    element.percentage = false;
    expect(element.percentage).toBe(0);
    element.status = false;
    expect(element.status).toBeUndefined();
    element.strokeWidth = false;
    expect(element.strokeWidth).toBe(6);
    element.textInside = false;
    expect(element.textInside).toBe(false);
    element.width = false;
    expect(element.width).toBe(126);
    element.showText = false;
    expect(element.showText).toBe(false);
    element.color = false;
    expect(element.color).toBeUndefined();
  });

  // More integrations
  it('', () => {
    console.log('TEST 11');
  });
});
