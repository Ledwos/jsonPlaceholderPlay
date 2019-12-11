import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './containers/posts'
import Title from './containers/Title'


class App extends  React.Component{
  state = {posts: null};

  fetchimus = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({posts: data}))
  }
  componentDidMount() {
    this.fetchimus()
  }
  
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>random link</li>
          </ul>
        </nav>
        <Switch>
          <Route path="/posts/:id">
            <p>Post</p>
            {this.state.posts && <Posts posts={this.state.posts} /> }
            {/* <Posts post={this.state.posts} /> */}
          </Route>
          <Route path="/">
            <div className="App">
            {/* {console.log(this.state.posts[0].title)} */}
            {this.state.posts &&  <Title title={this.state.posts}/> }
            {/* <Title title={this.state.posts[0].title}/> */}
       
       </div>
          </Route>
        </Switch>
      </div>
    </Router>
     
     );

  }
}

export default App;
