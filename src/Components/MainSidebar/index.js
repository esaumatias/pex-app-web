import React from "react";
import { List, Toolbar, Box } from "@mui/material";

import { MainListItems } from "./listItems";

import './SideBar.css';

export const MainSidebar = () => {
  return (
    <div className='containerSideBar'>
      <Box className='marginLeftSideBar'>
        <List>
          <MainListItems />
        </List>
      </Box>
    </div>
  );
};
