import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import styles from "./Input.module.scss";
import Image from "next/image";
import find from "/public/search.svg";

interface inputProps {
  placeholder?: string;
  classname?: string;
  type?: "header" | "login";
  text?: string;
  img?: boolean;
  onChange?:(text:string)=>{};
}

const Input: React.FC<inputProps> = ({
  placeholder,
  classname,
  type = "header",
  text,
  img,
    onChange,
}) => {

  const [inputState,setInputState] =useState('');
  const [dirty,setDirty] =useState(false);
  useEffect(()=>{
    if(inputState.length>0){
      setDirty(true)
    }else{
      setDirty(false)
    }
  },[inputState])

  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{

    setInputState(event.target.value);
    onChange&&onChange(inputState);
  }
  return (
    <div className={styles[type]}>
      {dirty}
      <input className={styles[type + "_input"]} placeholder={placeholder} onChange={handleChange} />
      {text && <span className={`${styles[type + "_text" ]} ${dirty&&styles[type+'_dirty']}`}>{text}</span>}
      {img && (
        <div className={styles.header_img}>
          <Image src={find} />
        </div>
      )}
    </div>
  );
};

export default Input;
