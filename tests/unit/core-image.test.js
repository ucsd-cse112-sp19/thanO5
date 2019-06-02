import '../../components/core-image/core-image';

describe('CoreImage Unit Tests', () => {
  let element;
  beforeEach(() => {
    element = document.createElement('core-image');
    document.body.append(element);
  });

  describe('default', () => {
    it('src attribute should be empty', () => {
      expect(element.src).toBeUndefined();
    });

    it('fit attribute should be empty', () => {
      expect(element.fit).toBeUndefined();
    });

    it('should not be lazy', () => {
      expect(element.lazy).toBe(false);
    });

    // Loading or not? Might load right away?

    // Will there be an error?

    // Show or not?

    // should width and height stay 0?

    // isServer? will this only ever be run on browsers?
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
});
