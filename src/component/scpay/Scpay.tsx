import React from "react";
import "./scpay.css";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
import Dates from "../../shared/dates";
function Scpay(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__scpay">
      <div className="scpay__header">
        <span className="spay__time">{Dates.currentTime()}</span>
        <div className="scpay__right">
          <div className="spacy__data">
            <div className="spacy__1"></div>
            <div className="spacy__2"></div>
            <div className="spacy__3"></div>
            <div className="spacy__4"></div>
          </div>
          <div className="data__scpay">{Names.generateRandomSignal()}</div>
          <div className="bbaa__scpay">
            <div className="scapy__battery">
              <div className="level__scapy" style={{ width: `${limit}%` }}>
                {" "}
              </div>
            </div>
            <div className="scpay__border"></div>
          </div>
        </div>
      </div>
      <div className="scpay__logo">
        <img src="/scpay/logo.png" alt="" width={387} />
      </div>
      <div className="scpay__content">
        <label className="fscpay__title">此款項已成功轉賬至收款人</label>
        <div className="fscpay__">
          <span className="chinesetext">您已轉賬 港幣</span>
          <span className="number__text">
            {Number.hongkong(props.amount)}元
          </span>
          &nbsp;
          <span className="chinesetext"> 給</span>&nbsp;
          <span className="englishtext">{Names.generateRandomName()}</span>
        </div>
        <div className="scpay__number">+852-98888888</div>
        <div className="detail__scapy">
          <div className="scapy__detail">
            您可以前往 「付款及交易纪錄」 以查閱交易纪錄
          </div>
          <div className="scapy__detail">
            參考編號 &nbsp;&nbsp;&nbsp;&nbsp; 2212-241656860200
          </div>
        </div>
      </div>

      <div className="scpay__bottom">
        <div className="scpay__title">
          <span>
            給好友傳送貼圖{" "}
            <label htmlFor="" className="scapy__expl">
              !
            </label>{" "}
          </span>
        </div>

        <div className="scpay__listuser">
          <div>
            <img src="scpay/1.png" alt="" width={58} />
          </div>
          <div>
            <img src="scpay/2.png" alt="" width={58} />
          </div>
          <div>
            <img src="scpay/3.png" alt="" width={58} />
          </div>
          <div>
            <img src="scpay/4.png" alt="" width={58} />
          </div>
          <div>
            <img src="scpay/5.png" alt="" width={58} />
          </div>
        </div>

        <div className="point__interegation">
          <div></div>

          <div>
            <img src="/scpay/interregation.png" alt="" width={24} height={24} />
          </div>
        </div>

        <div className="scpay__button">
          <div className="button__scpay1">
            <span>分享</span>
          </div>
          <div className="button__scpay2">
            <span>完成</span>
          </div>
        </div>

        <div className="scpay__mobile"></div>
      </div>
    </div>
  );
}

export default Scpay;
