import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import classes from "./Form.module.css";
import Header from "../Header/Header";
import AromaticForm from "./AromaticForm/AromaticForm";
import Feedback from "./Feedback/Feedback";

const dummyData = [
  {
    name: "ishan",
    email: "ishan@gmail.com",
    phone: "+91-9999999999",
    form: "Aromatic Bar",
    radio: "Excellent",
    text: "Text Field",
  },
  {
    name: "ishan",
    email: "ishan@gmail.com",
    phone: "+91-9999999999",
    form: "Aromatic Bar",
    radio: "Excellent",
    text: "Text Field",
  },
];

// code for navigating between Aromatic and Table page ------------------------------------

function Form() {
  const [data, setData] = useState([]);

  // code for storing data locally----------------------------------------
  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews"));
    if (reviews === null || reviews.length === 0) {
      setData(dummyData);
    } else {
      setData(reviews);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(data));
  }, [data]);

  const addReviewHandler = (el) => {
    setData((prev) => [...prev, el]);
  };

  return (
    <div className={classes.Form}>
      <Header />
      <Switch>
        <Route path="/submissions" exact>
          <Feedback data={data} />
        </Route>
        <Route path="/">
          <AromaticForm addReview={addReviewHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default Form;
