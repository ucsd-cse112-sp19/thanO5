import {Selector} from 'testcafe';

fixture `CoreBadge Browser Tests`
    .page`./core-badge.test.html`;

test('', async (t) => {
  const content = await Selector(() => (
    document.querySelector('#test_badge').shadowRoot.querySelector('transition sup')
  ));

  await t.expect(content.innerText).eql('50+');
});
