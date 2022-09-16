import { useState } from 'react';
import MyContext from './MyContext';

function GlobalProvider({ children }) {
  const [theme, setTheme] = useState([true]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default GlobalProvider;