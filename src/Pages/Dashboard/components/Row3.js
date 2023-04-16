import React from "react";
import { ReactSVG } from "react-svg";

import icon1 from "../../../Assets/Icon.svg";

import "./Row3.css";

const cards = [
  {
    icon: icon1,
    title: "312.321",
    subtitle: "Cotações realizadas",
    value: "+15,3% (+223)",
  },
  {
    icon: icon1,
    title: "212.012",
    subtitle: "Vendas finalizadas",
    value: "+15,3% (+223)",
  },
  {
    icon: icon1,
    title: "42.021",
    subtitle: "Cotações não concluídas",
    value: "+15,3% (+223)",
  },
  {
    icon: icon1,
    title: "3.122",
    subtitle: "Cotações não respondidas",
    value: "+15,3% (+223)",
  },
];

const Row3 = () => {
  return (
    <div className="containerRow3">
      {cards.map((card, index) => (
        <div key={index} className="containerCard">
          <ReactSVG className="image" src={card.icon} />

          <div>
            <div className="title" style={{ marginBottom: "5px" }}>
              {card.title}
            </div>
            <div className="subtitle">{card.subtitle}</div>
          </div>

          <div className="subtitlPerfil2">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Row3;
