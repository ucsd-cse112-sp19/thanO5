import '../../components/core-badge/core-badge';

describe('CoreBadge Integration Tests', () => {
  // set up the default core-badge element before all of the specs
  const element = document.createElement('core-badge');
  document.body.append(element);

  // make sure the default badge works as expected
  it('should start out as a default badge', () => {
    console.log('TEST 1');

    expect(element.innerHTML).toBe('');
    expect(element.content).toBeUndefined();
    expect(element.value).toBeUndefined();
    expect(element.max).toBeUndefined();
    expect(element.isDot).toBe(false);
    expect(element.hidden).toBe(false);
    expect(element.type).toBeUndefined();
  });

  it('should give the default badge a number value', () => {
    console.log('TEST 2');

    element.value = 10;
    expect(element.value).toBe(10);
    expect(element.content).toBe(10);
  });

  it('should add the max attribute to the badge', () => {
    console.log('TEST 3');

    element.max = 100;
    expect(element.value).toBe(10);
    expect(element.max).toBe(100);
    expect(element.content).toBe(10);
  });

  // TODO - should this remove value/max since it doesn't display anymore
  it('should change the badge to be a dot', () => {
    console.log('TEST 4');

    element.isDot = true;
    expect(element.value).toBe(10);
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(true);
    expect(element.content).toBe('');
  });

  it('should hide the badge but still maintain its attributes', () => {
    console.log('TEST 5');

    element.hidden = true;
    expect(element.value).toBe(10);
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(true);
    expect(element.hidden).toBe(true);
    expect(element.content).toBe('');
  });

  it('should change the type/color of the badge', () => {
    console.log('TEST 6');

    element.type = 'success';
    expect(element.value).toBe(10);
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(true);
    expect(element.hidden).toBe(true);
    expect(element.type).toBe('success');
    expect(element.content).toBe('');
  });

  it('should unhide the badge and no longer make it a dot', () => {
    console.log('TEST 7');

    element.isDot = false;
    element.hidden = false;
    expect(element.value).toBe(10);
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(false);
    expect(element.hidden).toBe(false);
    expect(element.type).toBe('success');
    expect(element.content).toBe(10);
  });

  it('should cap the value at max when value is > max', () => {
    console.log('TEST 8');

    element.value = 112;
    expect(element.value).toBe(112);
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(false);
    expect(element.hidden).toBe(false);
    expect(element.type).toBe('success');
    expect(element.content).toBe('100+');
  });

  it('should not cap the value is value is a string', () => {
    console.log('TEST 9');

    element.value = 'new';
    expect(element.value).toBe('new');
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(false);
    expect(element.hidden).toBe(false);
    expect(element.type).toBe('success');
    expect(element.content).toBe('new');
  });

  it('reset attributes 1 by 1', () => {
    console.log('TEST 10');

    expect(element.value).toBe('new');
    expect(element.max).toBe(100);
    expect(element.isDot).toBe(false);
    expect(element.hidden).toBe(false);
    expect(element.type).toBe('success');
    expect(element.content).toBe('new');
    element.value = false;
    expect(element.value).toBeUndefined();
    element.max = false;
    expect(element.max).toBeUndefined();
    element.type = false;
    expect(element.type).toBeUndefined();
    expect(element.content).toBeUndefined();
  });

  // TODO? - Tests for Integration with innerHTML like button component
  it('', () => {
    console.log('TEST 11');
  });
});
