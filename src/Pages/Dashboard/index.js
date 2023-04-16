import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { AuthorizedLayout } from "../../Components/AuthorizedLayout";

import Vector2 from "../../Assets/Vector.svg";

import "./Dashboard.css";


const Dashboard = () => {

  return (
    <AuthorizedLayout>
      <div className="subtitle" style={{ marginBottom: 10 }}>
        Principal / Dashboard
      </div>
      <div className="title">Velty Dashboard</div>

      <div className="containerFilter">
        <div>Filtrar por data</div>
        <div className="containerDate">
          <ReactSVG
            className="iconFilter"
            src={Vector2}
          />
          <div className="subtitle" style={{ colo: '#8F9BBA'}}>Data Inicial</div>
        </div>
        <div className="containerDate">
          <ReactSVG
            className="iconFilter"
            src={Vector2}
          />
          <div className="subtitle" style={{ colo: '#8F9BBA'}}>Data Final</div>
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default Dashboard;
