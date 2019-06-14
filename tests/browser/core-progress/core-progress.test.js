import {Selector} from 'testcafe';

fixture `CoreProgress Browser Tests`
    .page`./core-progress.test.html`;

test('should show the percentage', async (t) => {
  const percentage = await Selector(() => (
    document.querySelector('#test_progress').shadowRoot.querySelector('.el-progress__text')
  ));

  await t.expect(percentage.innerText).eql('75%');
});
