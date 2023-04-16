import React from "react";

import "./Column2.css";

const data = [
  {
    title: "Clientes ativos",
    value: "3.312",
    porcen: "+2,6% (+12)",
  },
  {
    title: "Novos clientes",
    value: "12",
    porcen: "+15,3% (+2)",
  },
  {
    title: "Clientes adicionados",
    value: "42",
    porcen: "+42,6% (+8)",
  },
  {
    title: "LTV",
    value: "R$ 142,32",
    porcen: "-22,6% (+R$ 12,20)",
  },
  {
    title: "Turnover",
    value: "24,3%",
    porcen: "+42,6% (+3)",
  },
  {
    title: "Turnover recuperado",
    value: "54,42%",
    porcen: "+32,6% (+6)",
  },
];

const Column2 = () => {
  return (
    <div className="containerColumn2">
      {data.map((item, idx) => (
        <div className="containerCard" key={idx}>
          <div className="subtitle">{item.title}</div>
          <div className="title" style={{ marginBottom: "10px" }}>
            {item.value}
          </div>
          <div
            className="subtitlePerfil2"
            style={{
              fontSize: "14px",
              color: item.porcen === "-22,6% (+R$ 12,20)" && "#CD0505",
            }}
          >
            {item.porcen}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Column2;
