import React from 'react';

import Avatar from "@material-ui/core/Avatar";

const Avt = ({size}) => {
    return (
        <Avatar
            alt="avatar"
            src='/images/avatar.jpg'
            className={`avatar avatar--${size}`}
          />
    );
};

export default Avt;