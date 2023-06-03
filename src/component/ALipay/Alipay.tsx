import React from "react";
import "./Alipay.css";
import Dates from "../../shared/dates";
import Names from "../../shared/Names";
import Number from "../../shared/Number";
import Left from "../../shared/icons/Left";
function Alipay(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__alipay">
      <div className="alipay">
        <div className="alipay__header">
          <div className="alipay__time">{Dates.currentTime()}
          <Left />
          </div>
          <div className="alipay__right">
            <div className="alipay__data">
              <div className="alipay__1"></div>
              <div className="alipay__2"></div>
              <div className="alipay__3"></div>
              <div className="alipay__4"></div>
            </div>
            <div className="alipay__namedata">{Names.generateRandomSignal()}</div>
            <div className="battt__">
              <div className="alipay__battery">
                <div
                  className="alipay__level"
                  style={{
                    width: `${limit}%`,
                  }}
                ></div>
          
              </div>
              <div className="alipay__borderbattery"></div>
            </div>
          </div>
        </div>
        <div className="alipay__content">
          <div className="alipay__subheader">
            <div className="alipay__img">
              <img src="/fps/left.png" width={8} height={16} alt="" sizes="" />
            </div>
            <div className="alipay__title">轉賬</div>
          </div>

          <div className="alipay__background">
            <div className="background__">
              <div className="background__image">
                <img src="/alipay/alipay.png" alt="" width={58} />
              </div>
              <div className="background__title">
                已成功轉賬給 {Names.generateRandomFullNameFromHongKong()}
              </div>
              <div className="background__subtitle">已支付</div>
              <div className="background__amount">
                <div className="alipay__currency">HKD</div>
                <div className="alipay__amoutn">
                  {Number.hongkong(props.amount)}
                </div>
              </div>
              <div className="alipay__bar"></div>
              <div className="">
                <div className="alipay__address">
                  <div className="alipaydetail__left">轉賬至</div>
                  <div className="alipaydetail__right">Mox Bank</div>
                </div>
                <div className="inside__bar">
                  <img src="/alipay/bar.png" alt="" />
                </div>
                <div className="alipay__address">
                  <div className="alipaydetail__left">付款方式</div>
                  <div className="alipaydetail__right">
                    上海滙豐銀行有限公司 **** {Number.generateRandom4Number()}
                  </div>
                </div>
                <div className="inside__bar">
                  <img src="/alipay/bar.png" alt="" />
                </div>

                <div className="alipay__address">
                  <div className="alipaydetail__left">手續費</div>
                  <div className="alipaydetail__right">免手續費</div>
                </div>
              </div>
            </div>
          </div>

          <div className="alipay__subfooter">
            <span className="subfooter">請提醒收款人查看賬戶 </span>
          </div>

          <div className="alipay__button">
            <div className="button__1">
              <label htmlFor="">通知好友 </label>
            </div>
            <div className="button__2">
              <label htmlFor="">完成</label>
            </div>
          </div>
        </div>

        <div className="alipy__bottom">
          <img src="/alipay/print.png" alt="" />
          <div className="alipay__footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Alipay;
