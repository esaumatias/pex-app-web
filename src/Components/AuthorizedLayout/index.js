import React from "react";
import { Box } from "@mui/system";

import { MainSidebar } from "../MainSidebar";
import { ContentContainer } from "./ContentContainer";

export const AuthorizedLayout = ({ children }) => {
  return (
    <Box style={{ backgroundColor: "#F5F5F5", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <MainSidebar/>
      </div>
      <div style={{ width: '100vw' }}>
        <ContentContainer>{children}</ContentContainer>
      </div>
    </Box>
  );
};
