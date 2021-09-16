import React, { useState, useRef } from "react";
import classes from "./AromaticForm.module.css";
import { ReactComponent as India } from "../../../assets/images/india.svg";

function AromaticForm() {
  const [emailError, setEmailError] = useState(true);
  // const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(true);
  const [radioValue, setRadioValue] = useState("");
  const [nameError, setNameError] = useState(true);

  const textField = useRef();
  const email = useRef();
  const phone = useRef();
  const name = useRef();

  const radioChange = (e) => {
    console.log(e.target.value);
    setRadioValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    let re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let name_check = /^[a-zA-Z\s]*$/;

    let emailValid = re.test(email.current.value.trim());
    setEmailError(emailValid);

    let num = phone.current.value.toString();
    setPhoneError(num.length === 10);

    let nameValid = name_check.test(name.current.value.trim());
    setNameError(nameValid);

    console.log(textField.current.value);

    console.log(email.current.value);
    console.log(phone.current.value);
    console.log(name.current.value);
  };

  return (
    <div className={classes.AromaticForm}>
      <div className={classes.Title}>Aromatic Bar</div>
      <div className={classes.SubTitle}>
        We are committed to providing you wuth the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.FormContainer}>
          <div>
            <div className={classes.FormElTitle}>Text Field</div>
            <input
              type="text"
              className={classes.Input}
              ref={textField}
              required
            />
          </div>
          <div>
            <div className={classes.FormElTitle}>Email Field</div>
            <input
              type="email"
              className={[
                classes.Input,
                !emailError ? classes.InputError : null,
              ].join(" ")}
              ref={email}
              required
            />
            {!emailError ? (
              <div className={classes.Error}>Error:Invalid Email</div>
            ) : null}
          </div>
          <div>
            <div className={classes.FormElTitle}>Phone Field</div>
            <div className={classes.NumberContainer}>
              <div className={classes.India}>
                <India />
              </div>
              <input
                type="number"
                min="0"
                className={[
                  classes.Input,
                  classes.IndiaPadding,
                  !phoneError ? classes.InputError : null,
                ].join(" ")}
                ref={phone}
                required
              />
            </div>

            {!phoneError ? (
              <div className={classes.Error}>
                Error:only 10 digit No. allowed
              </div>
            ) : null}
          </div>

          <div>
            <div className={classes.FormElTitle}>Radio Button</div>
            <div className={classes.Radio}>
              <input
                type="radio"
                id="Excellent"
                name="rating"
                value="Excellent"
                onChange={radioChange}
                defaultChecked
              />
               <label htmlFor="Excellent">Excellent</label>
              <input
                type="radio"
                id="Good"
                name="rating"
                value="Good"
                onChange={radioChange}
              />
               <label htmlFor="Good">Good</label>
              <input
                type="radio"
                id="Fair"
                name="rating"
                value="Fair"
                onChange={radioChange}
              />
               <label htmlFor="Fair">Fair</label>
              <input
                type="radio"
                id="Bad"
                name="rating"
                value="Bad"
                onChange={radioChange}
              />
               <label htmlFor="Bad">Bad</label>
            </div>
          </div>

          <div className={classes.Name}>
            <div className={classes.FormElTitle}>
              Name <span className={classes.Star}>*</span>
            </div>
            <input
              type="text"
              className={[
                classes.Input,
                !nameError ? classes.InputError : null,
              ].join(" ")}
              ref={name}
              required
            />
            {!nameError ? (
              <div className={classes.Error}>
                Error:Only character and space allowed
              </div>
            ) : null}
          </div>
          <button type="submit" className={classes.Button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AromaticForm;
