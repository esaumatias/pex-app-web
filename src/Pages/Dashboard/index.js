import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { AuthorizedLayout } from "../../Components/AuthorizedLayout";

import Vector2 from "../../Assets/Vector.svg";
import atencao from "../../Assets/atencao.svg";
import darkIcon from "../../Assets/darkIcon.svg";
import Search from "../../Assets/Search Icon.svg";
import Avatar from "../../Assets/Avatar.svg";
import sinoIcon from "../../Assets/sinoIcon.svg";

import Column1 from './components/Column1';
import Column2 from './components/Column2';

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <AuthorizedLayout>
      <div className="containerSearch">
        <div className="containerLeft">
          <ReactSVG className="iconFilter" src={Search} />
          <input type="text" placeholder="Buscar" />
        </div>

        <div className="containerRight">
          <ReactSVG className="iconFilter" src={sinoIcon} />
          <ReactSVG className="iconFilter" src={darkIcon} />
          <ReactSVG className="iconFilter" src={atencao} />
          <ReactSVG className="iconFilter" src={Avatar} />
        </div>
      </div>
      <div className="subtitle" style={{ marginBottom: 10 }}>
        Principal / Dashboard
      </div>
      <div className="title">Velty Dashboard</div>

      <div className="containerFilter">
        <div className="subtitle">Filtrar por data</div>
        <div className="containerDate">
          <ReactSVG className="iconFilter" src={Vector2} />
          <div className="subtitle" style={{ colo: "#8F9BBA" }}>
            Data Inicial
          </div>
        </div>
        <div className="containerDate">
          <ReactSVG className="iconFilter" src={Vector2} />
          <div className="subtitle" style={{ colo: "#8F9BBA" }}>
            Data Final
          </div>
        </div>
      </div>

      <div className="containerInfo">
        <div style={{ flex: 1}}>
          <Column1 />
        </div>

        <div style={{ flex: 1}}></div>
          <Column2 />
        <div style={{ flex: 1}}></div>

        <div style={{ flex: 1}}></div>
      </div>
    </AuthorizedLayout>
  );
};

export default Dashboard;
