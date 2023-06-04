import React, { useEffect, useState } from "react";
import "./Orange.css";
import Dates from "../../shared/dates";
import Names from "../../shared/Names";
import Number from "../../shared/Number";
function Orange(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const [name , setName] = useState("")

  const {amount}= props


  useEffect(() => {
    setName(Names.generateRandomNames())
    
  }, [name])
  

  return (
    <div className="app__orange">
      <div className="orange__header">
        <div className="orage__left">
          <span className="orange__time"> {Dates.currentTime()}</span>
        </div>
        <div className="hdk__right">
          <div className="hdk__data">
            <div className="data__1">
              <div></div>
              <div className="div__4"></div>
              <div className="div__5"></div>
              <div className="div__6 __grey"></div>
            </div>
            <div className="data__2">
              <div></div>
              <div></div>
              <div className=""></div>
              <div className="__grey"></div>
            </div>
          </div>
          <div className="hdk__4g">{Names.generateRandomSignal()}</div>
          <div className="styling__battery">
            <div className="battery border__grey">
              <div
                className="battery__levelbank"
                style={{ width: `${limit}%` }}
              ></div>
            </div>
            <div className="battery__bar"></div>
          </div>
        </div>
      </div>

      <div className="orange__subheader">
        <div className="subheader__orange">
          <div className="back__image">
            <img src="/orange/back.png" alt="" width={7.5} height={15} />
          </div>
          <div className="subheader__title">交易詳情</div>
          <div></div>
        </div>

        <div className="subheader__bar">
          <div className="__red"></div>
          <div className="__orange"></div>
          <div className="__yellow"></div>
        </div>
      </div>

      <div className="orange__detaill">
        <div className="orange__transaction">
          <label htmlFor="" className="orange__label">
            交易日期
          </label>
          <span className="orange__date">{Dates.date()}</span>
        </div>
        <div className="orange__transaction __16">
          <label htmlFor="">入帳日期</label>
          <span className="orange__date">{Dates.date()}</span>
        </div>

        <div className="orange__transaction __19">
          <label htmlFor="">项目</label>
          <span className="orange__name">
            PAYBUDDY- TO HONG K*** R** C****
          </span>
        </div>
        <div className="orange__transaction __16">
          <label htmlFor="" className="text__amount">
            卡號
          </label>
          <span className="orange__card">
            5599-11**-****-{Number.generate4RandomNumber()}
          </span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">金額</label>
          <span className="amoutn__orange">HKD {Number.hongkong(amount)}</span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">收款人姓名：</label>
          <span className="payname__orange">KONG K*** R** C****</span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">收款帳戶</label>
          <span className="transaction__orange">
            164279317
          </span>
        </div>

        <div className="orange__transaction __13">
          <label htmlFor="">[轉數快]交易參考編號：</label>
          <span className="ref__orange">
            FRN{Dates.generateRandomDateNumber()}PAYC0101
            {Number.generateRandom9Number()}
          </span>
        </div>

        <div className="orange__transaction __14">
          <label htmlFor="">金額</label>
          <span className="status__orange">SUCCESS</span>
        </div>
      </div>

      <div className="orange__bottom"></div>
    </div>
  );
}

export default Orange;
