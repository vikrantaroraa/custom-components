import React, { useState } from "react";
import styles from "./index.module.css";
import likeIcon from "../../assets/Comment/thumb-up.svg";
import dislikeIcon from "../../assets/Comment/thumb-down.svg";
import emojiIcon from "../../assets/Comment/emoji.svg";
import userIcon from "../../assets/Comment/boy.svg";

const emojis = [
  // "\u{}",
  "\u{1F642}",
  "\u{1F600}",
  "\u{1f602}",
  "\u{1f60d}",
  "\u{1f62d}",
  "\u{1f618}",
  "\u{1f60a}",
  "\u{1f44c}",
  "\u{1f601}",
  "\u{1f629}",
  "\u{1f60f}",
  "\u{1f612}",
  "\u{1f61c}",
  "\u{1F30D}",
  "\u{1F389}",
  "\u{1F525}",
  "\u{1F4A1}",
  "\u{1F604}",
  "\u{1F34A}",
  "\u{1F344}",
  "\u{1F37F}",
  "\u{1F363}",
  "\u{1F370}",
  "\u{1f355}",
  "\u{1f354}",
  "\u{1f35f}",
  "\u{1f604}",
  "\u{1f48e}",
  "\u{23f0}",
  "\u{1f4da}",
];

// className={styles[""]}
function Comment() {
  const [likeCount, setLikeCount] = useState(0);
  const [isReplySectionVisible, setIsReplySectionVisible] = useState(false);
  const [commentReply, setCommentReply] = useState("");
  const [isEmojiContainerVisible, setIsEmojiContainerVisible] = useState(false);

  const incrementLikes = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleEmojiClick = (emoji: string) => {
    setCommentReply(commentReply + emoji);
  };

  return (
    <div className={styles["comment"]}>
      <div className={styles["avatar"]}>
        <div className={styles["image-container"]}>
          <img src={userIcon} alt="user-icon" />
        </div>
      </div>
      <div className={styles["comment-data"]}>
        <div className={styles["username-and-comment"]}>
          <div className={styles["username-and-date"]}>
            <div className={styles["username"]}>Vikrant</div>
            <div className={styles["date"]}>7 days ago</div>
          </div>
          <div className={styles["comment-info"]}>
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            comment this is acomment this is acomment this is acomment this is
            this is a name
          </div>
        </div>
        <div className={styles["like-and-dislike-buttons"]}>
          <div className={styles["like"]}>
            <div
              className={styles["like-icon-container"]}
              onClick={incrementLikes}
            >
              <img src={likeIcon} alt="like-icon" />
            </div>
            <div className={styles["like-count"]}>{likeCount}</div>
          </div>
          <div className={styles["dislike"]}>
            <img src={dislikeIcon} alt="dislike-icon" />
          </div>
          <button
            className={styles["reply-button"]}
            onClick={() => setIsReplySectionVisible(true)}
          >
            Reply
          </button>
        </div>
        {isReplySectionVisible && (
          <div className={styles["reply-section"]}>
            <div className={styles["avatar-and-input-container"]}>
              <div className={styles["reply-avatar"]}>
                <div className={styles["reply-image-container"]}>
                  <img src={userIcon} alt="user-icon" />
                </div>
              </div>
              <div className={styles["input-and-buttons-container"]}>
                <div className={styles["input-container"]}>
                  <input
                    type="text"
                    placeholder="Add reply here..."
                    value={commentReply}
                    onChange={(event) => setCommentReply(event.target.value)}
                  />
                </div>
                <div className={styles["emoji-and-buttons-container"]}>
                  <div
                    className={styles["emoji-icon-container"]}
                    onClick={() => setIsEmojiContainerVisible(true)}
                  >
                    <img src={emojiIcon} alt="emoji-icon" />
                  </div>
                  <div className={styles["reply-and-cancel-buttons-container"]}>
                    <button
                      className={styles["post-reply-button"]}
                      onClick={() => {
                        setIsReplySectionVisible(false);
                        setIsEmojiContainerVisible(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button className={styles["cancel-button"]}>Reply</button>
                  </div>
                </div>
              </div>
            </div>
            {isEmojiContainerVisible && (
              <div className={styles["emojis-container"]}>
                {emojis.map((emoji, index) => {
                  return (
                    <span
                      className={styles["emoji"]}
                      key={index}
                      onClick={() => handleEmojiClick(emoji)}
                    >
                      {emoji}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
