import React, { useState, useRef } from "react";
import classes from "./AromaticForm.module.css";
import { ReactComponent as India } from "../../../assets/images/india.svg";

// return the Aromatic Form Page ------------------------------------
function AromaticForm(props) {
  const [thankYou, setThankYou] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [phoneError, setPhoneError] = useState(true);
  const [radioValue, setRadioValue] = useState("Excellent");
  const [nameError, setNameError] = useState(true);

  // const history = useHistory();

  const textField = useRef();
  const email = useRef();
  const phone = useRef();
  const name = useRef();

  const radioChange = (e) => {
    setRadioValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // validating the inputs --------------------------------

    let re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let name_check = /^[a-zA-Z\s]*$/;

    let nameValue = name.current.value.trim();
    let emailValue = email.current.value.trim();
    let num = phone.current.value.toString();

    let numValue = "+91-" + num;

    let emailValid = re.test(emailValue);
    let nameValid = name_check.test(nameValue);

    setEmailError(emailValid);
    setPhoneError(num.length === 10);
    setNameError(nameValid);

    if (emailValid && num && nameValid) {
      props.addReview({
        name: nameValue,
        phone: numValue,
        text: textField.current.value,
        email: emailValue,
        form: "Aromatic Bar",
        radio: radioValue,
      });
      setThankYou(true);
    }
  };

  // input container with various fields-----------------------
  const inputForm = (
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
            <div className={classes.Error}>Error:only 10 digit No. allowed</div>
          ) : null}
        </div>

        <div>
          <div className={classes.FormElTitle}>
            Please rate your overall dining experience
          </div>
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
  );

  return (
    <div className={classes.AromaticForm}>
      <div className={classes.Title}>Aromatic Bar</div>
      <div className={classes.SubTitle}>
        We are committed to providing you wuth the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </div>
      {thankYou ? (
        <div className={classes.ThankYou}>
          "Thank you for completing the information”
        </div>
      ) : (
        inputForm
      )}
    </div>
  );
}

export default AromaticForm;
