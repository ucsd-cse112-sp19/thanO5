import {Selector} from 'testcafe';

fixture `CoreHello Browser Tests`
    .page`./core-hello.test.html`;

test('should show mark as the person name', async (t) => {
  const hello = await Selector('#test_hello');
  const name = await hello.find('[slot="name"]').innerText;
  await t.expect(name).eql('Mark');
});
