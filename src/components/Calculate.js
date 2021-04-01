import React, { useState } from "react";
import "./Calculate.css";
import { RiBankFill, RiBankLine } from "react-icons/ri";

const Calculate = () => {
  // e.preventDefault();
  const [rate, setRate] = useState("");
  const [charge, setCharge] = useState("");
  const [tola, setTola] = useState("");
  const [aana, setAana] = useState("");
  const [ratti, setRatti] = useState("");

  const CalculateBudget = () => {
    let tolaValue = rate * tola;
    let annaValue = (rate / 16) * aana;
    let rattiValue = (rate / 16 / 6) * ratti;
    let chargeValue = parseInt(charge) || 0;
    let total = tolaValue + annaValue + rattiValue + chargeValue;
    return total;
  };

  return (
    <>
      <div className="heading">
        <h2>
          <RiBankLine /> Check Your Budget <RiBankLine />
        </h2>
      </div>
      <div className="container">
        <div className="display">
          <div className="inner-dis">
            <p>Display Rate : {rate}</p>
          </div>
          <div className="inner-dis">
            <p>Display Labour Charge : {charge}</p>
          </div>
          <div className="inner-dis">
            <p>Display Weight in Tola : {tola}</p>
          </div>
          <div className="inner-dis">
            <p>Display Weight in Aana : {aana}</p>
          </div>
          <div className="inner-dis">
            <p>Display Weight in Ratti: {ratti}</p>
          </div>
          <div className="inner-dis">
            <h2>
              Total Expense: {CalculateBudget()}
              <span style={{ color: "#00005f" }}> Rs</span>
            </h2>
          </div>
        </div>
        <form className="form">
          <label>Rate</label>
          <input
            type="number"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            placeholder="Enter Rate"
          />

          <label>Tola</label>
          <input
            type="number"
            value={tola}
            onChange={(event) => setTola(event.target.value)}
            placeholder="Enter weight in tola"
          />
          <label>Aana</label>
          <input
            type="number"
            value={aana}
            onChange={(event) => setAana(event.target.value)}
            placeholder="Enter weight in anna"
          />
          <label>Ratti</label>
          <input
            type="number"
            value={ratti}
            onChange={(event) => setRatti(event.target.value)}
            placeholder="Enter weight in ratti"
          />
          <label>Labour Charge</label>
          <input
            type="number"
            value={charge}
            onChange={(event) => setCharge(event.target.value)}
            placeholder="Enter Charge"
          />
          <h2>Total: {CalculateBudget()} Rs</h2>
        </form>
      </div>
      <div className="info">
        <p>
          यहाँ आप अपने बजट की जाँच कर सकते हैं, खरीदने के लिए सोने का वजन डालकर।
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          magni quis amet nesciunt repellat aut iste alias ipsa odit animi
          aliquam corporis, libero quam? Quaerat, ab? Sunt, doloremque. Libero,
          saepe.
        </p>
      </div>
      <div className="image">
        <img src="../assets/phonchi.jpg" rel="demo" />
      </div>
    </>
  );
};
export default Calculate;
