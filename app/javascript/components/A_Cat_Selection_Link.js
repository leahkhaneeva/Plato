import React from "react"
import PropTypes from "prop-types"
class A_Cat_Selection_Link extends React.Component {
  render () {
    return (
      <div className="catselectionlink">
        <div className="link">
          <div className="catselectiongreendot"></div>
          <a href="/restaurants">Рестораны</a>
        </div>
        <div className="link">
          <div className="catselectionbluedot"></div>
          <a href="/cafes">Кафе</a>
        </div>
        <div className="link">
          <div className="catselectionorangedot"></div>
          <a href="/bars">Бары</a>
        </div>
        <div className="link">
          <div className="catselectionyellowdot"></div>
          <a href="/dishes">Блюда</a>
        </div>
      </div>
    );
  }
}

export default A_Cat_Selection_Link
