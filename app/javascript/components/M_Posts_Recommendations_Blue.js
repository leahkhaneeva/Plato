import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Blue extends React.Component {
  render () {
    return (
      <a href="/posts/2"><div className="big-post-wrapper-blue">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
            <div className="big-post-pattern2"></div>
                 <div className="big-post-info">
                 <div className="big-post-date"><p>23.06.2022</p></div>
                  <div className="big-post-title">{this.props.post.title}</div>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>В&nbsp;меню&nbsp;&mdash; европейские блюда с&nbsp;красивой подачей: карбонара по-римски, томаты с&nbsp;красным луком и&nbsp;буратта с&nbsp;хурмой.</p></div>
                </div>
            </div>

      </div>
      </a>

    );
  }
}

export default M_Posts_Recommendations_Blue
