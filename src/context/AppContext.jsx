import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [collections, setCollections] = useState([]);
  const [files, setFiles] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, setState, collections, setCollections, files, setFiles, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;