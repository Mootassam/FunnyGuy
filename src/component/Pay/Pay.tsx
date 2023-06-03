import React from "react";
import "./Pay.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import { AiOutlineWifi } from "react-icons/ai";
import Left from "../../shared/icons/Left";
import Names from "../../shared/Names";
function Pay(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__pay">
      <div className="pay__header">
        <div className="pay__left">
          <div className="pay__time">
            {Dates.currentTime()}

            <Left />
          </div>
        </div>
        <div className="pay__rights">
          <AiOutlineWifi color="606060" />

          <div className="pay__data">
            <div className="pay1__"></div>
            <div className="pay2__"></div>
            <div className="pay3__"></div>
            <div className="pay4__"></div>
          </div>

          <div className="pay__battery">
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

      <div className="sub__header">
        <div className="button__back">
          <img src="/pay/back.png" alt="" width={18} />
        </div>
        <div className="button__casque">
          <img src="/pay/casque.png" alt="" width={18} />
        </div>
      </div>

      <div className="pay__content">
        <div className="pay__amount">
          <div className="pay__currency">-HKD</div>
          <div className="pay__totlaamount">{props.amount}</div>
          <div className="pay__rest">.00</div>
        </div>
        <div className="pay__reference">
          Reference no.23079{Number.generateRandom8Number()}
        </div>

        <div className="pay__message">
          <div className="message__circle">
            <img src="/pay/check.png" alt="" width={9} />
          </div>
          <div className="message__detail">
            <span>Payment has been successfully </span>
            <span>transferred to the payee</span>
          </div>
        </div>
      </div>

      <div className="pay__from">
        <div className="pay__account">
          <span>From/to account</span>
        </div>

        <div className="pay__detail">
          <div>
            <div className="detaill__payleft">Transaction type</div>
            <div className="detaill__payright __third">
              Third Party Transfer(Pay)
            </div>
          </div>
          <div>
            <div className="detaill__payleft">From</div>
            <div className="detaill__payright __from ">
              <span>
                <label htmlFor="">STEENBERGEN</label>
                <label htmlFor="">G*******</label>
                <label htmlFor="">R*****</label>
              </span>
              <span className="pay__grey">HKD Saving</span>
              <span className="pay__grey">012***892</span>
            </div>
          </div>
          <div>
            <div className="detaill__payleft">To</div>
            <div className="detaill__payright __to">
              <span>{Names.generateRandomFullName()}</span>
              <span className="pay__grey">
                10543{Number.generateRandom4Number()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pay__from __small">
        <div className="pay__account">
          <span>Transfer details</span>
        </div>
      </div>

      <div className="pay__button">
        <div className="button__transfer">
          <span>Transfer again </span>
        </div>

        <div className="button__save">
          <span>Save</span>
        </div>
      </div>

      <div className="pay__bottom">
        <img src="/pay/mobile.png" alt="" width={210} />
      </div>
    </div>
  );
}

export default Pay;
