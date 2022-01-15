import React, {useContext, useState} from 'react';

const DataContext = React.createContext();

export const useProvider = () => {
  return useContext(DataContext);
};

export const DataProvider = ({children}) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const value = {
    isScrolling,
    setIsScrolling
  }


  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
