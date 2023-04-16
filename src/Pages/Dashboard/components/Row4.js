import React from "react";
import { ReactSVG } from "react-svg";

import icon1 from "../../../Assets/Icon.svg";

import "./Row4.css";

const cards = [
  {
    title: "Planos",
    subtitle: "123 planos ativos",
    data: [
      { clube: "Estagiários", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "Diretoria", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "Geral", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "Almoxarifado", clients: "312 clientes", value: "R$ 123,90" },
    ],
  },
  {
    title: "Planos",
    subtitle: "123 planos ativos",
    data: [
      { clube: "6 vendas", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "12 vendas", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "24 vendas", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "Personalizado", clients: "312 clientes", value: "R$ 123,90" },
    ],
  },
  {
    title: "Planos",
    subtitle: "123 planos ativos",
    data: [
      { clube: "Construtoras", clients: "312 clientes", value: "R$ 123,90" },
      { clube: "Clientes finais", clients: "312 clientes", value: "R$ 123,90" },
    ],
  },
];

const Row4 = () => {
  return (
    <div className="containerRow4">
      {cards.map((card, index) => (
        <div key={index} className="containerCard">
          <div>
            <div className="title" style={{ marginBottom: "5px" }}>
              {card.title}
            </div>
            <div className="subtitle">{card.subtitle}</div>
          </div>

          <div className="containerInfo">
            <div>
              <div className="titleTable">CLUBE</div>
              <div className="title" style={{ fontSize: '14px', margin: '10px 0' }}>
                {card.data.map((item, index) => (
                  <div key={index} style={{ marginTop: '10px'}}>{item.clube}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="titleTable">CLIENTES</div>
              <div className="title" style={{ fontSize: '14px', margin: '10px 0' }}>
                {card.data.map((item, index) => (
                  <div key={index} style={{ marginTop: '10px'}}>{item.clients}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="titleTable">PREÇO</div>
              <div className="title" style={{ fontSize: '14px', margin: '10px 0' }}>
                {card.data.map((item, index) => (
                  <div key={index} style={{ marginTop: '10px'}}>{item.value}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Row4;
