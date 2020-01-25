import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AuthContextProvider } from "../context/AuthContext";
import Main from "../components/Main";
import { useAuth } from "use-auth0-hooks";

const Home = () => {
  const { logout, token } = useAuth({ audience: "" });

  if (token) {
    localStorage.setItem("token", token.idToken);
  }

  const handleClick = () => {
    localStorage.removeItem("token");
    logout({ returnTo: "http://localhost:3000" });
  };

  return (
    <AuthContextProvider>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Yo!
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Main />
    </AuthContextProvider>
  );
};

export default Home;
