import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

export const ContentContainer = ({ children }) => (
  <div>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: "auto",
        paddingTop: 5,
      }}
    >
      <Container maxWidth="100%" sx={{ height: "85vh" }}>
        {children}
      </Container>
    </Box>
  </div>
);
