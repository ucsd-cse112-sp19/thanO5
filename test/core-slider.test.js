describe('CoreSlider Unit Tests', () => {
  // before each spec, set up the core-slider element
  let element;
  let shadowRoot;
  let slider;
  let content;
  let description;
  let title;
  beforeEach(() => {
    element = document.createElement('core-slider');
    shadowRoot = element.shadowRoot;
    description = shadowRoot.querySelector('#description');
    slider = shadowRoot.querySelector('#slider');
    title = shadowRoot.querySelector('slot[name="title"] span');
    content = shadowRoot.querySelector('slot[name="content"] p');
    document.body.append(element);
  });

  // test for default slider with no attributes
  describe('default', () => {
    it('whatever', () => {
      console.log('element = ', element);
      console.log('shadowRoot = ', shadowRoot);
      console.log('description = ', description);
      console.log('slider = ', slider);
      console.log('title', title);
      console.log('content = ', content);
      expect(true).toBe(true);
    });
    // it('should add a div element with an id slider', () => {
    //   expect(slider.innerHTML).toBeTruthy();
    // });

    // it(`should add a div element with an id description`), () => {
    // expect(description).toBeTruthy();
    // });
  /*
  it(`should add a slot element with name content and the content is "Description
  of these pictures."`, () => {
          expect(content.innerHTML).toBe('Description of these pictures.');
      });

  it(`should add a span element with name title and the content is "Title"`, () => {
      expect(title.innerHTML).toBe('Title');
  }); */
  });


  /*
  describe('size', () => {
      it('should change the size of the slider element by toggling the size attribute',
          () => {

              element.size = 'tiny';
              expect(element.size).toBe('tiny');

              element.size = 'xsmall';
              expect(element.size).toBe('xsmall');

              element.size = 'small';
              expect(element.size).toBe('small');

              element.size = 'medium';
              expect(element.size).toBe('medium');

              element.size = 'large';
              expect(element.size).toBe('large');

              // element should not have size attribute
              element.removeAttribute('size');
              expect(element.size).toBeNull();
          });
  });

  describe('theme', () => {
      it('should change the theme of the slider element by toggling the theme attribute',
          () => {

              element.theme = 'rounded';
              expect(element.theme).toBe('rounded');

              element.theme = 'circle';
              expect(element.theme).toBe('circle');

              // element should not have size attribute
              element.removeAttribute('theme');
              expect(element.theme).toBeNull();
          });

      it('should add or remove theme', () => {
          element.theme = true;
          expect(element.theme).toBe(true);

          element.theme = false;
          expect(element.theme).toBe(false);

          // need to invoke setter's remove, not just call removeAttribute
          element.removeAttribute('theme');
          expect(element.theme).toBe(false);
      });
  });

  // test for text content
  describe('time', () => {
      it('should change the update time for each picture in the slider element', () => {
          element.time = '4s';
          expect(time).toBe('4s');

          element.time = '0s';
          expect(time).toBe('0s');

          element.time = '9s';
          expect(time).toBe('9s');
      });
  });

  describe('shadow', () => {
      it('should add or remove the shadowy effect on the slider element', () => {
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

  describe('control', () => {
      it('should give control menu and control arrows for changing pictures', () => {
          expect(slider.classList.contains('control')).toBe(false);
          expect(element.control).toBe(false);
          element.control = true;
          expect(element.control).toBe(true);
          expect(slider.classList.contains('control')).toBe(true);
      });

      it('should remove control menu and control arrows for changing pictures', () => {
          element.control = true;
          expect(slider.classList.contains('control')).toBe(true);
          element.control = false;
          expect(element.control).toBe(false);
          expect(slider.classList.contains('control')).toBe(false);
      });
  }); */

  /* afterEach(() => {
    document.body.removeChild(element);
  }); */
});
