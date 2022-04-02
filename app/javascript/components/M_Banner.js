import React from "react"
import PropTypes from "prop-types"
class M_Banner extends React.Component {
  render () {
    return (
      <div className="banner_container">
        <div className="banner_image"></div>
        <div className="banner_left_arrow"></div>
        <div className="banner_right_arrow"></div>
        <h1>Японские моти в азиатском бистро Zodiac</h1>
        <div className="banner_readmore_button"><p>Читать больше</p></div>
        <div className="banner_dots"></div>

      </div>
    );
  }
}

export default M_Banner
