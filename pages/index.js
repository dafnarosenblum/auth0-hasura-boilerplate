import React from "react";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useAuth } from "use-auth0-hooks";

const Index = () => {
  const { login } = useAuth();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Yo!
          </Typography>
          <Button
            color="inherit"
            onClick={() => login({ returnTo: "http://localhost:3000/home" })}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Index;
