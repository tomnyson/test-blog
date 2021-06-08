import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../utils/Layout";
import Menu from "../utils/Menu";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = () => {
      return axios.get("/api/blogs").then((res) => {
        return res.data;
      });
    };

    getData()
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const renderedBlogs = () =>
    blogs.map((b) => {
      console.log(b);
      return (
        <a 

        // <Link to={`/more/blogs/${b._id}`} > UPDATE LATER!!!
        
        href={b.url}
        target="__blank"
        >
          <div className="blogs__item">
            <div className="blogs__title">{b.title}</div>
            <div
              className="blogs__image"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff40, #ffffff10), url(/images/${b.img}.jpg)`,
              }}
            />
          </div>
        </a>
      );
    });

  return (
    <Layout>
      <div className="blogs">
        <div className="grid grid--blogs">{renderedBlogs()}</div>
      </div>
    </Layout>
  );
};

export default Blogs;
