import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  url: string;
}

interface NavigationProps {
  data: NavItem[];
  navClass?: string;
}

const Navigation = ({ data, navClass }: NavigationProps) => {
  navClass = navClass || "site-nav-item";

  return (
    <React.Fragment>
      {data.map((navItem: any, i: number) => {
        return (
          <Link href={navItem.url} key={i}>
            <a className={navClass}>{navItem.label}</a>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default Navigation;
