import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Foot from "./Foot";
import BlogForm from './BlogForm'

class App extends Component {
  state = {
    isShowing: true,
    posts: [
      {
        title: "My first post",
        user: "Nova Hasley",
        content: "Yo yo yo"
      },
      {
        title: "My second post",
        user: "Nova Hasley",
        content: "Rap rap rap"
      },
      {
        title: "My third post",
        user: "Nova Hasley",
        content: "chicken bone chicken bone"
      }
    ]
  };
  // // this.handleClick = this.handleClick.bind(this)
  // handleShowForm = event => {
  //   this.setState({
  //     isShowing: !this.state.isShowing
  //   });
  // };
 
  //update state here and pass this method down to another component
  handleAddPost = (post) => {
    this.setState({
      posts: [{...post}, ...this.state.posts]
    })
  }

  handleOnChange = event => {
      event.preventDefault()
      this.props.handleAddPost({...this.state})
  }

  render() {
    // const title = <h1>Nova Blog</h1>;
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className="post">
          <h3 className="postTitle">{item.title}</h3>
          <p className="postContent">{item.content}</p>
        </li>
      );
    });
    return (
      <div className="App container">
        <Nav content="NAV" />
        {this.state.isShowing ? (
          <BlogForm handleAddPost={this.handleAddPost} handleToggle={this.handleShowForm} />
        ) : null}
        {/* <button onClick={this.handleShowForm}>Add Post</button> */}
        <ul>{composedPosts}</ul>
        <Foot />
      </div>
    );
  }
}

export default App;
