import React from "react";

import Layout from "../utils/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="blogs grid grid--blogs">
        <div className="blogs__item">
          <div className="blogs__title">
            How was your day?
          </div>
          <div
            className="blogs__image"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff40, #ffffff40), url(/images/avatar.jpg)`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
