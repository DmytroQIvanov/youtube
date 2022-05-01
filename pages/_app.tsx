import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import store from "../Store/store";
import { fetchUserThunk } from "../Store/slices/user";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
