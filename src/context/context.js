import { createContext } from 'react';

const context = createContext();

const Provider = ({ children }) => (
  <context.Provider>
    { children }
  </context.Provider>
)

export default Provider;