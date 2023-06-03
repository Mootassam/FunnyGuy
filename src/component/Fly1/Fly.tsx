import React from "react";
import "./Fly.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Fly(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__fly">
      <div className="fly__header">
        <div className="fly__left">
          <div className="fly__time">{Dates.currentTime()}</div>
        </div>

        <div className="fly__right">
          <div className="fly__data">
            <div className="fly__1"></div>
            <div className="fly__2"></div>
            <div className="fly__3"></div>
            <div className="fly__4"></div>
          </div>

          <div className="fly__name__data">{Names.generateRandomSignal()}</div>

          <div className="name__battery">
            <div className="fly__battery">
              <div className="fly__level" style={{
                        width: `${limit}%`,
                 
                      }}></div>
            </div>
            <div className="small__batteryborder"></div>
          </div>
        </div>
      </div>

      <div className="fly__content">
        <div className="fly__logo">
          <img src="/fly/fly__logo.png" width={97} alt="" />
        </div>

        <div className="fly__title">你已成功付款給</div>
        <div className="fly__number">10505{Number.generateRandom4Number()}</div>
        <div className="fly__description">
          <span>轉數快」</span>
          <span>註册帳戶為</span>
          <span className="fly__roboto">{Names.generateRandomName()}</span>
        </div>
        <div className="totalfly__amount">
          <div className="fly__currency">HKD</div>
          <div className="fly__amount">{Number.hongkongstyle2(props.amount)}</div>
        </div>
      </div>

      <div className="fly__footer">
        <div className="footer__button">
          <span>確定</span>
        </div>

        <div className="footer__subbutton"></div>
      </div>
    </div>
  );
}

export default Fly;
