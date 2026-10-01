import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import BlogItem from "../BlogItem";
import "./index.css";

class BlogList extends Component {
  state = { isLoading: true, blogsData: [] };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/blogs");
      const data = await response.json();
      const formattedData = data.map((eachItem) => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }));
      this.setState({ blogsData: formattedData, isLoading: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { blogsData, isLoading } = this.state;

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <TailSpin type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map((eachBlogItem) => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BlogList;
