'use client';

import { User } from "@supabase/supabase-js";
import { createContext, useEffect, useState, useContext } from "react";
import { createClient } from "@/utils/supabase/client";

type UserContextProps = {
  user: User | null,
  loggedIn: boolean,
  login: () => void,
  logout: () => void
}

export const userContext = createContext<UserContextProps>({
  user: null,
  loggedIn: false,
  login: () => null,
  logout: () => null
});

export const UserContextProvider = ({
  children
} : {
  children: React.ReactNode
}) => {

  const [ user, setUser ] = useState<User | null>(null);
  const [ loggedIn, setLoggedIn ] = useState(false);

  const fetchCurUser = async () => {
    const data = await getCurrentUser();
    if (data !== null) {
      setLoggedIn(true);
      setUser(data);
    }
  }

  useEffect(() => {
    fetchCurUser();
  }, [])
  
  const login = () => {
    fetchCurUser()
  }

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  }

  return (
    <userContext.Provider 
      value={{
        user: user,
        loggedIn: loggedIn, 
        login: login, 
        logout: logout
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export function useUserContext() {
  return useContext(userContext);
}


async function getCurrentUser(): Promise<User | null> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user
}