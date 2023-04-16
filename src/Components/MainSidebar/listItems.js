import React, { useState } from "react";
import { ListItem, ListItemButton, ListItemIcon, Toolbar } from "@mui/material";
import { ReactSVG } from "react-svg";
import { SidebarLink } from "./styles";

import logo from "../../Assets/logo.svg";
import cartIcon from "../../Assets/cartIcon.svg";
import HomeiCON from "../../Assets/HomeiCON.svg";
import user from "../../Assets/user.svg";
import Vector1 from "../../Assets/Vector-1.svg";
import Vector2 from "../../Assets/Vector-2.svg";

import "./SideBar.css";

export const MainListItems = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="containerListItens">
      <ListItemButton>
        <ListItemIcon>
          <ReactSVG
            className="iconMenu"
            src={logo}
            style={{ marginLeft: "20px" }}
          />
        </ListItemIcon>
      </ListItemButton>

      <SidebarLink to={"/"}>
        <ListItem
          className={selectedItem === "Dashboard" ? "selectedMenu" : "notSelected"}
          onClick={() => handleItemClick("Dashboard")}
          style={{ marginTop: '50px' }}
        >
          <ListItemIcon>
            <ReactSVG className="iconMenu" src={HomeiCON} />
          </ListItemIcon>
          <div
            className={
              selectedItem === "Dashboard"
                ? "textMenu selectedTextMenu"
                : "textMenu"
            }
          >
            Dashboard
          </div>
        </ListItem>
      </SidebarLink>

      <SidebarLink to={"/"}>
        <ListItem
          className={selectedItem === "Vendas" ? "selectedMenu" : "notSelected"}
          onClick={() => handleItemClick("Vendas")}
        >
          <ListItemIcon>
            <ReactSVG className="iconMenu" src={cartIcon} />
          </ListItemIcon>
          <div
            className={
              selectedItem === "Vendas"
                ? "textMenu selectedTextMenu"
                : "textMenu"
            }
          >
            Vendas
          </div>
        </ListItem>
      </SidebarLink>

      <SidebarLink to={"/"}>
        <ListItem
          className={selectedItem === "Relatórios" ? "selectedMenu" : "notSelected"}
          onClick={() => handleItemClick("Relatórios")}
        >
          <ListItemIcon>
            <ReactSVG className="iconMenu" src={Vector2} />
          </ListItemIcon>
          <div
            className={
              selectedItem === "Relatórios"
                ? "textMenu selectedTextMenu"
                : "textMenu"
            }
          >
            Relatórios
          </div>
        </ListItem>
      </SidebarLink>

      <SidebarLink to={"/"}>
        <ListItem
          className={selectedItem === "Lojas parceiras" ? "selectedMenu" : "notSelected"}
          onClick={() => handleItemClick("Lojas parceiras")}
        >
          <ListItemIcon>
            <ReactSVG className="iconMenu" src={Vector1} />
          </ListItemIcon>
          <div
            className={
              selectedItem === "Lojas parceiras"
                ? "textMenu selectedTextMenu"
                : "textMenu"
            }
          >
            Lojas parceiras
          </div>
        </ListItem>
      </SidebarLink>

      <SidebarLink to={"/"}>
        <ListItem
          className={selectedItem === "Clientes" ? "selectedMenu" : "notSelected"}
          onClick={() => handleItemClick("Clientes")}
        >
          <ListItemIcon>
            <ReactSVG className="iconMenu" src={user} />
          </ListItemIcon>
          <div
            className={
              selectedItem === "Clientes"
                ? "textMenu selectedTextMenu"
                : "textMenu"
            }
          >
            Clientes
          </div>
        </ListItem>
      </SidebarLink>
    </div>
  );
};
