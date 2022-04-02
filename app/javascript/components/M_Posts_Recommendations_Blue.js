import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Blue extends React.Component {
  render () {
    return (
      <div className="big-post-wrapper-blue">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
                 <div className="big-post-info">
                  <h2>{this.props.post.title}</h2>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>В&nbsp;меню&nbsp;&mdash; европейские блюда с&nbsp;красивой подачей: карбонара по-римски, томаты с&nbsp;красным луком и&nbsp;буратта с&nbsp;хурмой.</p></div>
                  <a href="/posts/2"><div className="big-post-button"> <p>Читать больше</p></div></a>
                  <div className="big-post-date"><p>20.01.2022</p></div>
                </div>
            </div>

      </div>

    );
  }
}

export default M_Posts_Recommendations_Blue
