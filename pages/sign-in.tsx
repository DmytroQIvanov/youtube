import React from "react";
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import SignInPage from "../layouts/SignIn/SignInPage";
import { Provider } from "react-redux";
import store from "../Store/store";

const SignIn = () => {
  return (
    <WrapperComponent title={"Sign in"}>
      <Provider store={store}>
        <div>
          <SignInPage />
        </div>
      </Provider>
    </WrapperComponent>
  );
};

export default SignIn;
