import React from "react";
import { Fragment } from "react";

import Dandelion from "../../styles/images/dandelion.png";
import Dandelions from "../../styles/images/dandelions.png";

const Background = (props) => {
  const items = [];
  for (let i = 1; i <= 58; i++) {
    items.push(
      <div className="bg__item">
        <img src={Dandelion} className="bg__dandelions--1" />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="bg">
        <div className="bg__dandelions">
          {" "}
          <img src={Dandelions} className="bg__dandelions--0" />
        </div>
        <div className="bg__wrapper">{items}</div>
      </div>
      {props.children}
    </Fragment>
  );
};

export default Background;
