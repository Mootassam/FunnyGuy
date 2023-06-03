import React from "react";
import "./thanks.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Thankyou(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;
  return (
    <div className="app__thankyou">
      <div className="thankyou__header">
        <div className="header__battery">
          <div className="left__">{Dates.currentTime()}</div>
          <div className="right__">
            <div className="right__data"></div>
            <div className="data__cnx">
              <div className="cnx__1"></div>
              <div className="cnx__2"></div>
              <div className="cnx__3"></div>
              <div className="cnx__4"></div>
            </div>
            <div className="name__datas">{Names.generateRandomSignal()}</div>
            <div className="right__battery">
              <div className="thank__battery">
                <div className="battery__level" style={{ width :`${limit}%`}}></div>
                <span className="battery__text">{limit} </span>
              </div>
              <div className="small__"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__confirmation">
        <div className="confitmation__close">
          <img src="/thank/close.png" alt="" width={14} height={14} />
        </div>
        <div className="confirmation__name">Confirmation</div>
      </div>

      <img src="/thank/bar.png" alt="" />

      <div className="thankyou__content">
        <div className="thankyou__circle">
          <img src="/thank/thank.png" alt="" width={26.5} height={21.46} />
        </div>
        <div className="thankyou__text">Thank you</div>

        <div className="thankyou__detaill">
          Your transfer has successfully gone through.
        </div>
      </div>

      <div className="thankyou__address">
        <div className="thankyou__from">
          <div className="address__left">From</div>
          <div className="address__right">
            <div>HSBC One HKD Savings</div>
            <div>831-602537- 833</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />

        <div className="thankyou__to">
          <div className="address__left">To</div>
          <div className="address__right">
            <div>{Names.generateRandomFullName()}</div>
            <div>FPS ID: 105430979</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />

        <div className="thankyou__amount">
          <div className="address__left">Amount</div>
          <div className="address__right _amount">
            <div>{Number.hongkong(props.amount)}</div>
            <div>HKD</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />
        <div className="thankyou__amount">
          <div className="address__left">Fees</div>
          <div className="address__right _amount">
            <div>Waived</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />
        <div className="thankyou__amount">
          <div className="address__left">Transfer date</div>
          <div className="address__right _amount">
            <div>Now</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />
        <div className="thankyou__amount">
          <div className="address__left">Reference number</div>
          <div className="address__right _amount">
            <div>N31{Number.generateRandom9Number()}</div>
          </div>
        </div>

        <img src="/thank/smallbar.png" />

        <div className="thankyou__amount __thank__date">
          <div className="address__left">Date and time</div>
          <div className="address__right">
            <div>{Dates.datethank()}</div>
            <div>{Dates.currentTime()} HKT</div>
          </div>
        </div>
      </div>
      <div className="important__information">
        <span className="information__"> important information</span>
      </div>

      <div className="service__important">
        Service fees and processing time are subject to variation at
      </div>

      <div className="button__tranfer">
        <div className="service__transfer">
          <span className="transfer__text">Make another transfer</span>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
