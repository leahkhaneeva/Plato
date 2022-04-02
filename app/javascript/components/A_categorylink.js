import React from "react"
import PropTypes from "prop-types"
class A_categorylink extends React.Component {
  render () {
    return (
      <div className="categorylink">
        <div className="link">
          <div className="greendot"></div>
          <a href="/restaurants">Рестораны</a>
        </div>
        <div className="link">
          <div className="bluedot"></div>
          <a href="/cafes">Кафе</a>
        </div>
        <div className="link">
          <div className="orangedot"></div>
          <a href="/bars">Бары</a>
        </div>
        <div className="link">
          <div className="yellowdot"></div>
          <a href="/dishes">Блюда</a>
        </div>
      </div>
    );
  }
}

export default A_categorylink
