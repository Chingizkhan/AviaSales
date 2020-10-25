import React from 'react'
import Header from './header/Header'
import Filter from './filter/Filter'
import Tabs from './tabs/Tabs';
import Ticket from './ticket/Ticket';
import './scss/main.scss'

function App() {
  const [tab, setTab] = React.useState('cheap')
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fetchID() {
      const response = await fetch('https://front-test.beta.aviasales.ru/search')
      const searchId = await response.json()
      async function fetchData() {
        const resp = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
        const data = await resp.json()
        const newData = data.tickets.splice(0, 5)
        setData(newData)
      }
      fetchData()
    }
    fetchID()
  }, [])

  const changeTabHandler = () => {
    setTab(tab === 'cheap' ? 'fast' : 'cheap')
  }

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <section className="s-home">
          <div className="container">
            <div className="s-home__wrapper"> 
              <div className="left-side">
                <Filter />
              </div>
              <div className="right-side">
                <Tabs
                  tab={tab}
                  onTab={changeTabHandler}
                />
                {data.map((item, index) => {
                  return (
                    <Ticket {...item} key={`${item}_${index}`} />
                  )
                })}
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
