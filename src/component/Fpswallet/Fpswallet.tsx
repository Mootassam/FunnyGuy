import React from "react";
import "./Fpswallet.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
function Fpswallet(props) {
    const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const { amount } = props;
  return (
    <div className="app__fpswallet">
      <div className="fpswallet__header">
        <div className="fpswallet__time">{Dates.currentTime12()}</div>
        <div className="fpswallet__battery">
          <div className="fpswallet__data">
            <div className="fps__1"></div>
            <div className="fps__2"></div>
            <div className="fps__3"></div>
            <div className="fps__4"></div>
          </div>

          <div className="fps__namedata">5G</div>

          <div className="fpswallet__bat">
            <div className="batt__wallet">
              <div className="fps__level" style={{ width :`${limit}%` }}></div>
            </div>
            <div className="border__fps"></div>
          </div>
        </div>
      </div>
      <div className="fpswallet__subheaer">
        <div> <img src="/ewallets/back.png" alt=""  width={14} /></div>
      </div>

      <div className="fpswallet__bottom">
        <div className="fpswallet__code">
          <div className="fspwallet__chinese">交易编號</div>
          <div className="fpswallet__frn">FRN{Dates.generateRandomDateNumber()}PAYC01010{Number.generateRandom8Number()}</div>
        </div>
        <div className="fpswallet__border"></div>
      </div>

      <div className="fpswallet__content">
        <div className="fpswallet__logo">
          <img src="/ewallets/logo.png" alt="" width={46} />
        </div>

        <div className="fpswallet__text">
          您已過数给{" "}
          <span className="gras__text">
            {" "}
            Yip Yeun Leung Johnny(Mox Bank Limited **6742){" "}
          </span>
        </div>

        <div className="fpswallet__amount">
          <span className="fpswallet__currency">- 港幣</span>
          <span className="fpswallet__money">
            {Number.hongkong(props.amount)}
          </span>
        </div>

        <div className="fpswallet__sent">
          <span className="sent__text">已發送</span>
          <span className="sent__date">{Dates.fpsdate()}</span>
        </div>
      </div>
    </div>
  );
}

export default Fpswallet;
