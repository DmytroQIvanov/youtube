import React from 'react';
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import SignInPage from '../layouts/SignIn/SignInPage'

const SignIn = () => {
    return (
        <WrapperComponent title={'Sign in'}>
        <div>
            <SignInPage/>
        </div>
        </WrapperComponent>
    );
};

export default SignIn;