import React from "react";
import "./bankChina.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function BankChina(props) {
  return (
    <div className="app__china">
      <div className="china__header">
        <img src="/bankchina/bankchina.png" alt="" width={196} />
      </div>
      <img
        src="/bankchina/background.png"
        alt=""
        width={180}
        className="backgroundchina__image"
      />
      <div className="china__content">
        <div className="contentchina__detail">
          <div className="china__left">參考編號</div>
          <div className="china__right">23072{Number.generateRandom8Number()}</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">交易種類</div>
          <div className="china__right">即時轉賬</div>
        </div>
        <div className="contentchina__detail __topspace">
          <div className="china__left">交易状態</div>
          <div className="china__right">款项已成功發送給收款人</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">交易日期</div>
          <div className="china__right __chinadate">{Dates.lividate()}</div>
        </div>

        <div className="contentchina__detail __topspace">
          <div className="china__left">付款人/賬戶</div>
          <div className="china__right __detail">
            <span>LUI M** L**</span>
            <span>港元儲蓄賬戶</span>
            <span>012***692</span>
          </div>
        </div>

        <div className="contentchina__detail normalspace">
          <div className="china__left">收款人/賬户</div>
          <div className="china__right __detail">
            <span>{Names.generateRandomName()}</span>
            <span>+852-67598857</span>
            <span>轉數快-預設收款銀行/機構</span>
          </div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬金額</div>
          <div className="china__right __specialfont ">港元{Number.hongkongstyle2(props.amount)}</div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬費用</div>
          <div className="china__right __specialfont ">豁免轉賬費用</div>
        </div>
        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬日期</div>
          <div className="china__right __specialfont ">即時</div>
        </div>

        <div className="contentchina__detail normalspace">
          <div className="china__left">轉賬編號</div>
          <div className="china__right __normalfont ">12{Dates.generatedate()}F285{Number.genrateRandom6Number()}</div>
        </div>
      </div>
    </div>
  );
}

export default BankChina;
