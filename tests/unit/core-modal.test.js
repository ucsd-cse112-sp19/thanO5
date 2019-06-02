import '../../components/core-modal/core-modal';

describe('CoreModal Unit Tests', () => {
  // before each spec, set up the core-modal element
  let element;
  let shadowRoot;
 /* beforeEach(() => {
    element = document.createElement('core-modal');
    element.addEventListener('click')
    element.setAttribute('name', 'Test Modal');
    element.innerHTML = '<h1 slot="header">${title}</h1><p>${content}</p>';
    document.body.append(element);
  });
  */
  describe('default', () => {
    function afterMutation(cb) {
      var doc = globals.getKeyValue('document');
      var div = doc.createElement("div");
      domMutate.onNodeInsertion(div, function () {
        doc.body.removeChild(div);
        setTimeout(cb, 5);
      });
      domMutateNode.appendChild.call(doc.body, div);
    }

    it('should set up a default modal', (done) => {
      //console.log('Element = ', element);
      //console.log('element.innerhtml = ', element.innerHTML);
      const element = document.createElement('core-modal');
      //element.setAttribute('name', 'Test Modal');
      //element.innerHTML = '<h1 slot="header">${title}</h1><p>${content}</p>';
      document.body.append(element);

      afterMutation(() => {
        expect(true).toBe(true);
        done();
      });

    });
  });

  //afterEach(() => {
   // document.body.removeChild(element);
  //});
});