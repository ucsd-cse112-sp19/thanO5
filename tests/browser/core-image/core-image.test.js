import {Selector} from 'testcafe';

fixture `CoreImage Browser Tests`
    .page`./core-image.test.html`;

test('<core-image> dummy test', async (t) => {
  const image = await Selector('#test_image');

  await t.expect(image.getAttribute('src')).eql('https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80');
});
