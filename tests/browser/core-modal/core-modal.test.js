import {Selector} from 'testcafe';

fixture `CoreModal Browser Tests`
    .page`./core-modal.test.html`;

const open_button = Selector('#test_button');
const modal = Selector(() => (
  document.querySelector('#test_modal').shadowRoot.querySelector('.modal')
));
const close_button = Selector(() => (
  document.querySelector('#test_modal').shadowRoot.querySelector('.close')
));

// test('should hide the modal in the beginning', async(t) => {
//   await t.expect(modal().getStyleProperty('display')).eql('none');
// });

test('should show the modal when clicking the button', async(t) => {
  await t.click(open_button());
  await t.expect(modal().getStyleProperty('display')).eql('block');
});

// test('should hide the modal when click the close sign', async(t) => {
//   await t.click(close_button());
//   await t.expect(modal().getStyleProperty('display')).eql('none');
// });
