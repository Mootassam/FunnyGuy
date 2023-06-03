import React from "react";
import "./green.css";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Green(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__green">
      <div className="green__header">
        <div className="green__left">
          <span className="green__time">{Dates.currentTime()}</span>

          <Left />
        </div>
        <div className="green__right">
          <div className="green__data">
            <div className="green__1"></div>
            <div className="green__2"></div>
            <div className="green__3"></div>
            <div className="green__4"></div>
            <div className="green__5"></div>
          </div>

          <div className="greeen__battery">
            <div className="green__border">
              <div
                className="green__level"
                style={{ width: `${limit}%` }}
              >
                </div>
                <span  className="limit__number">
                 {limit} </span>
            </div>
            <div className="green__bat"></div>
          </div>
        </div>
      </div>
      <div className="green__subheader">
        <div></div>
        <div className="green__subtitle">已完成</div>
        <div className="green__mobile">
          <img src="/Green/phone.png" alt="" width={15} />
        </div>
      </div>
      <img src="/Green/bar.png" alt="" />
      <div className="green__content">
        <div className="green__circle">
          <img src="/Green/check.png" width={21} />
        </div>
        <div className="green__title">
          <span className="title__green">已完成交易</span>
          <span className="green__description">參考編號 N33008120299</span>
        </div>
      </div>

      <div className="chinese__border">
        <label htmlFor="" className="chinese__label">
          收款人已收到你的轉服。
        </label>
      </div>

      <div className="chinese__logo">
        <div className="chinese__heaert">
          <img src="/Green/heart.png" alt="" width={18} height={15} />
          <label htmlFor="">常用收款人</label>
        </div>
        <div className="hor__bar"></div>
        <div className="chinese__save">
          <img src="/Green/save.png" alt="" width={18} height={19} />
          <label htmlFor="">儲存圖像</label>
        </div>
      </div>

      <div className="small__bar"></div>
      <div className="chinese__grey"></div>

      <div className="gree__details">
        <div className="__firstline">
          <div className="gree__left">收款戶口</div>
          <div className="gree__right">
            <span className="gree__name">
              {Names.generateRandomFullNameFromHongKong()}
            </span>
            <span className="gree__number">
              012681{Number.generateRandom8Number()}
            </span>
          </div>
        </div>
        <div className="__secondline">
          <div className="gree__left">收款銀行</div>
          <div className="gree__right">
            <span className="gree__chinese">中国银行 香港 有限公司 </span>
            <span className="gree__numberchinese">(012)</span>
          </div>
        </div>

        <div className="__thirdline">
          <div className="gree__left">支賬戶口</div>
          <div className="gree__right">
            <span className="gree__chinese">港元 储蓄</span>
            <span className="gree__012">
              352-33{Number.generate4RandomNumber()}-{" "}
              {Number.generate3RandomNumber()}
            </span>
          </div>
        </div>
      </div>
      <div className="chinese__grey"></div>
      <div className="gree__detailss">
        <div className="__secondline">
          <div className="gree__left">金額</div>
          <div className="gree__right">
            <span className="date__chinise">
              港元 {Number.hongkong(props.amount)}
            </span>
          </div>
        </div>
        <div className="__secondline">
          <div className="gree__left">轉賬日期</div>
          <div className="gree__right">
            <span className="date__chinise">即時 {Dates.hangSeng()}</span>
          </div>
        </div>
        <div className="last__line">
          <div className="last__linetext">致收款人訊息 / 賬單備考</div>
          <div></div>
        </div>
      </div>
      <div className="green__bottom">
        <img
          src="/Green/green.png"
          alt=""
          width={51}
          height={51}
          className="green__logo"
        />
        <div className="green__white">
          <div className="green__text1">
            <span>返回轉賬及付款</span>
          </div>
          <div className="green__text2">
            <span>進行另一筆轉賬</span>
          </div>
        </div>
        <div className="bottom__black">
          <img src="/Green/mobile.png" alt="" width={180} />
        </div>
      </div>
    </div>
  );
}

export default Green;
