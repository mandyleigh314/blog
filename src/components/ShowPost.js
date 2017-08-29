import React, { Component } from 'react';
import '../styles/App.css';

export default class ShowPost extends Component {
  constructor(props) {
    super(props)
  this.state = {
    data: {}
  } }

  componentDidMount() {
    const postId = this.props.match.params.id
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/' + postId).then(results => {
          return results.json();
        }).then(data => {
          this.setState({ data });
        })
  }
  render() {
         return (
         <div>
               <h1>{this.state.data.title}</h1>
               <h3>{this.state.data.author}</h3>
               <p>{this.state.data.blogPost}</p>
            </div>
             )
           }
    }
