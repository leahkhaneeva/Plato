import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Orange extends React.Component {
  render () {
    return (
      <a href="/posts/9"><div className="big-post-wrapper-orange">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
            <div className="big-post-pattern3"></div>
                 <div className="big-post-info">
                 <div className="big-post-date"><p>26.06.2022</p></div>
                  <div className="big-post-title">{this.props.post.title}</div>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>В&nbsp;Москве открылось крошечное бистро Mini Turkish Spot, вдохновленное турецким стритфудом и&nbsp;атмосферой Стамбула.</p></div>


                </div>
            </div>

      </div>
      </a>

    );
  }
}

export default M_Posts_Recommendations_Orange
