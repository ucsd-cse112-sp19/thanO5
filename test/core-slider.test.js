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

    element.innerHTML = `
      <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
      <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
      <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
      <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
      <span slot="title">ThanO5</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Nice to meet you. Nice to meet you. Nice to meet you. Nice to meet you.
      </p>
    `;

    document.body.appendChild(element);
  });

  // test for default slider with no attributes
  describe('default', () => {
    it('should add a div element with an id slider', () => {
      expect(slider).toBeTruthy();
    });

    it(`should add a div element with an id description`, () => {
      expect(description).toBeTruthy();
    });

    it(`should add a slot element with name content and the content is "Description
    of these pictures."`, () => {
      expect(content.innerHTML).toBe('Description of these pictures.');
    });

    it(`should add a span element with name title and the content is "Title"`, () => {
      expect(title.innerHTML).toBe('Title');
    });
  });

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
      element.theme = 'rounded';
      expect(element.theme).toBe('rounded');

      element.theme = 'circle';
      expect(element.theme).toBe('circle');

      // need to invoke setter's remove, not just call removeAttribute
      element.removeAttribute('theme');
      expect(element.theme).toBeNull();
    });
  });

  // test for text content
  describe('time', () => {
    it('should change the update time for each picture in the slider element', () => {
      element.time = '4s';
      expect(element.time).toBe('4s');

      element.time = '0s';
      expect(element.time).toBe('0s');

      element.time = '9s';
      expect(element.time).toBe('9s');
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

  // describe('control', () => {
  //   const hasControl = () => {

  //   };

  //   it('should not give control menu and control arrows without control attribute', () => {

  //   });

  //   it('should give control menu and control arrows with the control attribute', () => {
  //     expect(slider.querySelector('#menu')).toBeNull();
  //     expect(element.control).toBe(false);
  //     element.control = true;
  //     expect(element.control).toBe(true);
  //     expect(slider.querySelector('#menu')).toBeTruthy();
  //   });

  //   it('should not give control menu and control arrows when the control attribute is given an illegal value', () => {

  //   });

  //   it('should remove control menu and control arrows when the control attribute is removed', () => {
  //     element.control = true;
  //     expect(slider.querySelector('#menu')).toBeTruthy();
  //     element.control = false;
  //     expect(slider.querySelector('#menu')).toBeNull();
  //   });

  //   it('should remove control menu and control arrows when the control attribute is changed to an illegal value', () => {

  //   });

  //   describe('tests for control ability', () => {
  //     it('should display the corresponding image when a control menu item is clicked', () => {

  //     });

  //     it('should display next image when right arrow is clicked', () => {

  //     });

  //     it('should display last image when left arrow is clicked', () => {

  //     });

  //     it('should display the image after next one when right arrow is clicked twice', () => {

  //     });

  //     it('should display the image before last one when left arrow is clicked twice', () => {

  //     });
  //   });

  //   afterEach(() => {
  //     element.control = false;
  //   });
  // });

  // describe('text', () => {
  //   it('should not render description given without text attribute', () => {

  //   });

  //   it('should not render text given when wrong text value is given', () => {

  //   });

  //   it('should render description when the text is given a legal value', () => {

  //   });

  //   describe('tests for text attribute with a legal value', () => {
  //     it('should render the whole description when its length is within the limit', () => {

  //     });

  //     it('should hide only show a specific numbe of characters and give a core-button when the description is too long', () => {

  //     });

  //     describe('tests for too long description', () => {
  //       it('should open a core-modal with all description including the title when the core-button is clicked', () => {

  //       });

  //       it('should close the core-modal when the core-bugtton is clicked', () => {

  //       });
  //     });
  //   });
  // });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
