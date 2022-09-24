import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ cardInfo }) {
  const { name, item, price, interest, location } = cardInfo;

  return (
    <div className="card col-span-1 flex rounded-xl">
      <div className="card__msg-btn">message</div>
      <div className="card__img">photo</div>
      <div className="card__info">
        <div className="name">{name}</div>
        <div className="wish">{item}</div>
        <div className="price">${price}</div>
        <div className="interest">{interest}</div>
        <div className="interest">{location}</div>
        <button type="button" className="read-more rounded-lg">
          more
        </button>
        <button type="button" className="donate rounded-lg">
          donate
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    interest: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })
};
