import React from "react"
import PropTypes from "prop-types"
import A_categorylink from "./A_categorylink.js"
import A_Icons_Logo from "./A_Icons_Logo.js"
import A_Image_AvatarS from "./A_Image_AvatarS.js"
import A_Icons_Search from "./A_Icons_Search.js"
class O_Topmenu extends React.Component {
  render () {
    return (
    <div className="top_menu">
     <A_Icons_Logo />
     <A_categorylink />
     <A_Icons_Search />
     <A_Image_AvatarS />

     </div>


    );
  }
}

export default O_Topmenu
