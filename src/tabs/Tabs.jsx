import React from 'react'
import classNames from 'classnames'

function Tabs(props) {
  return (
    <div className="tabs">
      <div
        className={classNames('tabs__item', 'tabs__cheap', {
          'tabs__item--active': props.tab === 'cheap'
        })}
        onClick={() => props.onTab()}
      >
        <span>Самый дешевый</span>
      </div>
      <div
        className={classNames('tabs__item', 'tabs__cheap', {
          'tabs__item--active': props.tab === 'fast'
        })}
        onClick={() => props.onTab()}
      >
        <span>Самый быстрый</span>
      </div>
    </div>
  )
}

export default Tabs

// tabs__item--active

// tabs__item tabs__fast