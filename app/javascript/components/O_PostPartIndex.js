import React from "react"
import PropTypes from "prop-types"
class O_PostPartIndex extends React.Component {
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
        <p>Рестораны {this.props.post.name}</p>
        <p>22.05.2022</p>
          </div>
          <div className="add">
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

export default O_PostPartIndex
