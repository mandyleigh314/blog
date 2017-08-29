import React, { Component } from 'react';
import '../styles/App.css';

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
  this.state = {
    author: "",
    title: "",
    blogPost: ""
  } }

  onSubmit = (e) => {
    e.preventDefault()
    const { author, title, blogPost } = this.state
    let blog = JSON.stringify({ author, title, blogPost })

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: blog,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      } }).then(res => res.json())
      this.setState({
        author: "",
        title: "",
        blogPost: ""
      })
       }


  onChangeHandler = (key, value) => {
    this.setState({[key]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={(e) => this.onChangeHandler("author", e.target.value)} type="text" name="author" placeholder="Author" value={this.state.author} />
          <input onChange={(e) => this.onChangeHandler("title", e.target.value)} type="text" name="title" placeholder="Title" value={this.state.title} />
          <textarea onChange={(e) => this.onChangeHandler("blogPost", e.target.value)} name="blogPost" placeholder="Post" value={this.state.blogPost} />
          <input type="submit" name="submit" value="Make a Post" />
        </form>
      </div>
    )
  }
}
