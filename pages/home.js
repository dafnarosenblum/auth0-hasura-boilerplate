import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useAuth } from "use-auth0-hooks";

const Home = () => {
  const { logout } = useAuth();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Yo!
        </Typography>
        <Button
          color="inherit"
          onClick={() => logout({ returnTo: "http://localhost:3000" })}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
