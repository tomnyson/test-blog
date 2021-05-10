import React from 'react';

import {FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'

const Contact = ({icon}) => {
    return (
        <React.Fragment>
            <a
                href="https://www.facebook.com/buichien.211/"
                target="_blank"
                rel="noreferrer"
                className="button button-icon"
              >
                <FaFacebook className={`${icon}`}/>
              </a>
              <a
                href="https://github.com/BuiHongChien"
                target="_blank"
                rel="noreferrer"
                className="button button-icon"
              >
                <FaGithub className={`${icon}`}/>
              </a>
              <a
                href="https://twitter.com/BuiChie92070547"
                target="_blank"
                rel="noreferrer"
                className="button button-icon"
              >
                <FaTwitter className={`${icon}`}/>
              </a>
            
        </React.Fragment>
    );
};

export default Contact;