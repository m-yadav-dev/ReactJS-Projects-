import { Component } from "react";
import { TailSpin } from "react-loader-spinner";

import "./index.css";

class BlogItemDetails extends Component {
  state = { blogData: {}, isLoading: true };

  componentDidMount () {
    this.getBlogItemData();
  };

  getBlogItemData = async () => {
    try {
      const { id } = this.props;
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        topic: data.topic,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      this.setState({ blogData: updatedData, isLoading: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  renderBlogItemDetails = () => {
    const { blogData } = this.state;
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-img" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              visible={isLoading}
            />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    );
  }
}

export default BlogItemDetails;
