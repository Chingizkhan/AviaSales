import React from 'react'

function Filter() {
  

  return (
    <div className="filter">
      <h2 className="filter__title">Количество пересадок</h2>
      <div className="filter__item">
        <input type="checkbox" id="all" name="all" value="all" defaultChecked />
        <label htmlFor="all">Все</label>
      </div>
      <div className="filter__item">
        <input type="checkbox" id="withoutTransfer" value="withoutTransfer" name="withoutTransfer" />
        <label htmlFor="withoutTransfer">Без пересадок</label>
      </div>
      <div className="filter__item">
        <input type="checkbox" id="oneTransfer" value="oneTransfer" name="oneTransfer" />
        <label htmlFor="oneTransfer">1 пересадка</label>
      </div>
      <div className="filter__item">
        <input type="checkbox" id="twoTransfers" value="twoTransfers" name="twoTransfers" />
        <label htmlFor="twoTransfers">2 пересадки</label>
      </div>
      <div className="filter__item">
        <input type="checkbox" id="threeTransfers" value="threeTransfers" name="threeTransfers" />
        <label htmlFor="threeTransfers">3 пересадки</label>
      </div>
    </div>
  )
}

export default Filter
