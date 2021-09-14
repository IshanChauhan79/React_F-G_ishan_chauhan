import React from "react";
import classes from "./AromaticForm.module.css";

function AromaticForm() {
  return (
    <div className={classes.AromaticForm}>
      <div className={classes.Title}>Aromatic Bar</div>
      <div className={classes.SubTitle}>
        We are committed to providing you wuth the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </div>
      <form>
        <div className={classes.FormContainer}>
          <div>
            <div className={classes.FormElTitle}>Text Field</div>
            <input type="text" className={classes.Input} required />
          </div>
          <div>
            <div className={classes.FormElTitle}>Text Field</div>
            <input type="text" className={classes.Input} required />
          </div>
          <div>
            <div className={classes.FormElTitle}>Text Field</div>
            <input type="text" className={classes.Input} required />
            <div className={classes.Error}> error in slkdkn</div>
          </div>

          <div>
            <div className={classes.FormElTitle}>Rating</div>
            <div className={classes.Radio}>
              <input
                type="radio"
                id="Excellent"
                name="rating"
                value="Excellent"
                defaultChecked
              />
               <label for="Excellent">Excellent</label>
              <input type="radio" id="Good" name="rating" value="Good" /> 
              <label for="Good">Good</label>
              <input type="radio" id="Fair" name="rating" value="Fair" /> 
              <label for="Fair">Fair</label>
              <input type="radio" id="Bad" name="rating" value="Bad" /> 
              <label for="Bad">Bad</label>
            </div>
          </div>

          <div>
            <div className={classes.FormElTitle}>
              Text Field <span className={classes.Star}>*</span>
            </div>
            <input type="text" className={classes.Input} required />
            <div className={classes.Error}> error in slkdkn</div>
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
