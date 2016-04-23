import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Devtools from 'cerebral-module-devtools';
import Http from 'cerebral-module-http';
import Forms from 'cerebral-module-forms';


import List from './modules/List';
import MainModule from './modules/Main';
import Main from './components/Main';
import NewPost from './modules/NewPost';

const controller = Controller(Model({}));

controller.addModules({
  main: MainModule(),
  list: List(),
  newPost: NewPost(),
  forms: Forms({

  }),

  http: Http(),
  devtools: Devtools(),
  router: Router({
    '/': 'main.redirectList',
    '/list': 'main.setPageList',
    '/newPost': 'main.setPageNewPost'
  }, {
    onlyHash: true
  })
});

ReactDOM.render(<Container controller={controller}><Main /></Container>, document.getElementById('root'));
