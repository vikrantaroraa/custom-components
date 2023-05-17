// @ts-nocheck
import React, { useState } from "react";
import styles from "./index.module.css";
import boy1 from "../../assets/SimpleFadingTab/boy-1.svg";
import boy2 from "../../assets/SimpleFadingTab/boy-2.svg";
import girl1 from "../../assets/SimpleFadingTab/girl-1.svg";
import girl2 from "../../assets/SimpleFadingTab/girl-2.svg";
import girl3 from "../../assets/SimpleFadingTab/girl-3.svg";
import facebookIcon from "../../assets/SimpleFadingTab/facebook-icon.svg";
import twitterIcon from "../../assets/SimpleFadingTab/twitter-icon.svg";

const userData = {
  month: [
    {
      name: "Jeff Davis",
      designation: "Art Director",
      imageUrl: boy1,
    },
    {
      name: "Melinda Trump",
      designation: "Creative Director",
      imageUrl: girl1,
    },
    {
      name: "Bo Larsson",
      designation: "Chief Designer",
      imageUrl: boy2,
    },
  ],
  week: [
    {
      name: "Shannon Drake",
      designation: "Copywriter",
      imageUrl: girl2,
    },
    {
      name: "Taylor Drift",
      designation: "Art Director",
      imageUrl: girl3,
    },
    {
      name: "Peter Rose",
      designation: "Photographer",
      imageUrl: boy2,
    },
  ],
  day: [
    {
      name: "Kate Best",
      designation: "Developer",
      imageUrl: girl2,
    },
    {
      name: "Ben North",
      designation: "UX Designer",
      imageUrl: boy1,
    },
    {
      name: "Claire Tait",
      designation: "UI Engineer",
      imageUrl: girl3,
    },
  ],
};

const buttonsData = [
  { buttonLabel: "Month", variableName: "month" },
  { buttonLabel: "Week", variableName: "week" },
  { buttonLabel: "Day", variableName: "day" },
];

// className={styles[""]}
function SimpleFadingTab() {
  const [timePeriod, setTimePeriod] = useState("month");
  return (
    <div className={styles["simple-fading-tab"]}>
      <div className={styles["header"]}>
        <div className={styles["heading"]}>
          <h2>New Members</h2>
          <p>More than 400 new members</p>
        </div>
        <div className={styles["buttons"]}>
          {buttonsData.map(({ buttonLabel, variableName }) => (
            <button onClick={() => setTimePeriod(variableName)}>
              {buttonLabel}
            </button>
          ))}
        </div>
      </div>
      <div className={styles["user-components-container"]}>
        {userData[timePeriod].map(({ name, imageUrl, designation }) => {
          return (
            <UserInfoComponent
              name={name}
              imageUrl={imageUrl}
              designation={designation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SimpleFadingTab;

function UserInfoComponent({ name, imageUrl, designation }) {
  return (
    <div className={styles["user-info-component"]}>
      <div className={styles["icon-and-user-info"]}>
        <div className={styles["icon"]}>
          <img src={imageUrl} alt="girl" />
        </div>
        <div className={styles["user-name-and-designation"]}>
          <div className={styles["user-name"]}>{name}</div>
          <div className={styles["designation"]}>{designation}</div>
        </div>
      </div>
      <div className={styles["rating"]}>
        <div className={styles["rating-heading"]}>Rating</div>
        <div className={styles["rating-container"]}>
          <StarRating />
        </div>
      </div>
      <div className={styles["social-media-icons"]}>
        <div className={styles["twitter-icon"]}>
          <img src={twitterIcon} alt="twitter-icon" />
        </div>
        <div className={styles["facebook-icon"]}>
          <img src={facebookIcon} alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

const Star = ({ starId, marked }) => {
  return (
    <span
      star-id={starId}
      role="button"
      style={{
        color: "#ff9933",
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

// Create an array of 5: Array.from({length: 5}, (v,i) => i)
const StarRating = (props) => {
  // Manages on Hover selection of a star
  const [selection, setSelection] = React.useState(0);

  // Manages rating selection
  const [rating, setRating] = React.useState(0);

  const hoverOver = (event) => {
    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = event.target.getAttribute("star-id");
    }
    setSelection(starId);
  };

  return (
    <div
      onMouseOver={hoverOver}
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => setRating(event.target.getAttribute("star-id"))}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={selection ? selection > i : rating > i} />
      ))}
    </div>
  );
};
