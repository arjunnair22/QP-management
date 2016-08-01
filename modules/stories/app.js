import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../tabsPaper'

import $ from "jquery";

storiesOf('App', module)
  .add('App Module', () => (
  	<App/>
  ))
