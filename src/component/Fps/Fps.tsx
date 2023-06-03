import React from "react";
import "./Fps.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";
import { AiOutlineWifi } from "react-icons/ai";
function Fps(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__fps">
      <div className="fps__header">
        <div className="fps__battery">
          <div className="fps__left">
            {" "}
            {Dates.currentTime()}
            <Left />
          </div>
          <div className="fps__right">

          <AiOutlineWifi color="606060" />
            <div className="battery__fps">
              <div className=""></div>
              <div className="data__fps">
                <div className="fps__1"></div>
                <div className="fps__2"></div>
                <div className="fps__3"></div>
                <div className="fps__4"></div>
              </div>
              <label htmlFor="">{limit}%</label>
              <div className="fly3__battery">
                <div className="top__fly3"></div>
                <div className="battery__fly3">
                  <div
                    className="level__fly3"
                    style={{ height: `${limit}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fps__transfer">
          <div>
            <img src="/fps/close.png" alt="" width={14} />
          </div>
          <div className="fps__title">FPS Transfer</div>
          <div>
            <img src="/fps/more.png" alt="" width={20} />
          </div>
        </div>
      </div>
      <div className="fps__content">
        <div className="content__header">
          Long press to save to device album
        </div>

        <div className="content__background">
          <div className="top__header">
            <div className="background__successful">
              Instant transfer successful
            </div>
            <div className="successfull__message">
              <span>This e-record is for reference only. Please</span>
              <span>check actual account entry at the receiving</span>
              <span>institution.</span>
            </div>
          </div>

          <div className="bar__dashed"></div>

          <div className="content__detaill">
            <div className="detail__amount">
              <label htmlFor="" className="amount__label">
                Amount
              </label>

              <div className="amount__">
                <div className="amount__currency">HK</div>
                <div className="currency__">$</div>
                <div className="amount">{Number.hongkong(props.amount)}</div>
              </div>
            </div>

            <div className="detaill__payment">
              <div className="payee__name">
                <div className="payment__left">Payee name</div>
                <div className="payment__right">
       <div>{Names.generateRandomFullName()}</div>
                </div>
              </div>

              <div className="payee__name">
                <div className="payment__left">Transfer to</div>
                <div className="payment__right __transfer">
                  <div>Ping An OneConnect</div>
                  <div className="__gap4px">Bank (Hong Kong)</div>
                  <div className="__gap8px">Limited</div>
                </div>
              </div>

              <div className="payee__name">
                <div className="payment__left">FPS Identifier</div>
                <div className="payment__right">
                  <div>105762967</div>
                </div>
              </div>

              <div className="payee__name">
                <div className="payment__left">Transfer No.</div>
                <div className="payment__right __transfereno">
                  <div>
                    200{Dates.generateRandomDateNumber()}
                    {Number.generateRandom8Number()}
                  </div>
                  <div>80791</div>
                </div>
              </div>

              <div className="payee__name">
                <div className="payment__left">Time</div>
                <div className="payment__right">
                  <div>{Dates.datetime()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bar__dashed"></div>

          <div className="payment__qrcdoe">
            <div className="qrcode__message">
              <span>Safe and fast WeChat Pay HK</span>
              <span>transfers</span>
            </div>
            <div>
              <img src="/fps/qrcode.png" width={56} height={56} />
            </div>
          </div>
        </div>
      </div>

      <div className="fps__footer">
        <img src="/fps/bottom__phone.png" alt="" width={213} />
      </div>
    </div>
  );
}

export default Fps;
