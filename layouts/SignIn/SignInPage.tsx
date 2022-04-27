import React from 'react';
import styles from './SignIn.module.scss'
import Input from "../../component/Input/Input";
import Link from 'next/link'

const SignInPage = () => {
    return (
        <div className={styles.signIn}>
            <div className={styles.signIn_container}>
                <div className={styles.signIn_signInText}>Sign In</div>
                <div className={styles.signIn_signInText2}>to continue to YouTube</div>
                <Input InputType={'login'} text={'Email or phone'} type={'email'} />
                <div className={"google"} style={{color: "#1a73e8"}}>Forgot email?</div>
                <Link href={'/create-account'}>
                    <span style={{color: "#1a73e8"}}>Create account</span></Link>
            </div>

        </div>
    );
};

export default SignInPage;