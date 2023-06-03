import React from "react";
import "./RedCross.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
function RedCross(props) {

  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__redcross">
      <div className="redcross__header">
        <div className="redcross__top">
          <div className="redcross__time">
            <span>{Dates.currentTime()}</span>
          </div>
          <div className="redcross__baterry">
            <div className="redcross__data">
              <div className="corss__1"></div>
              <div className="cross__2"></div>
              <div className="cross__3"></div>
              <div className="cross__4"></div>
            </div>
            <div className="redcross__4G">
              <span> 4G</span>
            </div>
            <div className="redcross__batter">
              <div className="cross__battery">
                <div className="cross__level" style={{ width:`${limit}%`}}></div>
              </div>

              <div className="cross__border"></div>
            </div>
          </div>
        </div>
        <div className="redcross__subheader">
          <span>商戶付款</span>
        </div>
      </div>
      <div className="redcross__detaill">
        <div>
          <div className="red__left">
            <span>付款予</span>
          </div>
          <div className="red__right">
            <span>香港紅十字會</span>
          </div>
        </div>

        <img
          src="/redcross/bar.png"
          alt=""
          className="bar__"
          width={281}
          height={4}
        />
        <div>
          <div className="red__left">
            <span>付款金額</span>
          </div>
          <div className="red__right">
            <span className="currency__cross">港幣</span>
            <span className="cross__amount">
              {Number.hongkong(props.amount)}
            </span>
          </div>
        </div>
        <img
          src="/redcross/bar.png"
          alt=""
          className="bar__"
          width={281}
          height={4}
        />
        <div>
          <div className="red__left">
            <span>状態</span>
          </div>
          <div className="red__right">
            <div className="cross__check">
              <img src="/redcross/check.png" alt="" width={22} />

              <span> 成功</span>
            </div>
          </div>
        </div>
        <img
          src="/redcross/bar.png"
          alt=""
          className="bar__"
          width={281}
          height={4}
        />

        <div>
          <div className="cross__line">
            <div className="red__left">
              <span>轉數快識別碼</span>
            </div>

            <div className="right__cross">
              <span>164278077</span>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="cross__line">
            <div className="red__left">
              <span>參考編號</span>
            </div>

            <div className="right__cross">
              <span>
                CN935{Dates.generateRandomDateNumber()}2
                {Number.generateRandom4Number()}
              </span>
              <span>2010000{Number.genrateRandom6Number()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="redcross__bottom">
        <div className="redcross__button">
          <span>確定</span>
        </div>
        <div className="cross__button"></div>
      </div>
    </div>
  );
}

export default RedCross;
