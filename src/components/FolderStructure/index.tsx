import React from "react";
import CollapsibleComponent from "../CollapsibleComponent";
import styles from "./index.module.css";
import fileIcon from "../../assets/CollapsibleComponent/file.svg";

function FolderStructure() {
  return (
    <div className={styles["folder-structure"]}>
      <p className={styles["folder-structure-heading"]}>Folder Structure</p>
      <CollapsibleComponent folderName={"src"}>
        <CollapsibleComponent folderName={"api"}></CollapsibleComponent>
        <CollapsibleComponent folderName={"assets"}></CollapsibleComponent>
        <CollapsibleComponent folderName={"components"}>
          <CollapsibleComponent folderName={"AddressCard"}>
            <FileElement fileName="index.module.css" />
            <FileElement fileName="index.tsx" />
          </CollapsibleComponent>
          <CollapsibleComponent folderName={"BillingComponent"}>
            <FileElement fileName="index.module.css" />
            <FileElement fileName="index.tsx" />
          </CollapsibleComponent>
          <CollapsibleComponent folderName={"CartProduct"}>
            <FileElement fileName="index.module.css" />
            <FileElement fileName="index.tsx" />
          </CollapsibleComponent>
        </CollapsibleComponent>
        <CollapsibleComponent folderName={"context"}></CollapsibleComponent>
        <CollapsibleComponent folderName={"pages"}>
          <CollapsibleComponent folderName={"HomePage"}>
            <FileElement fileName="index.module.css" />
            <FileElement fileName="index.tsx" />
          </CollapsibleComponent>
          <CollapsibleComponent folderName={"AllProducts"}>
            <FileElement fileName="index.module.css" />
            <FileElement fileName="index.tsx" />
          </CollapsibleComponent>
        </CollapsibleComponent>
        <CollapsibleComponent folderName={"reducers"}></CollapsibleComponent>
        <CollapsibleComponent folderName={"utils"}></CollapsibleComponent>
        <FileElement fileName="App.css" />
        <FileElement fileName="App.tsx" />
        <FileElement fileName="index.css" />
        <FileElement fileName="index.tsx" />
        <FileElement fileName=".gitignore" />
        <FileElement fileName="package-lock.json" />
        <FileElement fileName="package.json" />
        <FileElement fileName="README.md" />
        <FileElement fileName="tsconfig.json" />
      </CollapsibleComponent>
    </div>
  );
}

export default FolderStructure;
interface FileProps {
  fileName: string;
}
const FileElement = ({ fileName }: FileProps) => {
  return (
    <div className={styles["file"]}>
      <div className={styles["file-icon"]}>
        <img src={fileIcon} alt="file" />
      </div>
      <p>{fileName}</p>
    </div>
  );
};
