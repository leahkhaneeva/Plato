import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Orange extends React.Component {
  render () {
    return (
      <div className="big-post-wrapper-orange">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
                 <div className="big-post-info">
                  <h2>{this.props.post.title}</h2>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>В&nbsp;Москве открылось крошечное бистро Mini Turkish Spot, вдохновленное турецким стритфудом и&nbsp;атмосферой Стамбула.</p></div>
                  <a href="/posts/9"><div className="big-post-button"> <p>Читать больше</p></div></a>
                  <div className="big-post-date"><p>22.05.2022</p></div>
                </div>
            </div>

      </div>

    );
  }
}

export default M_Posts_Recommendations_Orange
