import React from 'react';
import Layout404 from "../layouts/Page404/Layout404";
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import CreateAccountLayout from "../layouts/CreateAccount/CreateAccount";

const CreateAccount = () => {
    return (
        <WrapperComponent title={'Create account'}>
<CreateAccountLayout/>
        </WrapperComponent>
    );
};

export default CreateAccount;