import React from "react";
import { useHistory } from "react-router-dom";

import Contact from '../utils/Contact'
import Avt from '../utils/Avt'

const pages = ["about", "resume", "more"];


const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__avatar">
          <Avt size='avatar avatar--large'
          />
        </div>
        
        <div className="grid grid--home">
          <div></div><div></div><div></div>
          {pages.map((p) => (
            <button
              onClick={() => history.push(p==='more'?'/blogs':`/${p}`)}
              className="button button--text"
            >
              {p}
            </button>
          ))}
          <Contact icon='icon icon--medium' />
        </div></div>
      </div>
  );
};

export default Home;
