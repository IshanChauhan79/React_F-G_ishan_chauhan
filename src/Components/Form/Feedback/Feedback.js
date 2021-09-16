import React from "react";
import classes from "./Feedback.module.css";

// return the feedback or Table page ------------------------
function Feedback(props) {
  const list = props.data.map((el, i) => {
    return (
      <div className={classes.Data} key={i}>
        <div className={classes.FormName}>{el.form}</div>
        <div className={classes.TextFeild}>{el.text}</div>
        <div className={classes.Phone}>{el.phone}</div>
        <div className={classes.Email}>{el.email}</div>
        <div className={classes.RadioButton}>{el.radio}</div>
        <div className={classes.Name}>{el.name}</div>
      </div>
    );
  });
  return (
    <div className={classes.Feedback}>
      <div className={classes.Title}>All Feedback</div>
      <div className={classes.Table}>
        <div className={classes.Heading}>
          <div className={classes.FormName}>Form Name</div>
          <div className={classes.TextFeild}>Text Field</div>
          <div className={classes.Phone}>Phone</div>
          <div className={classes.Email}>Email</div>
          <div className={classes.RadioButton}>Rating</div>
          <div className={classes.Name}>Name</div>
        </div>
        {list}
      </div>
    </div>
  );
}

export default Feedback;
