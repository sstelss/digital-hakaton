import React from 'react';
import './index.css';
import gaysImg from '../../img/mainPage/gays.png'

export default function MainInfoBlock() {
  return (
    <div className="MainInfoBlock">
        <div className="infoContainer">
          <div className="headerInfo">
            <span className="headerText">приветствуем тебя, дорогой друг!</span>
            <span className="headerText">мы знаем почему ты здесь и поможем тебе стать настоящим волонтером!</span>
          </div>

          <div className="textWithImgContainer">
            <div className="textBoxLeft">
              <span className="ordinaryText">Прежде всего, необходимо узнать кто такой «волонтер».</span>
              <span className="ordinaryText">Это тот, кто действует по свободной воле. Сам захотел, и сам выбрал что делать.</span> 
              <span className="ordinaryText"><span className="emetedText">Ресурс волонтера</span> — его личное время, его личные силы, умения и навыки. </span>
            </div>

            <div className="gaysImageContainer">
              <img className="imgGays" src={gaysImg}></img>
            </div>

            <div className="textBoxRight">
              <span className="ordinaryText">Если вопрос <span className="emetedText">«Как стать волонтёром?»</span> появился, значит есть желание сделать что-то доброе! И это самое главное.</span>
              <span className="ordinaryText"><span className="emetedText">Желание</span> — и есть ниточка за которую надо держаться, чтобы клубочек привел к результату.</span>
            </div>
          </div>

          <div className="textLine">
            <span className="ordinaryText textInTextLine">
              Теперь самое время задать себе второй вопрос: что конкретно я хочу? Кому и как я готов помогать?
            </span>
            <span className="ordinaryText textInTextLine">
              Тушить пожары? Играть с детьми в больнице? Учить сирот в детдомах полезным навыкам? Заботиться о чистоте парков и скверов в городе? 
            </span>
            <span className="ordinaryText textInTextLine">
              Пока ответ не найден, бессмысленно двигаться дальше.
            </span>
          </div>
        </div>
    </div>
    );
}

