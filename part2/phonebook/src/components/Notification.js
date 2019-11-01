import React from 'react';

const Notification = ({message , type}) => {
  if(message === null){
    return null;
  } else {
    return (
      <div className={`notification __${type}`}>
        {message}
      </div>
    );
  }
};

export default Notification;