import { Route, Switch } from "react-router";
import classes from "./Form.module.css";
import Header from "../Header/Header";
import AromaticForm from "./AromaticForm/AromaticForm";
import Feedback from "./Feedback/Feedback";

function Form() {
  return (
    <div className={classes.Form}>
      <Header />
      <Switch>
        <Route path="/submissions" exact>
          <Feedback />
        </Route>
        <Route path="/">
          <AromaticForm />
        </Route>
      </Switch>
    </div>
  );
}

export default Form;
