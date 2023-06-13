import React from "react";
import "./Thank.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
import Left from "../../shared/icons/Left";
import { MdBluetoothConnected } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
function Thank(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }

    if (limit >= 40) {
      background = "#fff";
    }

    return background;
  };
  return (
    <div className="app__thank">
      <div className="thank__bg">
        <div className="bg__time">
          {Dates.currentTime()}
          <Left />
        </div>
        <div className="bg__right">
          <div className="cnx__white">
            <MdBluetoothConnected color="white" size={13} />
            <AiOutlineWifi color="white" size={15} />
            <div className="data__thank">
              <div className="__thank1"></div>
              <div className="__thank2"></div>
              <div className="__thank3"></div>
              <div className="__thank4"></div>
              <div className="__thank5"></div>
            </div>
          </div>

          <div className="battery__">
            <label htmlFor="">{limit}%</label>

            <div className="thank__batter">
              <div className="border__top"></div>
              <div className="thank__battery">
                <div
                  className="level__thank"
                  style={{
                    height: `${limit}%`,
                    background: CheckstatusBattery(),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thank__subheader">
        <div className="confirmation">
          <img src="/thank/closec.png" alt="" width={15} />
          <label htmlFor="">Confirmation</label>
        </div>
      </div>

      <div className="thank__content">
        <div className="thank__circle">
          <img src="/thank/checks.png" alt="" width={27} />
        </div>
        <div className="thank__message">Thank you</div>
        <div className="thank__text">
          <span> Your transfer has successfully gone </span>

          <span> through.</span>
        </div>
      </div>

      <div className="thank__detail">
        <div className="thanks__from">
          <div className="thank__from">From</div>
          <div className="thank__right">
            <span>HSBC One HKD Savings</span>
            <span>592-21{Number.generate4RandomNumber()}-{Number.generate3RandomNumber()}</span>
           
          </div>
        </div>

        <div className="thanks__to">
          <div className="thank__to">To</div>
          <div className="thank__right">
            <span>Hong kong red cross</span>
            <span> 024-HANG SENG BANK</span>
            <span> LIMITED</span>
            <span>388553950001</span>
          </div>
        </div>

        <div className="thanks__amount">
          <div className="thank__to">Amount</div>
          <div className="thank__amount">
            {Number.hongkong(props.amount)} HKD
          </div>
        </div>

        <div className="thanks__fee">
          <div className="thank__to">Fees</div>
          <div className="thank__right">
            <span>Waived</span>
          </div>
        </div>

        <div className="thanks__date">
          <div className="thank__to">Transfer date</div>
          <div className="thank__right">
            <span>Now</span>
          </div>
        </div>

        <div className="thank__reference">
          <div className="thank__to">Reference number</div>
          <div className="thank__right">
            <label className="number__right">
              N315768{Number.generate4RandomNumber()}
            </label>
          </div>
        </div>
        <div className="thank__date">
          <div className="thank__to">Date and time </div>
          <div className="thank__right">
            <span className="date__mar">{Dates.getCurrentDate()}</span>
            <span className="time__mar">{Dates.currentTime()} HKT</span>
          </div>
        </div>
      </div>

      <div className="thank__bottom">
        <img src="/thank/bartop.png" alt="" />
        <div className="bottom__another">
          <div className="button__another">
            <label htmlFor="">Make another transfer</label>
          </div>
        </div>
        <div className="bottom__menue">
          <img src="/thank/barthank.png" alt="" />

          <div className="detail__menues">
            <div>
              <img src="/thank/home.png" alt="" width={21} />
              <label htmlFor="">Home</label>
            </div>
            <div>
              <img src="/thank/investement.png" alt="" width={23} />
              <label htmlFor="">Investment</label>
            </div>
            <div>
              <img src="/thank/Transfere.png" alt="" width={21} />
              <label htmlFor="">Pay & Transfer</label>
            </div>
            <div>
              <img src="/thank/budget.png" alt="" width={21} />
              <label htmlFor="">Budget</label>
            </div>
            <div>
              <img src="/thank/support.png" alt="" width={21} />
              <label htmlFor="">Support</label>
            </div>
          </div>
        </div>
        <div className="bottom__mobile">
          <img src="/thank/moo.png" alt="" width={219} />
        </div>
      </div>
    </div>
  );
}

export default Thank;
