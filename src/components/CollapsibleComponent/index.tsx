import React, { useState } from "react";
import styles from "./index.module.css";
import caretRight from "../../assets/CollapsibleComponent/caret-right.svg";
import caretDown from "../../assets/CollapsibleComponent/caret-down.svg";
import folderPlus from "../../assets/CollapsibleComponent/folder-plus.svg";
import folder from "../../assets/CollapsibleComponent/folder.svg";

interface CollapsibleComponentProps {
  children?: JSX.Element | JSX.Element[];
  folderName: string;
}

// className={styles[""]}
function CollapsibleComponent({
  children = <></>,
  folderName,
}: CollapsibleComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles["collpasible-component"]}>
      <details>
        <summary>
          <div className={styles["icon-container"]}>
            {isExpanded ? (
              <img src={caretDown} alt="caret-down" onClick={handleChange} />
            ) : (
              <img src={caretRight} alt="caret-right" onClick={handleChange} />
            )}
          </div>
          <div className={styles["folder-name"]}>
            <div className={styles["folder-icon-container"]}>
              {isExpanded ? (
                <img src={folder} alt="folder" onClick={handleChange} />
              ) : (
                <img src={folderPlus} alt="folder" onClick={handleChange} />
              )}
            </div>
            {folderName}
          </div>
        </summary>
        {children}
      </details>
    </div>
  );
}

export default CollapsibleComponent;
