import React from "react"
import PropTypes from "prop-types"
import O_PostPart from "./O_PostPart.js"
import O_PostPartIndex_Cafes from "./O_PostPartIndex_Cafes.js"

class O_AllPosts_Cafes extends React.Component {
  render () {
    return (
      <div>
        <h1 className="cat_title">Кафе</h1>
        <div className="firstblock">
        {this.props.posts.map(post => (
           <O_PostPartIndex post={post}/>
        ))}
        </div>
      </div>
    );
  }
}

O_AllPosts.propTypes = {
  posts: PropTypes.array
};

export default O_AllPosts_Cafes
