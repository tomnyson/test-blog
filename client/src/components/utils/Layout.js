import React from "react";

import Menu from "../utils/Menu";
import SideBar from '../utils/SideBar'

const barOptions = ["quotes", "blogs"];

const Layout = (props) => {
  return (
    <div className="layout">
        {/* <Menu /> */}
      <div className="title">More</div>
      <div className="layout__wrapper">
        <SideBar barOptions={barOptions} />
        <div className="layout__main">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
