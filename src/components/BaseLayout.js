import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
        <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/create" > Create a New Post </NavLink>

      </nav>

      {this.props.children}

      </div>
    )
  }
}
