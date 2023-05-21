import React, { useState } from "react";
import styles from "./index.module.css";
import likeIcon from "../../assets/Comment/thumb-up.svg";
import dislikeIcon from "../../assets/Comment/thumb-down.svg";
import emojiIcon from "../../assets/Comment/emoji.svg";
import userIcon from "../../assets/Comment/boy.svg";

// className={styles[""]}
function Comment() {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLikes = () => {
    setLikeCount((prevCount) => prevCount + 1);
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
          <div className={styles["reply-button"]}>Reply</div>
        </div>
        <div className={styles["reply-section"]}>
          <div className={styles["reply-avatar"]}>
            <div className={styles["reply-image-container"]}>
              <img src={userIcon} alt="user-icon" />
            </div>
          </div>
          <div className={styles["input-and-buttons-container"]}>
            <div className={styles["input-container"]}>
              <input type="text" />
            </div>
            <div className={styles["emoji-and-buttons-container"]}>
              <div className={styles["emoji-container"]}>
                <img src={emojiIcon} alt="emoji-icon" />
              </div>
              <div className={styles["reply-and-cancel-buttons-container"]}>
                <button className={styles["post-reply-button"]}>Cancel</button>
                <button className={styles["cancel-button"]}>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
