import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Pages } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Menu = ({ pages }) => {
  const homeStyles = useStyles();
  const history = useHistory();

  return (
    <div className="menu">
      <label className="menu__button" for="menu__open" aria-hidden="true">
        <span><Avatar
          alt="avatar"
          src="/images/avatar.jpg"
          className={homeStyles.avatar}
        /></span>
      </label>

      <input
        className="menu__open"
        id="menu__open"
        type="checkbox"
        aria-hidden="true"
      />
      <nav className="menu__nav" role="navigation">
        <button
          onClick={() => history.push("/")}
          className="button button--menu"
        >
          home
        </button>

        {pages.map((p) => (
          <button
            onClick={() => history.push(p==='more'?'/blogs':`/${p}`)}
            className="button button--menu"
          >
            {p}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
