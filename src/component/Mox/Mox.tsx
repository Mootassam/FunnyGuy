import React from "react";
import "./Mox.css";
import Number from "../../shared/Number";
import { IoIosWifi } from "react-icons/io";
import Dates from "../../shared/dates";
function Mox(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const { amount } = props;
  return (
    <div className="app__mox">
      <div className="mox__header">
        <div className="mox__top">
          <div className="mox__time">
            <span className="time__mox"> 22:13</span>
          </div>
          <div className="mox__right">
            <div className="mox__data">
              <div className="mox__1"></div>
              <div className="mox__2"></div>
              <div className="mox__3"></div>
              <div className="mox__4"></div>
            </div>
            <IoIosWifi size={17} />

            <div className="mox__battery">
              <div className="cover__battery">
                <div
                  className="mox__level"
                  style={{ width: `${limit}%` }}
                ></div>

                <div className="mox__percent">{limit}</div>
              </div>

              <div className="bat__mox"></div>
            </div>
          </div>
        </div>

        <div className="mox__bottom">
          <div className="mox__close">
            <img src="/mox/close.png" width={15} alt="" />
          </div>
          <div className="mox__chinese">登出 </div>
        </div>
      </div>

      <div className="mox__subheader">
        <div className="mox__circle">
          <img src="/mox/check.png" alt="" width={29} />
        </div>

        <div className="circle__subheader">
          <span>
            <img src="/mox/chinese.png" alt=""  width={48} />
            
         </span>
        </div>
        <div className="circle__subdescription">
          您的付款已成功轉賬至收款人
          <span className="positon__re">。</span>
        </div>
      </div>

      <div className="mox__content">
        <div className="small__circle">
          <img src="/mox/red.png" alt="" width={11} />
        </div>

        <div className="mox__contenttop">
          <div className="moxtop__left">
            <div className="moxt__top">轉賬金額</div>

            <div className="moxt__bottom">港幣</div>
          </div>

          <div className="moxtop__right">
            <span className="mox__amoutn">{Number.hongkong(props.amount)}</span>
          </div>
        </div>

        <div className="mox__detaill">
          <div className="__mox __p14">
            <span className="first__mox">田</span>
            <span className="second__mox">Current Account</span>
            <span className="third__mox">000****{Number.generate2RandomNumber()} 港幣</span>
          </div>

          <div className="__mox">
            <span className="first__mox">至</span>
            <span className="second__mox">Pang Chi Sing</span>
            <span className="third__mox">74920857005 Mox Bank Limited </span>
          </div>

          <div className="__mox">
            <span className="first__mox">交易日期</span>
            <span className="second__mox">{Dates.moxdate()}</span>
          </div>

          <div className="__mox">
            <span className="first__mox">将此收款人加入您的收款人名單</span>
            <span className="second__mox">是</span>
          </div>

          <div className="__mox">
            <span className="first__mox">致收款人的訊息</span>
            <span className="second__mox">92639291</span>
          </div>

          <div className="__mox">
            <span className="first__mox">參考編號</span>
            <span className="second__mox">
              50{Dates.generateRandomDateNumber()}2229
              {Number.genrateRandom6Number()}
            </span>
          </div>
        </div>
      </div>

      <div className="mox__bottom">
        <div className="mox__border"></div>
      </div>
    </div>
  );
}

export default Mox;
