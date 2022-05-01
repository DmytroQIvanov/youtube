import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.scss";
import Input from "../../component/Input/Input";
import Link from "next/link";
import Span from "../../component/span/Span";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchUserLoginThunk } from "../../Store/features/user";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [emailSelected, setEmailSelected] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordSelected, setPasswordSelected] = useState(false);

  const userBoolean = useSelector((state: any) => state.user.status.user);
  const userBoolean2 = useSelector((state: any) => state.login.status.user);
  const loading = useSelector((state: any) => state.login.status.loading);
  const router = useRouter();
  useEffect(() => {
    console.log("effect");
    if ((userBoolean && !loading) || (userBoolean2 && !loading)) {
      console.log("push");
      router.push("/");
    }
  }, [loading, userBoolean, userBoolean2]);
  const error = useSelector((state: any) => state.login.status?.error?.boolean);

  const dispatch = useDispatch();
  const nextFunction = () => {
    if (!emailSelected) {
      setEmailSelected(true);
      return;
    }
    if (!passwordSelected) {
      setPasswordSelected(true);
    }
    dispatch(fetchUserLoginThunk({ email, password }));
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.signIn_container}>
        {emailSelected && (
          <span
            className={"position-absolute top-10 start-10 google "}
            onClick={() => setEmailSelected(false)}
          >
            Back
          </span>
        )}
        <div className={styles.signIn_signInText}>Sign In</div>
        <div className={styles.signIn_signInText2}>to continue to YouTube</div>

        <div className={"mt-1"}>
          {!emailSelected ? (
            <Input
              InputType={"login"}
              text={"Email or phone"}
              type={"email"}
              onChange={(text) => setEmail(text)}
            />
          ) : (
            <Input
              type={"password"}
              text={"Password"}
              InputType={"login"}
              onChange={(text) => setPassword(text)}
            />
          )}
        </div>
        <div className={"mt-5 "}>
          <Span
            text={"Create account"}
            type={"blue"}
            link={"/create-account"}
          />
        </div>
        <button
          className={"btn btn-primary "}
          onClick={nextFunction}
          disabled={loading}
        >
          {loading ? <>Loading...</> : !emailSelected ? <>Next</> : <>Login</>}
        </button>
        <Span text={"Forgot email?"} type={"blue"} link={"/create-account"} />
      </div>
    </div>
  );
};

export default SignInPage;
