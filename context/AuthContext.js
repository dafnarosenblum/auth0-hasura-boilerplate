import React, { useState } from "react";

export const AuthContext = React.createContext({
  authUser: null,
  setAuthUser: () => {}
});

export const AuthContextProvider = props => {
  const setAuthUser = authUser => {
    setState({
      ...state,
      authUser: {
        firstName: authUser.given_name,
        lastName: authUser.family_name,
        picture: authUser.picture,
        permissions: {
          role:
            authUser["https://hasura.io/jwt/claims"]["x-hasura-default-role"],
          id: authUser["https://hasura.io/jwt/claims"]["x-hasura-user-id"]
        }
      }
    });
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
