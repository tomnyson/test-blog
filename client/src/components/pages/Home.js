import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Contact from "../utils/Contact";
import Avt from "../utils/Avt";
import Background from "../utils/Background";

const pages = ["about", "resume", "more"];

const Home = () => {
  const history = useHistory();

  useEffect(()=>{
    axios.get('/').then(res=>console.log(res))
  })

  return (
    <div className="home">
      <Background />
      <div className="home__wrapper">
        <div className="home__avatar">
          <Avt size="avatar avatar--large" />
        </div>

        <div className="grid grid--home">
          <div></div>
          <div></div>
          <div></div>
          {pages.map((p) => (
            <button
              onClick={() =>
                history.push(p === "more" ? `/${p}/blogs` : `/${p}`)
              }
              className="button button--text"
            >
              {p}
            </button>
          ))}
          <Contact icon="icon icon--medium" />
        </div>
      </div>
    </div>
  );
};

export default Home;
