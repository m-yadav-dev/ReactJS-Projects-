import { Component } from "react";
import "./index.css";
class Feedback extends Component {
  state = {
    isClicked: false,
  };

  onClickEmojiCard = () => {
    this.setState({
      isClicked: true,
    });
  };
  render() {
    const { resources } = this.props;
    const { isClicked } = this.state;
    return (
      <div className="bg">
        <div className="card">
          {!isClicked ? (
            <div>
              <h1 className="card-text">
                How Satisfied are you with Customer support performance?
              </h1>
              <div>
                <ul className="emoji-container">
                  {resources.emojis.map((eachEmoji) => (
                    <li key={eachEmoji.id} onClick={this.onClickEmojiCard}>
                      <img
                        className="emoji-image"
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                      />
                      <p>{eachEmoji.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="thank-you-container">
              <div className="heart-img-container">
                <img
                  className="heart-img"
                  src={resources.loveEmojiUrl}
                  alt="love-emoji"
                />
              </div>
              <h1 className="thank-you-title">Thank You!</h1>
              <p className="thank-you-text">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;
