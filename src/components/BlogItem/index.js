// Write your JS code here
import {Component} from 'react'
import './index.css'
class BlogItem extends Component {
  render() {
    const {id, title, description, publishedDate} = this.props
    return (
      <div className="blog-item">
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <p className="published-date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default BlogItem
