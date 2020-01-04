import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "use-auth0-hooks";

export default function Main() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (user && !authUser) {
      setAuthUser(user);
    }
  });

  return (
    <div style={{ marginTop: "5rem" }}>
      {isLoading
        ? "Loading..."
        : `authUser.user.permissions["x-hasura-user-id"]: ${
            authUser ? authUser.firstName : ""
          }`}
      {/* {authUser.user.permissions["x-hasura-user-id"]} */}
    </div>
  );
}
