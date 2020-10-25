import React from 'react'
import S7Logo from '../assests/S7Logo.png'

function Ticket({price, segments}) {

  function sklonenie(number) {
    const cases = [0, 1, 2, 3]
    const row = ['пересадок', 'пересадка', 'пересадки']
    switch (number) {
      case cases[0]:
        return row[0]
      case cases[1]:
        return row[1]
      case cases[2]:
        return row[2]
      case cases[3]:
        return row[2]
      default:
        return row[0]
    }
  }

  function addZeroToHour(date) {
    const getHours = date.getHours()
    if (String(getHours).length === 1) {
      return '0' + getHours
    }
    return getHours
  }

  function addZeroToMinute(date) {
    const getMinutes = date.getMinutes()
    if (String(getMinutes).length === 1) {
      return '0' + getMinutes
    }
    return getMinutes
  }

  let [l1, l2, l3, l4, l5] = String(price)
  const date1 = new Date(Date.parse(segments[0].date))
  const date2 = new Date(Date.parse(segments[1].date))

  function hoursInWay(num) {
    return Math.floor(segments[num].duration / 60)
  }

  function minutesInWay(num) {
    return Math.floor(segments[num].duration % 60)
  }

  function destinationTime(date) {
    let hours = (date.getHours() + hoursInWay(0)) % 24
    let minutes = (date.getMinutes() + minutesInWay(0)) % 60
    if ((date.getMinutes() + minutesInWay(0)) / 60 >= 1) {
      hours++
    }
    if (String(hours).length === 1) {
      hours = '0' + hours
    }
    if (String(minutes).length === 1) {
      minutes = '0' + minutes
    }
    return `${hours}:${minutes}`
  }

  return (
    <div className="ticket">
      <div className="ticket__top">
        <div className="ticket__price">
          {l1+l2} {l3+l4+l5} Р
        </div>
        <img className="ticket__img" src={S7Logo} alt="aviaComany" />
      </div>

      <div className="ticket__info">
        <div className="ticket__info__block">
          <div className="ticket__info__item">
            <div className="ticket__info__title">
              {segments[0].origin} – {segments[0].destination}
            </div>
            <div className="ticket__info__text">
              {addZeroToHour(date1)}:{addZeroToMinute(date1)}
              -
              {destinationTime(date1)}
            </div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">В пути</div>
            <div className="ticket__info__text">
              {hoursInWay(0)}ч {minutesInWay(0)}м
            </div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">
              {segments[0].stops.length} {sklonenie(segments[0].stops.length)}
            </div>
            <div className="ticket__info__text">
              {segments[0].stops.length  ? segments[0].stops.join(',') : '-'}
            </div>
          </div>
        </div>


        <div className="ticket__info__block">
          <div className="ticket__info__item">
            <div className="ticket__info__title">
              {segments[1].origin} – {segments[1].destination}
            </div>
            <div className="ticket__info__text">
              {addZeroToHour(date2)}:{addZeroToMinute(date2)}
                -
              {destinationTime(date2)}
            </div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">В пути</div>
            <div className="ticket__info__text">
            {hoursInWay(1)}ч {minutesInWay(1)}м
            </div>
          </div>
          <div className="ticket__info__item">
            <div className="ticket__info__title">
              {segments[1].stops.length} {sklonenie(segments[1].stops.length)}
            </div>
            <div className="ticket__info__text">
              {segments[1].stops.length  ? segments[1].stops.join(',') : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
