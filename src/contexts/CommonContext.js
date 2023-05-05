import { createContext, useState } from 'react';

export const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const [state, setState] = useState({ title: '', color: '' });

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <CommonContext.Provider value={{ state, updateState }}>
      {children}
    </CommonContext.Provider>
  );
};
