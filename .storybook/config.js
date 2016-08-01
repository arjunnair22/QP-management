import { configure } from '@kadira/storybook';

function loadStories() {
  require('../modules/stories/button');
  require('../modules/stories/app');
  // require as many stories as you need.
}

configure(loadStories, module);