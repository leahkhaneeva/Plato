import React from "react"
import PropTypes from "prop-types"
class A_FooterLink extends React.Component {
  render () {
    return (
    <div className="footerlinkcontainer">
        <div className="footersubscribe">
              <p>Подписаться на рассылку</p>
              <div className="footersubscribeinput">
              <p>Введите email</p>
              </div>
              <div className="footersubscribeagree">
               <div className="checkbox"></div>
               <p>Я&nbsp;хочу получать новостную рассылку и&nbsp;даю согласие на&nbsp;обработку персональных данных. </p>
              </div>
        </div>
        <div className="footerlink1">
            <div className="linksinfooter">
              <a href="/categories/1/posts">О Plato</a>
            </div>
              <div className="linksinfooter">
                <a href="/categories/1/posts">Помощь</a>
              </div>
              <div className="linksinfooter">
                <a href="/categories/1/posts">Контакты</a>
              </div>
              <div className="linksinfooter">
                <a href="/categories/1/posts">Рекламодателям</a>
              </div>
            </div>
            <div className="footerlink2">
              <div className="linksinfooter">
                <a href="/categories/1/posts">Рестораны</a>
              </div>
              <div className="linksinfooter">
                <a href="/categories/2/posts">Кафе</a>
              </div>
              <div className="linksinfooter">
                <a href="/categories/3/posts">Бары</a>
              </div>
            <div className="linksinfooter">
              <a href="/categories/4/posts">Блюда</a>
            </div>
        </div>
        <div className="footersocial">
          <div className="telegram"></div>
          <div className="zen"></div>
          <div className="vk"></div>
        </div>
    </div>
    );
  }
}

export default A_FooterLink
