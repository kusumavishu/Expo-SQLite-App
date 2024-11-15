import React, { createContext, useState } from "react";

export const userData = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const handleFunction = (details) => {
    setData(details);
  };
  return (
    <userData.Provider value={{ data, handleFunction }}>
      {children}
    </userData.Provider>
  );
};
