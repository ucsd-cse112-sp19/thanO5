// import {Selector} from 'testcafe';

fixture `CoreHello Browser Tests`
    .page`./core-hello.test.html`;

test('My first test', async (t) => {
  // Test code
  // const element = Selector('corehello1');
  // const name = Selector('slot[name="name"]');
  // await t
  // .typeText(name, 'Peter')
  // .expect(element.name).eql('Peter')
  // .expect(element).visible.ok();
});
