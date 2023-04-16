import React from "react";
import { ReactSVG } from "react-svg";

import icon1 from "../../../Assets/Icon.svg";

import "./Column1.css";

const cards = [
  {
    icon: icon1,
    title: 'R$ 312.321,00',
    subtitle: 'Receita total',
    bgColor: '#EC7A7A',
    value: 'R$ 67,20',
    valueSubtitle: 'Média por cliente',
  },
  {
    icon: icon1,
    title: 'R$ 74.421,00',
    subtitle: 'Número de vendas',
    bgColor: '#7A85EC',
    value: 'R$ 42,30',
    valueSubtitle: 'Média por cliente',
  },
  {
    icon: icon1,
    title: 'R$ 3,12',
    subtitle: 'Lucro por venda',
    bgColor: '#65D5AC',
    value: 'R$ 12,40',
    valueSubtitle: 'Média por cliente',
  },
  {
    icon: null,
    title: null,
    subtitle: null,
    bgColor: null,
    value: null,
    valueSubtitle: null,
  }
];


const Column1 = () => {
  return (
    <div className="containerColumn1">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`containerCard ${index === 2 ? 'end' : (index === 1 ? 'center' : '')}`}
          style={{ backgroundColor: card.bgColor, flex: index === 3 && 1 }}
        >
          {card.icon && <ReactSVG className="image" src={card.icon} />}
          {card.title && (
            <div>
              <div className="title" style={{ marginBottom: "10px" }}>
                {card.title}
              </div>
              <div className="subtitle">{card.subtitle}</div>
            </div>
          )}
          <div className="line"></div>
          {card.value && (
            <div>
              <div className="title" style={{ fontSize: "24px" }}>
                {card.value}
              </div>
              <div className="subtitle" style={{ fontSize: "14px" }}>
                {card.valueSubtitle}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default Column1;
