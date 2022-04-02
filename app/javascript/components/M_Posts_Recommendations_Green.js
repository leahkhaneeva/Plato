import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Green extends React.Component {
  render () {

    return (
      <div className="big-post-wrapper-green">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
                 <div className="big-post-info">
                  <h2>{this.props.post.title}</h2>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>Меню базируется на&nbsp;гастрономических традициях Ближнего Востока. Акцент на&nbsp;мезе, которых в&nbsp;ресторане представлено 17&nbsp;видов.</p></div>
                  <a href="/posts/1"><div className="big-post-button"> <p>Читать больше</p></div></a>
                  <div className="big-post-date"><p>22.05.2022</p></div>
                </div>
            </div>

      </div>

    );
  }
}








export default M_Posts_Recommendations_Green
