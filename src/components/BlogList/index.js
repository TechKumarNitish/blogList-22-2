// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <div className="blog-item-container">
        {blogsList.map(blog => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </div>
    )
  }
}

export default BlogList
