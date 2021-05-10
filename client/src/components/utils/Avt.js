import React from 'react';

import Avatar from "@material-ui/core/Avatar";

const Avt = ({size}) => {
    return (
        <Avatar
            alt="avatar"
            src="/images/avatar.jpg"
            className={`${size}`}
          />
    );
};

export default Avt;