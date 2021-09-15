import React from "react";
import classes from "./Feedback.module.css";

function Feedback() {
  return (
    <div className={classes.Feedback}>
      <div className={classes.Title}>All Feedback</div>
      <div className={classes.Table}>
        <div className={classes.Heading}>
          <div className={classes.FormName}>Form Name</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>Phone</div>
          <div className={classes.Email}>Email Field</div>
          <div className={classes.RadioButton}>Radio Button</div>
          <div className={classes.Name}>Name</div>
        </div>
        <div className={classes.Data}>
          <div className={classes.FormName}>Aromatic Bar</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>+91-9999999999</div>
          <div className={classes.Email}>abcdef@gmail.com</div>
          <div className={classes.RadioButton}>Excellent</div>
          <div className={classes.Name}>Ishan Chauhan</div>
        </div>
        <div className={classes.Data}>
          <div className={classes.FormName}>Aromatic Bar</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>+91-9999999999</div>
          <div className={classes.Email}>abcdef@gmail.com</div>
          <div className={classes.RadioButton}>Excellent</div>
          <div className={classes.Name}>Ishan Chauhan</div>
        </div>
        <div className={classes.Data}>
          <div className={classes.FormName}>Aromatic Bar</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>+91-9999999999</div>
          <div className={classes.Email}>abcdef@gmail.com</div>
          <div className={classes.RadioButton}>Excellent</div>
          <div className={classes.Name}>Ishan Chauhan</div>
        </div>
        <div className={classes.Data}>
          <div className={classes.FormName}>Aromatic Bar</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>+91-9999999999</div>
          <div className={classes.Email}>abcdef@gmail.com</div>
          <div className={classes.RadioButton}>Excellent</div>
          <div className={classes.Name}>Ishan Chauhan</div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
