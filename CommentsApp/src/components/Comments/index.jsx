// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import CommentsItem from "../CommentItem";
// import "./index.css";
// const initialContainerBackgroundClassNames = [
//   "amber",
//   "blue",
//   "orange",
//   "emerald",
//   "teal",
//   "red",
//   "light-blue",
// ];

// // console.log(generateRandomColorClassName());

// const Comments = () => {
//   const [commentsList, setCommentsList] = useState([]);
//   const [nameInput, setNameInput] = useState("");
//   const [commentInput, setCommentInput] = useState("");

//   const onSubmitCommentsData = (event) => {
//     event.preventDefault();

//     if (nameInput === "" || commentInput === "") {
//       return;
//     }

//     const randomColor =
//       initialContainerBackgroundClassNames[
//         Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
//       ];

//     const commentsData = {
//       id: uuidv4(),
//       name: nameInput,
//       comment: commentInput,
//       date: new Date(),
//       backgroundColor: randomColor,
//     };

//     setCommentsList((prevCoomentList) => [...prevCoomentList, commentsData]);
//     setNameInput("");
//     setCommentInput("");
//   };

//   const deleteComment = (commentId) => {
//     const filteredList = commentsList.filter(
//       (eachComment) => eachComment.id !== commentId
//     );
//     setCommentsList(filteredList);
//   };

//   return (
//     <div className="bg">
//       <div className="container">
//         <div className="comments-container">
//           <div>
//             <h1 className="title">Comments</h1>
//             <form className="form-container" onSubmit={onSubmitCommentsData}>
//               <p className="comments-subtitle">
//                 Say Something about 4.0 Technologies
//               </p>
//               <div className="user-input-container">
//                 <input
//                   placeholder="Enter Your name here...."
//                   type="text"
//                   onChange={(event) => {
//                     setNameInput(event.target.value);
//                   }}
//                   value={nameInput}
//                   className="user-name"
//                 />
//               </div>
//               <div className="user-input-container">
//                 <textarea
//                   onChange={(event) => {
//                     setCommentInput(event.target.value);
//                   }}
//                   value={commentInput}
//                   rows={16}
//                   placeholder="Enter Your Comments here...."
//                   className="comments-input"
//                 ></textarea>
//               </div>
//               <button type="submit" className="add-comment-btn">
//                 Add Comments
//               </button>
//             </form>
//           </div>
//           <div className="image-container">
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
//               alt="comments"
//               className="comments-img"
//             />
//           </div>
//         </div>
//         <div className="comments-counter">
//           <h1 className="count-comments">
//             <span className="count">{commentsList.length}</span> Comments
//           </h1>
//         </div>
//         <ul>
//           {commentsList.map((eachComment) => (
//             <CommentsItem
//               commentsDataList={eachComment}
//               key={eachComment.id}
//               deleteCommentMethod={deleteComment}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Comments;

import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import CommentsItem from "../CommentItem";
import "./index.css";
const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

const Comments = () => {
  const [commentList, setCommentList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const onSubmitCommentsData = (event) => {
    event.preventDefault();

    const { nameInput, commentInput } = this.state;

    if (nameInput === "" || commentInput === "") {
      return;
    }

    const randomBackgroundColor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ];

    const newCommentData = {
      id: uuidv4(),
      userName: nameInput,
      comment: commentInput,
      currentDate: new Date(),
      backgroundColor: randomBackgroundColor,
    };

    setCommentList((prevList) => [...prevList, newCommentData]);
    setNameInput("");
    setCommentInput("");
    };
  };

  onChangeUserName = (event) => {
    setNameInput(event.target.value);
  };

  onChangeCommentInput = (event) => {
    setCommentInput(event.target.value);
  };

  deleteComment = (commentId) => {
    const { commentList } = this.state;
    const filteredComments = commentList.filter(
      (comment) => comment.id !== commentId
    );
    // this.setState({ commentList: filteredComments });
      setCommentList(filteredComments);
  };


    return (
      <div className="bg">
        <div className="container">
          <div className="comments-container">
            <div>
              <h1 className="title">Comments</h1>
              <form
                className="form-container"
                onSubmit={this.onSubmitCommentsData}
              >
                <p className="comments-subtitle">
                  Say Something about 4.0 Technologies
                </p>
                <div className="user-input-container">
                  <input
                    placeholder="Enter Your name here...."
                    type="text"
                    onChange={this.onChangeUserName}
                    value={nameInput}
                    className="user-name"
                  />
                </div>
                <div className="user-input-container">
                  <textarea
                    onChange={this.onChangeCommentInput}
                    value={commentInput}
                    rows={16}
                    placeholder="Enter Your Comments here...."
                    className="comments-input"
                  ></textarea>
                </div>
                <button data-testid="add-comment-btn" type="submit" className="add-comment-btn">
                  Add Comments
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-img"
              />
            </div>
          </div>
          <div className="comments-counter">
            <h1 className="count-comments">
              <span className="count">{commentList.length}</span> Comments
            </h1>
          </div>
          <ul>
            {commentList.map((eachComment) => (
              <CommentsItem
                commentsDataList={eachComment}
                key={eachComment.id}
                deleteCommentMethod={deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Comments;
