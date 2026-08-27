import React, { createContext, FC, PropsWithChildren, useState } from 'react'
import AppwriteService from "./service.ts"

type AppContextType = {
    appwrite: AppwriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppwriteContext = createContext<AppContextType>({
  appwrite: new AppwriteService(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const defaultValue: AppContextType = {
    appwrite: new AppwriteService(),
    isLoggedIn,
    setIsLoggedIn,
  }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

