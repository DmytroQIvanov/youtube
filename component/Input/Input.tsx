import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import styles from "./Input.module.scss";
import Image from "next/image";
import find from "/public/search.svg";

interface inputProps {
  placeholder?: string;
  classname?: string;
  InputType?: "header" | "login";
  type?:'password' | 'email';
  text?: string;
  img?: boolean;
  onChange?:(text:string)=>{};
  error?: string;
}

const Input: React.FC<inputProps> = ({
  placeholder,
  classname,
  InputType = "header",

  text,
  img,
    onChange,
    error,
    type
}) => {

  const [inputState,setInputState] =useState('');
  const [dirty,setDirty] =useState(false);
  useEffect(()=>{
    setDirty(false)
    if(inputState.length>0)
      setDirty(true)
  },[inputState])

  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setInputState(event.target.value);
    onChange&&onChange(inputState);
  }
  return (
      <div>
    <div className={styles[InputType]}>
      {dirty}
      <input className={styles[InputType + "_input"]} placeholder={placeholder} onChange={handleChange} type={type} />
      {text && <span className={`${styles[InputType + "_text" ]} ${dirty&&styles[InputType+'_dirty']}`}>{text}</span>}
      {img && (
        <div className={styles.header_img}>
          <Image src={find} />
        </div>
      )}
    </div>
        <span className={styles[InputType+`_error${error?'_active':''}`]}>{error}ssssssss</span>
      </div>
  );
};

export default Input;
