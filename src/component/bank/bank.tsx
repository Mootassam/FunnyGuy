import React from "react";
import "./bank.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
function Bank(props) {
  return (
    <div className="app__bank">
      <div className="bank__header">
        <div className="header__chinese">交易金額</div>

        <div className="header__amout">
          <div className="amount__cerruncy">HKD</div>
          <div className="app__amoutn">
            <div className="amount__total">{Number.hongkong(props.amount)}</div>
            <div className="amount__cr">CR</div>
          </div>
        </div>
      </div>

      <div className="header__bar"></div>

      <div className="bank__section">
        <div className="section__group">
          <div className="section__left">交易編號</div>
          <div className="section__right">ENS{Dates.generateRandomDateNumber()}00{Number.genrateRandom6Number()}</div>
        </div>

        <div className="section__group">
          <div className="section__left">交易類型</div>
          <div className="section__right">FPS Inward Fund Transfer</div>
        </div>
        <div className="section__group">
          <div className="section__left">交易賬號</div>
          <div className="section__right">PAO BANK (7522**0368)</div>
        </div>

        <div className="section__group">
          <div className="section__left">交易幣種</div>
          <div className="section__right">HKD</div>
        </div>
        <div className="section__group">
          <div className="section__left">交易時間</div>
          <div className="section__right">{Dates.datetime()}</div>
        </div>
        <div>
          <div className="section__left">對手银行</div>
          <div className="section__right"></div>
        </div>

        <div className="section__group">
          <div className="section__left">對手户名</div>
          <div className="section__right">MISS CHEONG CHING YEE DIANA</div>
        </div>
        <div className="section__group">
          <div className="section__left">交易備註</div>
          <div className="section__right"></div>
        </div>
      </div>
    </div>
  );
}

export default Bank;
