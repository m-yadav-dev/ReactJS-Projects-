import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

import "./index.css";
const CommentsItem = (props) => {
  const { commentsDataList, deleteCommentMethod } = props;
  const { id, userName, comment, currentDate, backgroundColor } =
    commentsDataList;

  const [isLiked, setIsLiked] = useState(false);

  const postedTime = formatDistanceToNow(currentDate, { addSuffix: true });

  const onClickLike = () => {
    setIsLiked((prevState) => !prevState);
  };
  
  const onDeleteCommentItem = () => {
    deleteCommentMethod(id);
  };

  const avatarValue = userName ? userName.slice(0, 1).toUpperCase() : "";

  const likedImage =
    "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png";
  const likeImage =
    "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

  return (
    <li className="comments-list">
      <div className="comments-data">
        <div className={`avatar ${backgroundColor}`}>
          <p className="initial-letter">{avatarValue}</p>
        </div>
        <div className="name-and-comments-container">
          <div className="name-time-container">
            <h2 className="name-title">{userName}</h2>
            <p className="time-to-post-comment">{postedTime}</p>
          </div>
          <p className="comments-text">{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-btn">
        <div className="like-container">
          <button data-testid="liked-btn"  className="button-container" onClick={onClickLike}>
            <img
              src={isLiked ? likedImage : likeImage}
              alt="like"
              className="like-btn"
            />
            <p className={isLiked ? "liked-text" : "like-text"}>Like</p>
          </button>
        </div>
        <button data-testid="delete" className="delete-container" onClick={onDeleteCommentItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  );
};

export default CommentsItem;
