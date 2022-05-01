import React, { useState } from "react";
import Input from "../../component/Input/Input";
import styles from "./CreateAccountLayout.module.scss";
import { useCreateAccountController } from "./CreateAccount.controller";
import { Form, Formik } from "formik";
import Span from "../../component/span/Span";
import { useDispatch } from "react-redux";
import { fetchUserSignInThunk } from "../../Store/slices/user";

const CreateAccountLayout = () => {
  const { onSubmit } = useCreateAccountController();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.createAccountLayout}>
      <div className={styles.createAccountLayout_container}>
        <div className={styles.createAccountLayout_container_names}>
          <Input
            InputType={"login"}
            text={"First name"}
            name={"email"}
            onChange={(text) => setFirstName(text)}
          />
          <Input
            InputType={"login"}
            text={"Last name"}
            name={"password"}
            onChange={(text) => setLastName(text)}
          />
          {email}
        </div>
        <div>
          <Input
            InputType={"login"}
            text={"Your email address"}
            onChange={(text) => setEmail(text)}
          />
        </div>
        <div className={styles.createAccountLayout_container_names}>
          <Input
            InputType={"login"}
            text={"Password"}
            onChange={(text) => setPassword(text)}
          />
          <Input InputType={"login"} text={"Confirm"} />
        </div>
        <button
          onClick={() =>
            dispatch(
              fetchUserSignInThunk({ firstName, lastName, email, password })
            )
          }
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CreateAccountLayout;
