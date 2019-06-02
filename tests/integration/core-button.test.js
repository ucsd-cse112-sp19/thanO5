import '../../components/core-button/core-button';

// Big Bang Style Integration Testing - all in 1 go
describe('CoreButton Integration Tests', () => {
  // set up the default button before all of the specs
  const element = document.createElement('core-button');
  const shadowRoot = element.shadowRoot;
  const button = shadowRoot.getElementById('button');
  document.body.append(element);

  // make sure the default button works as expected
  it('should start out as a default button', () => {
    console.log('TEST 1');

    expect(button.innerHTML).toBeTruthy();
    expect(element.innerHTML).toBe('');
    expect(element.rounded).toBe(false);
    expect(element.size).toBeNull();
    expect(element.shadow).toBe(false);
    expect(element.color).toBeNull();
    expect(element.animated).toBe(false);
    expect(element.circle).toBe(false);
  });

  it('should add the rounded attribute to the default button', () => {
    console.log('TEST 2');

    element.rounded = true;
    expect(element.rounded).toBe(true);
  });

  it('should change the size of the rounded button', () => {
    console.log('TEST 3');

    element.size = 'medium';
    expect(element.rounded).toBe(true);
    expect(element.size).toBe('medium');
  });

  it('should give the medium rounded button a shadow', () => {
    console.log('TEST 4');

    element.shadow = true;
    expect(element.rounded).toBe(true);
    expect(element.size).toBe('medium');
    expect(element.shadow).toBe(true);
  });

  it('should add color to the previous button', () => {
    console.log('TEST 5');

    element.color = 'primary';
    expect(element.rounded).toBe(true);
    expect(element.size).toBe('medium');
    expect(element.shadow).toBe(true);
    expect(element.color).toBe('primary');
  });

  it('should add the animated attribute to the previous button', () => {
    console.log('TEST 6');

    element.animated = true;
    expect(element.rounded).toBe(true);
    expect(element.size).toBe('medium');
    expect(element.shadow).toBe(true);
    expect(element.color).toBe('primary');
    expect(element.animated).toBe(true);
  });

  // TODO - change this to set rounded to be false
  it('should change the button to be a circle', () => {
    console.log('TEST 7');

    element.circle = true;
    expect(element.rounded).toBe(true); // this should now be false?
    expect(element.size).toBe('medium');
    expect(element.shadow).toBe(true);
    expect(element.color).toBe('primary');
    expect(element.animated).toBe(true);
    expect(element.circle).toBe(true);
  });

  it('remove attributes 1 by 1, but swap rounded and circle', () => {
    console.log('TEST 8');

    expect(element.rounded).toBe(true); // this should now be false?
    expect(element.size).toBe('medium');
    expect(element.shadow).toBe(true);
    expect(element.color).toBe('primary');
    expect(element.animated).toBe(true);
    expect(element.circle).toBe(true);
    element.rounded = true;
    expect(element.rounded).toBe(true);
    element.size = false;
    expect(element.size).toBeNull();
    element.shadow = false;
    expect(element.shadow).toBe(false);
    element.color = false;
    expect(element.color).toBeNull();
    element.animated = false;
    expect(element.animated).toBe(false);
    element.circle = false;
    expect(element.circle).toBe(false);
    element.rounded = false;
    expect(element.rounded).toBe(false);
  });
});
