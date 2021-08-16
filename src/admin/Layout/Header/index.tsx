import React from "react";
import Image from "Next/image";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import PowerIcon from "./images/PowerIcon";
import avatar from "./images/avatar.jpg";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <Navbar className={styles.header}>
      <div className={`d-print-none ${styles.root}`}>
        <Nav className="ml-md-0">
          <NavItem className="d-flex align-items-center">
            <span
              className={`${styles.avatar} rounded-circle thumb-sm float-left`}
            >
              <Image src={avatar} alt="..." />
            </span>
            <span className={`small d-sm-down-none ${styles.accountCheck}`}>
              Philip smith
            </span>
          </NavItem>

          <NavItem className={`${styles.divider} d-none d-sm-block`} />

          <NavItem>
            <NavLink className={`${styles.navItem} text-white`} href="#">
              <PowerIcon className={styles.headerIcon} />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
};
