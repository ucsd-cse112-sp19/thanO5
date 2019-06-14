import {Selector} from 'testcafe';

fixture `CoreSlider Browser Tests`
    .page`./core-slider.test.html`;

test('<core-slider> dummy test', async (t) => {
  const percentage = await Selector(() => (
    document.querySelector('#test_slider')
  ));
});
