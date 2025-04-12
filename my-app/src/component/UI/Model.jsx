import React, { Children } from "react";
import { createPortal } from "react-dom";
import styles from "./model.module.css";

function Model({ children, modleclose }) {
  return createPortal(
    <>
      <div className={styles.modelBackdroap} onClick={modleclose}></div>
      <div className={styles.modelContent}>{children}</div>
    </>,
    document.getElementById("model")
  );
}

export default Model;
