import React from "react";

import Menu from "../utils/Menu";
import SideBar from "../utils/SideBar";
import Background from "../utils/Background";

const barOptions = ["quotes", "blogs"];

const Layout = (props) => {
  return (
    <Background>
      <div className="layout">
        <Menu page="more" />
        <div style={{ position: "fixed" }}>
          <div className="title title--more">More</div>
        </div>
        <div className="layout__wrapper">
          <SideBar barOptions={barOptions} />
          <div className="layout__main">{props.children}</div>
        </div>
      </div>
    </Background>
  );
};

export default Layout;
