import { configure } from '@storybook/html';

function loadStories() {
  require('../stories/original-components.story.js');
  require('../stories/element-components.story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);