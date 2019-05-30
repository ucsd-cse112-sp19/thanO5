import '../components/core-slider/core-slider';

describe('CoreSlider Unit Tests', () => {
  // console.log('***STARTING CORE-SLIDER TESTS***');
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

    it(`should add a span element with name title and the content is "Title"`,
        () => {
          expect(title.innerHTML).toBe('Title');
        });
  });

  // test for time setters/getters
  describe('time', () => {
    it('should change the update time for each picture to 4s', () => {
      element.time = '4s';
      expect(element.time).toBe('4s');
    });

    it('should change the update time for each picture to 0s', () => {
      element.time = '0s';
      expect(element.time).toBe('0s');
    });

    it('should change the update time for each picture to 9s', () => {
      element.time = '9s';
      expect(element.time).toBe('9s');
    });

    it('should default to 2s', () => {
      element.time = false;
      expect(element.time).toBe('2s');
    });
  });

  // test for size setters/getters
  describe('size', () => {
    it('should change size of slider element to tiny', () => {
      element.size = 'tiny';
      expect(element.size).toBe('tiny');
    });

    it('should change size of slider element to xsmall', () => {
      element.size = 'xsmall';
      expect(element.size).toBe('xsmall');
    });

    it('should change size of slider element to small', () => {
      element.size = 'small';
      expect(element.size).toBe('small');
    });

    it('should change size of slider element to medium', () => {
      element.size = 'medium';
      expect(element.size).toBe('medium');
    });

    it('should change size of slider element to large', () => {
      element.size = 'large';
      expect(element.size).toBe('large');
    });

    it('should remove the size attribute when false', () => {
      element.size = false;
      expect(element.size).toBeNull();
    });
  });

  // test for theme setters/getters
  describe('theme', () => {
    it('should change theme of slider element to rounded', () => {
      element.theme = 'rounded';
      expect(element.theme).toBe('rounded');
    });

    it('should change theme of slider element to circle', () => {
      element.theme = 'circle';
      expect(element.theme).toBe('circle');
    });

    it('should remove the theme attribute when false', () => {
      element.theme = false;
      expect(element.theme).toBeNull();
    });
  });

  // test for shadow setters/getters
  describe('shadow', () => {
    it('should add the shadowy effect on the slider element', () => {
      element.shadow = true;
      expect(element.shadow).toBe(true);
    });

    it('should remove the shadowy effect on the slider element', () => {
      element.shadow = false;
      expect(element.shadow).toBe(false);
    });
  });

  describe('control', () => {
    // const hasControl = () => {

    // };

    it('initially should not give control menu', () => {
      expect(slider.querySelector('#menu')).toBeNull();
    });

    it('initially should not give control arrows', () => {
      expect(element.control).toBe(false);
    });

    it('should give control menu with the control attribute', () => {
      element.control = true;
      expect(slider.querySelector('#menu')).toBeTruthy();
    });

    it('should give control arrows with the control attribute', () => {
      element.control = true;
      expect(element.control).toBe(true);
    });

    it('should remove control menu when the control attribute is removed',
        () => {
          element.control = true;
          expect(slider.querySelector('#menu')).toBeTruthy();
          element.control = false;
          expect(slider.querySelector('#menu')).toBeNull();
        });

    it('should remove control arrows when the control attribute is removed',
        () => {
          element.control = false;
          expect(element.control).toBe(false);
        });

    //  it('should not give control menu and control arrows when the control attribute is given an illegal value', () => {

    //  });

    //  it('should remove control menu and control arrows when the control attribute is changed to an illegal value', () => {

    //  });

    it('should change to the corresponding index when a control menu item is clicked', () => {
      element.control = true;
      const testIdx = 2;
      const menu = element._menuItems;
      const retImgIdx = parseInt(menu[testIdx].getAttribute('index'));
      expect(retImgIdx).toBe(testIdx);
    });

    it('should display the corresponding image when a control menu item is clicked', () => {
      element.control = true;
      const testIdx = 2;
      const menu = element._menuItems;
      const imgChildren = element._imageChildren;
      menu[testIdx].click();
      expect(imgChildren[testIdx].classList.contains('hide')).toBe(false);
      expect(menu[testIdx].getAttribute('selected')).toBe('');
    });

    it('should display next image when right arrow is clicked', () => {
      const numImg = element._imageChildCount;
      const startIdx = element.index;
      element.control = true;
      element._rightArrow.click();
      expect(element.index).toBe((startIdx + 1) % numImg);
      // console.log(Object.keys(element).toString());
    });

    it('should display last image when left arrow is clicked', () => {
      const numImg = element._imageChildCount;
      const startIdx = element.index;
      element.control = true;
      element._leftArrow.click();
      expect(element.index).toBe((((startIdx - 1) % numImg) + numImg) % numImg); // Modulo with negatives just subtracts
    });

    it('should display the first image when the right arrow is clicked on the last image', () => {
      const numImg = element._imageChildCount;
      const startIdx = element.index;
      element.control = true;

      for (let i = 0; i < numImg - startIdx; ++i) {
        element._rightArrow.click();
      }

      expect(element.index).toBe(0);
    });

    it('should display the last image when the left arrow is clicked on the first image', () => {
      const numImg = element._imageChildCount;
      const startIdx = element.index;
      element.control = true;

      for (let i = 0; i <= startIdx; ++i) {
        element._leftArrow.click();
      }

      expect(element.index).toBe(numImg - 1);
    });

    //  it('should display the image after next one when right arrow is clicked twice', () => {

    //  });

    //  it('should display the image before last one when left arrow is clicked twice', () => {

    //  });

  // afterEach(() => {
  //   element.control = false;
  // });
  // });
  });

  describe('text', () => {
  //  it('should not render description given without text attribute', () => {
  //
  //  });

    it('should not render text given when wrong text value is given', () => {
      element.text = false;
      expect(element.text).toBe(false);
    });

    it('should render description when the text is given a legal value', () => {
      element.text = true;
      expect(element.text).toBe(true);
    });

    describe('tests for text attribute with a legal value', () => {
      it('should render the whole description when its length is within the limit', () => {
        element.text = true;
        // console.log('Description: ', description);
        expect(title.innerHTML).toBe('Title');
        expect(content.innerHTML).toBe('Description of these pictures.');
      });

      //  it('should hide only show a specific number of characters and give a core-button when the description is too long', () => {
      //
      //  });

            it('should show a small number of characters', () => {
        // ASSUMES THEME IS NOT CIRCLE
        element.size = 'small';
        const spanNode = document.createElement('span');
        const spanText = document.createTextNode('ThanO5');
        spanNode.appendChild(spanText);
        spanNode.setAttribute('slot', 'title');
        element.appendChild(spanNode);

        const pNode = document.createElement('p');
        const text = 'Lorem ipsum dolor sit amet, consectetur ' +
                     'adipiscing elit, sed do eiusmod tempor ' +
                     'incididunt ut labore et dolore magna aliqua. ' +
                     'Ut enim ad minim veniam, quis nostrud ' +
                     'exercitation ullamco laboris nisi ut aliquip ' +
                     'ex ea commodo consequat.';
        const pText = document.createTextNode(text);
        pNode.appendChild(pText);
        pNode.setAttribute('slot', 'content');
        element.appendChild(pNode);

        console.log("ASDASDADSASDASDAS");
        console.log(element.text);
        console.log(element._title === undefined);


        if (element._title === undefined && element._content === undefined) {
          console.log("PLEASE HELP ME");
        }

        console.log(element.getAttribute('size'));

        element.text = true;

        if (element.text && element._title !== null && element._content !== null) {
          console.log("PLEASE HELP ME2asdASDASDs");
        }
        const smallLen = 33; // 33 because 30 + '...'

        expect(element._content.innerHTML.length).toBe(smallLen);
      });

      // it('should show a medium number of characters', () => {
      //   element.size = 'medium';
      //   title.innerHTML = 'ThanO5';
      //   content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur ' +
      //                       'adipiscing elit, sed do eiusmod tempor ' +
      //                       'incididunt ut labore et dolore magna aliqua. ' +
      //                       'Ut enim ad minim veniam, quis nostrud ' +
      //                       'exercitation ullamco laboris nisi ut aliquip ' +
      //                       'ex ea commodo consequat.';
      //   const mediumLen = 83; // 83 because 80 + '...'
      //   element.text = true;

      //   expect(element._content.innerHTML.length).toBe(mediumLen);
      // });

      // it('should show a large number of characters', () => {
      //   element.size = 'large';
      //   title.innerHTML = 'ThanO5';
      //   content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur ' +
      //                       'adipiscing elit, sed do eiusmod tempor ' +
      //                       'incididunt ut labore et dolore magna aliqua. ' +
      //                       'Ut enim ad minim veniam, quis nostrud ' +
      //                       'exercitation ullamco laboris nisi ut aliquip ' +
      //                       'ex ea commodo consequat.';
      //   const largeLen = 203; // 203 because 200 + '...'
      //   element.text = true;

      //   expect(element._content.innerHTML.length).toBe(largeLen);
      // });
    });

  /*  describe('tests for too long description', () => {
      it('should open a core-modal with all description including the title when the core-button is clicked', () => {

      });

      it('should close the core-modal when the core-bugtton is clicked', () => {

      });
    }); */
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
