import React from 'react';

import {FaGithub} from 'react-icons/fa';
import {SiCodesandbox} from 'react-icons/si';
import {AiFillYoutube} from 'react-icons/ai'

const Contact = ({icon}) => {
    return (
        <React.Fragment>
            <a
                href="https://codesandbox.io/u/Bhchien211"
                target="_blank"
                rel="noreferrer"
                className="button button-icon"
              >
                <SiCodesandbox className={`${icon}`}/>
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
                href="https://www.youtube.com/channel/UCiVHjAieLDz1C1pgatmEwbg"
                target="_blank"
                rel="noreferrer"
                className="button button-icon"
              >
                <AiFillYoutube className={`${icon}`}/>
              </a>
            
        </React.Fragment>
    );
};

export default Contact;