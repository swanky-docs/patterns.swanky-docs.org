import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ user }) => {
  return (
    <div className="avatar">
      <img src={'https://s3.amazonaws.com/reactivepixels/profiles/' + user + '/medium/avatar.jpg'} role="presentation" />
    </div>
  );
};

Avatar.propTypes = {
  user: PropTypes.string.isRequired
};


export default Avatar;
