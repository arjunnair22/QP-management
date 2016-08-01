import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Home from './homeComponent'
import PaperCreatorComponent from './paperCreatorComponent'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/createQuestionPaper" component={PaperCreatorComponent}/>
  </Route>

)