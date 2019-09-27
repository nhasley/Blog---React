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
  // this.handleClick = this.handleClick.bind(this)
  handleClick = event => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };
  // handleClick(event){
  //   this.ListeningStateChangedEvent({
  //     isShowing : !this.state.isShowing
  //   })
  // }
  render() {
    const title = <h1>Nova Blog</h1>;
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
        <Nav content="NAV"/>
        {this.state.isShowing ? title : null}
        <BlogForm />
        <button onClick={this.handleClick}>click me</button>
        <ul>{composedPosts}</ul>
        <Foot />
      </div>
    );
  }
}

export default App;
