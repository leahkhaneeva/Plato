import React from "react"
import PropTypes from "prop-types"
import A_Icons_Arrows from "./A_Icons_Arrows.js"
import A_Icons_Arrows_Images_Left from "./A_Icons_Arrows_Images_Left.js"
import A_Icons_Arrows_Images_Right from "./A_Icons_Arrows_Images_Right.js"


class O_PostPart extends React.Component {
  render () {
    const postLink = "posts/" + this.props.post.id;
    return (
      <div className="show_post_container">
      <A_Icons_Arrows />
      <A_Icons_Arrows_Images_Left />
      <A_Icons_Arrows_Images_Right />
      <div className="inner_post_container">
      <div className="show_image_container">
      <img src={this.props.post.image.url}/>
      <div className="post_photo_points"></div>
      </div>
       <div className="pattern"></div>

         <div className="location">
            <div className="locationicon"></div>
            <div className="placename">Maroon</div>
            <div className="placeaddresse">Кутузовский просп., 2/1 строение 6, Москва</div>
         </div>
        <div className="flagtag">
           <div className="flagicon">
           

           </div>
        </div>

        <p dangerouslySetInnerHTML={{__html: this.props.post.content}} />
        <div className="postdate"><p>21.01.2022</p></div>
        <a href={postLink}/>
      </div>




      </div>

    );
  }
}

export default O_PostPart
