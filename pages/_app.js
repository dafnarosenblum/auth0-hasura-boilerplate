import App from "next/app";
import Router from "next/router";
import { Auth0Provider } from "use-auth0-hooks";

const onRedirectCallback = appState => {
  if (appState && appState.returnTo) {
    Router.push({
      pathname: appState.returnTo.pathname,
      query: appState.returnTo.query
    });
  }
};

const onAccessTokenError = (err, options) => {
  console.error("Failed to retrieve access token: ", err);
};

const onLoginError = err => {};

const onRedirecting = () => {
  return (
    <div>
      <h1>Signing you in</h1>
      <p>
        In order to access this page you will need to sign in. Please wait while
        we redirect you to the login page...
      </p>
    </div>
  );
};

class Root extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENT_ID}
        redirectUri={process.env.REDIRECT_URI}
        onLoginError={onLoginError}
        onAccessTokenError={onAccessTokenError}
        onRedirecting={onRedirecting}
        onRedirectCallback={onRedirectCallback}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}

export default Root;
