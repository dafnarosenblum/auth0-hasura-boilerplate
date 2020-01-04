import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Main() {
  const x = useContext(AuthContext);

  return (
    <div style={{ marginTop: "5rem" }}>
      <button
        style={{ margin: "0 1rem" }}
        onClick={() => x.setAuthUser("test context update succeeded")}
      >
        test
      </button>
      authUser.user.permissions["x-hasura-user-id"]: {x.authUser}
      {/* {authUser.user.permissions["x-hasura-user-id"]} */}
    </div>
  );
}
