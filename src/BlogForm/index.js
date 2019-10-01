import React, {Component} from 'react'
import './BlogForm.css'
import PropTypes from 'prop-types'

class BlogForm extends Component {
    state = {
        title: '',
        content: '',
        user: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddPost({...this.state})
    }
    render() {
        return (
          <form className="blog-form" onSubmit={this.handleSubmit}>
            <h1>{this.state.title}</h1>
            <h1>{this.state.user}</h1>
            <h1>{this.state.content}</h1>
            <div className="post-title-author">
              <div>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleOnChange}
                  value={this.state.title}
                />
              </div>
              <div>
                <label>Author</label>
                <input
                  type="text"
                  name="user"
                  onChange={this.handleOnChange}
                  value={this.state.user}
                />
              </div>
            </div>
            <label>New Post</label>
            <textarea
              type="text"
              name="content"
              onChange={this.handleOnChange}
              value={this.state.content}
            />
            <input type="submit" value="Add"></input>
            <button className="button-primary" onClick={this.props.handleToggle}>close</button>
          </form>
        );
    }
}

export default BlogForm

BlogForm.propTypes = {
    handleToggle: PropTypes.func,
    handleAddPost: PropTypes.func
}