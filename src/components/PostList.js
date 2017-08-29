import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

export default class PostList extends Component {
  constructor(props) {
    super(props)
  this.state = {
    data: []
  } }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
          return results.json();
        }).then(data => {
          this.setState({ data });
        })
  }
  render() {
    let displayPost = this.state.data.map(post => {
      return (
        <ul>
          <li key={post._id}>
            <Link to={`show/${post._id}`}>
            <h4>{post.author}</h4>
            <h3>{post.title}</h3></Link>
          </li>
        </ul>
      )
    })
    return (
      <div>
        {displayPost}
      </div>
    )
  }
}
