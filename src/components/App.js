import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import PostList from './PostList'
import CreatePost from './CreatePost'
import ShowPost from './ShowPost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/create" component={CreatePost} />
            <Route path="/show/:id" component={ShowPost} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
