import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [data, setData] = useState(null);
  

  return (
    <AppContext.Provider
      value={{
        data: data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
