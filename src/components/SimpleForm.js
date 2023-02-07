import React from "react";
import style from "./SimpleForm.module.css";

import useForm from "./use-form";

function SimpleForm() {

  let {
    someThingValid:firstNameValid,
    someThingEntered:firstNameEntered, isSomeThingValid:isFirstNameValid, blurHandler:firstNameBlurHandler, changeHandler:firstNameChangeHandler, reset:firstNameReset} = useForm((d)=>d.trim()!=="")

  let {
    someThingValid: lastNameValid,
    someThingEntered: lastNameEntered,
    isSomeThingValid: isLastNameValid,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useForm((d) => d.trim() !== "");


  let {
    someThingValid: emailValid,
    someThingEntered: emailEntered,
    isSomeThingValid: isEmailValid,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    reset: emailReset,
  } = useForm((d) => d.trim().includes("@"));









  let formIsValid = false

  if(lastNameValid && firstNameValid && emailValid){

    formIsValid = true
  }


  function submitHandler(e) {
    e.preventDefault();

    if (!firstNameValid || !lastNameValid||!emailValid) {
      return; 
    }

    firstNameReset()
    lastNameReset()
    emailReset()

  }



  return (
    <form className={style.simple} onSubmit={submitHandler}>
      <div className={style.first}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          value={firstNameEntered}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        ></input>
        { isFirstNameValid && <p>entered name is not valid</p>}
      </div>
      <div className={style.first}>
        <label htmlFor="last">Last Name</label>
        <input
          id="last"
          type="text"
          value= {lastNameEntered}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        ></input>
        {isLastNameValid && <p>last name is empty</p>}
      </div>
      <div className={style.first}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailEntered}
        ></input>
        {isEmailValid && <p>email is not valid</p>}
      </div>
      <button disabled={!formIsValid}>Submit</button>
    </form>
  );
}

//

export default SimpleForm;
// 1st case starting page nothing entered and submit button pressed that means changeHandler will not trigger only submithandler will trigger means isTouched is set to true. and as nothing is entered isNameValid is false
//2nd case sth is entered means changeHandler is triggered and isTouched and isNameValid are set to true hence error text will not show submithandler too is triggered but it wont change anything
//if input is clicked and cursor is clicked outside then blurhandler will trigger not changeHandler so isTouched is set to true isNameValid remains false so error text is shown
//when we enter input and enter sth changeHandler is triggered isTouched is set to true isNameValid is also true hence error is not shown
//let [isFormValid,setIsFormValid]=useState(false)
// isFormValid=false
//if(isNameValid && isAgeValid){ setIsFormValid(true)}