import React from "react";
import Routers from "./Routers/Routers";
import AppProvider from "./Context/AppProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <AppProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routers />
      </LocalizationProvider>
    </AppProvider>
  );
}

export default App;
