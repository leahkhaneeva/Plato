import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Yellow extends React.Component {
  render () {
    return (
      <a href="/posts/1"><div className="big-post-wrapper-yellow">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
            <div className="big-post-pattern4"></div>
                 <div className="big-post-info">
                   <div className="big-post-date"><p>27.05.2022</p></div>
                <div className="big-post-title">{this.props.post.title}</div>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>Меню базируется на&nbsp;гастрономических традициях Ближнего Востока. Акцент на&nbsp;мезе, которых в&nbsp;ресторане представлено 17&nbsp;видов.</p></div>
                </div>
            </div>

      </div>
      </a>
    );
  }
}

export default M_Posts_Recommendations_Yellow
