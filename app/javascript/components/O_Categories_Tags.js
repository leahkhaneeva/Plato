import React from "react"
import PropTypes from "prop-types"
import M_Categories_Asiatic from "./M_Categories_Asiatic.js"
import M_Categories_Eastern from "./M_Categories_Eastern.js"
import M_Categories_European from "./M_Categories_European.js"
import M_Categories_Northern from "./M_Categories_Northern.js"
class O_Categories_Tags extends React.Component {
  render () {
    return (
      <div className="culturecats_container">
          <M_Categories_Asiatic />
          <M_Categories_European />
          <M_Categories_Eastern />
          <M_Categories_Northern />
          <div className="culture_container">
          <div className="northernnnplate"></div>
          </div>
          <div className="culture_container">
          <div className="africanplate"></div>
      </div>
      </div>
    );
  }
}

export default O_Categories_Tags
