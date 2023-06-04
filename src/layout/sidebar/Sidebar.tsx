import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
import { FaEraser, FaUndo } from "react-icons/fa";
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

  
  useEffect(() => {
    let data;
  }, [value]);

  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value); 
    let a = Math.floor(100000000000 + Math.random() * 900000000000);


  };

  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> Write the Amount</label>
          <select onClick={change}>
            <option value="200">200</option>
            <option value="800">800</option>
            <option value="1500">1500</option>
            <option value="2500">2500</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor=""> Select bank</label>
          <select
            name="bank"
            className="app__select"
            onChange={(e) => setvalue(e.target.value)}
          >
            {optionBank.map((item) => (
              <option value={item.value}>{item.name} </option>
            ))}
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
