import React from "react";

import styles from "./sidebar.module.scss";

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <header className={styles.logo}>Admin</header>
      <ul className={styles.nav}>
        <li className={styles.headerLink}>
          <a href="/admin">Dashboard</a>
        </li>
        <li className={styles.headerLink}>
          <a href="/admin/post">Post</a>
        </li>
        <li className={styles.headerLink}>
          <a href="/admin/category">Category</a>
        </li>
      </ul>
    </div>
  );
};
