// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="image" src={imageUrl} alt={`item${id}`} />
        <div className="content-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar-image" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
