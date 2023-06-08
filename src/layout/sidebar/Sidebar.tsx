import React, { useEffect, useState } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
import { FaEraser, FaUndo } from "react-icons/fa";
import CheckAmoutn from "../../utils/CheckAmount";
import OptionAmount from "../../data/OptionAmount";
function Sidebar({
  screenshot,
  value,
  setvalue,
  setAmount,
  setSize,
  size,
  undo,
  erase,
  color,
  changeColor,
  brushSize,
  changeBrushSize,
  clear,
}) {
  const [amount, setamount] = useState(200);
  const [listamount, setlistamount] = useState([200]);
  const [bank, setbank] = useState("orange");
  const updateAmount = () => {
    if (bank === "redCross") {
      setlistamount([200, 800]);
    } else {
      setlistamount([200, 800, 1500, 2500]);
    }
  };
  useEffect(() => {
    updateAmount();
  }, [value, bank]);

  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    setamount(event.target.value);
    let a = Math.floor(100000000000 + Math.random() * 900000000000);
  };

  const choosebank = (e) => {
    setvalue(e.target.value);
    setbank(e.target.value);
  };

  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> Choose the Amount</label>
          <select onClick={change}>
            {listamount.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form__group">
          <label htmlFor=""> Select bank</label>
          <select name="bank" className="app__select" onChange={choosebank}>
            {optionBank.map(
              (item, index) =>
                CheckAmoutn.checkAmount(amount, item.value) && (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                )
            )}
          </select>
        </div>

    

        {value === "800" && (
          <div className="form__group">
            <label htmlFor=""> Select Size</label>
            <select
              name="bank"
              className="app__select"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="large">Large</option>
            </select>
          </div>
        )}
      </div>
      <div className="app__screenshot" onClick={() => screenshot()}>
        <img src="/sidebar/screenshot.png" alt="" width={80} />
      </div>
    </div>
  );
}

export default Sidebar;
