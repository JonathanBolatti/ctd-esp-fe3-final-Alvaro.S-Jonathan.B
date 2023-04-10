import React from "react";
import { useState } from "react";
import '../index.css';
import PopUp from "./PopUp";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [errorName, setErrorName] = useState("")
const [errorEmail, setErrorEmail] = useState("");
const [show, setShow] = useState(false)

const onChangeName = (event) => setName(event.target.value);
const onChangeEmail = (event) => setEmail(event.target.value);

const validateName = () => {
    if(!name.startsWith(" ") && name.length > 5){
        return true;
    }
}

const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
        return (false)
}

const onHandleSubmit = (e) => {
        e.preventDefault()

const isValidateName = validateName();
const isValidateEmail = validateEmail();
    

    if (!isValidateName) {
        setErrorName("Please check your name again.")
    } else {
        setErrorName("")
        setShow(false)
    }

    if (!isValidateEmail) {
        setErrorEmail("Please check your E-mail again.")
    } else {
        setErrorEmail("")
    setShow(false)
    }

    if (isValidateName && isValidateEmail){
    setShow(true)
    }

}
return (
    <div className="superContainer">
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder="Enter your full name" value={name} onChange={onChangeName}/>
            {errorName ? <div className="error">{errorName}</div> : null}
            <input type="email" placeholder="Enter your E-mail"  value={email} onChange={onChangeEmail}/>
            {errorEmail ? <div className="error">{errorEmail}</div> : null}
            <button type="submit" >Suscribe</button>
        </form>
            {show ? <PopUp userName={name} /> : null}
    </div>
);
};

export default Form;
