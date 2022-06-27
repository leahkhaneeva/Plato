import React from "react"
import PropTypes from "prop-types"
class M_Posts_Recommendations_Green extends React.Component {
  render () {

    return (
      <a href="/posts/1"><div className="big-post-wrapper-green">

            <div className="big-post-cover">
                <img src={this.props.post.image.url}/>
            </div>
            <div className="righthalf">
            <div className="big-post-pattern1"></div>
                 <div className="big-post-info">
                 <div className="big-post-date"><p>22.06.2022</p></div>
                  <div className="big-post-title">{this.props.post.title}</div>
                  <div className="big-post-string"></div>
                  <div className="big-post-textbox">
                  <p>В&nbsp;ресторане Maroon чувствуется атмосфера настоящего Восточного базара. У&nbsp;дверей расположилась открытая кухня с&nbsp;мангалом, дровяными печами и&nbsp;саджем.</p></div>

                </div>

            </div>

      </div>
      </a>

    );
  }
}








export default M_Posts_Recommendations_Green
