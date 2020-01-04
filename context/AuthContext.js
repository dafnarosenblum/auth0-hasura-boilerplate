import React, { useState } from "react";

export const AuthContext = React.createContext({
  authUser: null,
  setAuthUser: () => {}
});

export const AuthContextProvider = props => {
  const setAuthUser = authUser => {
    setState({ ...state, authUser: authUser });
  };

  const initState = {
    authUser: null,
    setAuthUser: setAuthUser
  };

  const [state, setState] = useState(initState);

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};
