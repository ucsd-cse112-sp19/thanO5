import {Selector} from 'testcafe';

fixture `CoreButton Browser Tests`
    .page`./core-button.test.html`;

test('a div with id "button" exists in the shadowDOM of <core-button>', async (t) => {
  const button = await Selector(() => (
    document.querySelector('#test_button').shadowRoot.querySelector('#button')
  ));
});
