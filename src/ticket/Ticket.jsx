import React from 'react'
import S7Logo from '../assests/S7Logo.png'

function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__top">
        <div className="ticket__price">13 400 Р</div>
        <img className="ticket__img" src={S7Logo} alt="aviaComany" />
      </div>
      <div className="ticket__info">
        <div className="ticket__info__block">
          <div className="ticket__info__item">
            <div className="ticket__info__title">MOW – HKT</div>
            <div className="ticket__info__text">10:45 – 08:00</div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">MOW – HKT</div>
            <div className="ticket__info__text">11:20 – 00:50</div>
          </div>
        </div>
        <div className="ticket__info__block">
          <div className="ticket__info__item">
            <div className="ticket__info__title">В пути</div>
            <div className="ticket__info__text">21ч 15м</div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">В пути</div>
            <div className="ticket__info__text">13ч 30м</div>
          </div>
        </div>
        <div className="ticket__info__block">
          <div className="ticket__info__item">
            <div className="ticket__info__title">2 пересадки</div>
            <div className="ticket__info__text">HKG, JNB</div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">1 пересадка</div>
            <div className="ticket__info__text">HKG</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
