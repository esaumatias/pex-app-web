import React from "react";
import { ReactSVG } from "react-svg";

import icon1 from "../../../Assets/Icon.svg";

import "./Column1.css";

const Column1 = () => {
  return (
    <div className="containerColumn1">
      <div className="containerCard" style={{ backgroundColor: "#EC7A7A" }}>
        <ReactSVG className="image" src={icon1} />
        <div>
          <div className="title" style={{ marginBottom: "10px" }}>
            R$ 312.321,00
          </div>
          <div className="subtitle">Receita total</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="title" style={{ fontSize: "24px" }}>
            R$ 67,20
          </div>
          <div className="subtitle" style={{ fontSize: "14px" }}>
            Média por cliente
          </div>
        </div>
      </div>

      <div className="containerCard center" style={{ backgroundColor: "#7A85EC" }}>
        <ReactSVG className="image" src={icon1} />
        <div>
          <div className="title" style={{ marginBottom: "10px" }}>
            R$ 74.421,00
          </div>
          <div className="subtitle">R$ 74.421,00</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="title" style={{ fontSize: "24px" }}>
            R$ 42,30
          </div>
          <div className="subtitle" style={{ fontSize: "14px" }}>
            Média por cliente
          </div>
        </div>
      </div>

      <div className="containerCard end" style={{ backgroundColor: "#65D5AC" }}>
        <ReactSVG className="image" src={icon1} />
        <div>
          <div className="title" style={{ marginBottom: "10px" }}>
            R$ 3,12
          </div>
          <div className="subtitle">Lucro por venda</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="title" style={{ fontSize: "24px" }}>
            R$ 12,40
          </div>
          <div className="subtitle" style={{ fontSize: "14px" }}>
            Média por cliente
          </div>
        </div>
      </div>

      <div className="containerCard" style={{ flex: 1 }}></div>
    </div>
  );
};

export default Column1;
