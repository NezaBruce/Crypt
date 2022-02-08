import React from 'react';

const Card = ({title,time}) => {
    return (
      <div className="card">
        <p className="title">
          
          {title}
        </p>
        <h3 className="timestamp">{time}</h3>
        <div className="cardicons">
          <div className="call">Phone</div>
          <div className="tik">TIk</div>
        </div>
      </div>
    );
};

export default Card;
