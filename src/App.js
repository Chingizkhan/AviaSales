import React from 'react'
import Header from './header/header'
import './scss/main.scss'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <section className="s-home">
          <div className="container">
            <div className="s-home__wrapper"> 
              <div className="left-side">
                <div className="filter">
                  <h2 className="filter__title">Количество пересадок</h2>
                  <div className="filter__item">
                    <input type="checkbox" id="all" name="all" checked />
                    <label for="all">Все</label>
                  </div>
                  <div className="filter__item">
                    <input type="checkbox" id="withoutTransfer" name="withoutTransfer" />
                    <label for="withoutTransfer">Без пересадок</label>
                  </div>
                  <div className="filter__item">
                    <input type="checkbox" id="oneTransfer" name="oneTransfer" />
                    <label for="oneTransfer">1 пересадка</label>
                  </div>
                  <div className="filter__item">
                    <input type="checkbox" id="twoTransfers" name="twoTransfers" />
                    <label for="twoTransfers">2 пересадки</label>
                  </div>
                  <div className="filter__item">
                    <input type="checkbox" id="threeTransfers" name="threeTransfers" />
                    <label for="threeTransfers">3 пересадки</label>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <div className="tabs">
                  <div className="tabs__item tabs__cheap tabs__item--active"><span>Самый дешевый</span></div>
                  <div className="tabs__item tabs__fast"><span>Самый быстрый</span></div>
                </div>
                <div className="ticket">
                  <div className="ticket__top">
                    <div className="ticket__price">13 400 Р</div><img className="ticket__img" src="static/img/S7Logo.png" alt="aviaComany" />
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
                <div className="ticket">
                  <div className="ticket__top">
                    <div className="ticket__price">13 400 Р</div><img className="ticket__img" src="static/img/S7Logo.png" alt="aviaComany" />
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
                <div className="ticket">
                  <div className="ticket__top">
                    <div className="ticket__price">13 400 Р</div><img className="ticket__img" src="static/img/S7Logo.png" alt="aviaComany" />
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
                <div className="ticket">
                  <div className="ticket__top">
                    <div className="ticket__price">13 400 Р</div><img className="ticket__img" src="static/img/S7Logo.png" alt="aviaComany" />
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
                <div className="ticket">
                  <div className="ticket__top">
                    <div className="ticket__price">13 400 Р</div><img className="ticket__img" src="static/img/S7Logo.png" alt="aviaComany" />
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer"></footer>
    </div>
    </div>
  );
}

export default App;
