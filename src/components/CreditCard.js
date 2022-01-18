import React from 'react';
import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
  className,
}) => {
  return (
    <div
      className={`columns words card`}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="end width-100">
        <img
          src={type === 'Visa' ? visa : master}
          alt={`credit card ${type}`}
          className="card-brand"
        />
      </div>
      <div className="card-number centered">
        <span className="asterisco">★★★★ ★★★★ ★★★★</span>
        <span>{number.slice(-4)}</span>
      </div>
      <div className="margin">
        <div className={`card-info ${className}`}>
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <div> {bank} </div>
        </div>
        <div>{owner} </div>
      </div>
    </div>
  );
};

export default CreditCard;
