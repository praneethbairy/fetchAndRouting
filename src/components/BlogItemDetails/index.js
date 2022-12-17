// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    console.log(params)
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/:${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }

    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = blogItemDetails => {
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {blogItemDetails, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails(blogItemDetails)
        )}
      </div>
    )
  }
}

export default BlogItemDetails
