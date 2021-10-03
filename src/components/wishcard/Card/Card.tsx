// Wishcards are rendered on multiple pages (/wishcards, /wishcards/me)
// This is for rendering one wishcard (so styles are consistent across all pages; keepin it DRY ;) )

import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface CardProps {
  cardInfo: {
    name: string;
    item: string;
    price: number;
    interest: string;
    location: string;
  };
}

export default function Card({ cardInfo }: CardProps): JSX.Element {
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
        <button className="read-more rounded-lg">more</button>
        <button className="donate rounded-lg">donate</button>
      </div>
    </div>
  );
}
