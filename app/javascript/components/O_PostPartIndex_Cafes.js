import React from "react"
import PropTypes from "prop-types"
class O_PostPartIndex_Cafes extends React.Component {
  render () {
    const postLink = "posts/" + this.props.post.id;
    return (
      <div className="post-wrapper">
      <a href={postLink}>

      <div className="cover">
      <img src={this.props.post.image.url}/>
      </div>
      <div className="info">
        <h2>{this.props.post.title}</h2>
        <div className="row">
        <div className="textbox">
        <p>Кафе {this.props.post.name}</p>
        <p>28.05.2022</p>
          </div>
          <div className="add_blue">
              <div className="plus">
              </div>
          </div>
          </div>
        </div>
      </a>
      </div>
    );
  }
}

export default O_PostPartIndex_Cafes
