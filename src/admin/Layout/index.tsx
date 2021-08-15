import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "./layout.module.scss";

export const LayoutAdmin: React.FC = ({ children }) => {
  return (
    <div className={styles.layoutRoot}>
      <div className={styles.layoutWrap}>
        <Header />
        <Sidebar />
        <div className={styles.layoutContent}>{children}</div>
        <footer className={styles.laytFooter}>React admin template</footer>
      </div>
    </div>
  );
};
