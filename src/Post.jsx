import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, content, user, id, handleDelete}) => {
    return (
      <li key={id} className="post">
        <h3 className="postTitle">{title}</h3>
        <p className="postContent">{content}</p>
        <h6>{user}</h6>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    );
}

export default Post
Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    id: PropTypes.string
}