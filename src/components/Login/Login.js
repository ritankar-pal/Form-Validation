import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Store/auth-context";

import Input from "../UI/Input/Input.js";





const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }; //Here we receive the snapshot of last state as we dont want to loose that
  }

  return { value: "", isValid: null };
};

  
const passwordReducer = (state, action) => {
  if (action.type === "USER_PASS") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "PASS_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};








const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);




  //useRedducer for the email:
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  }); //emailState is an object

  //useREducer for the password:
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  



  //Note: If we use this we will be sending http request to the server for each key stroke which is insane:
  // useEffect(() =>{
  //     console.log('I am running with every keystroke');

  //      setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //    );
  // }, [enteredEmail, enteredPassword])




  // Demo: Practice
  // useEffect(()=>{
  //   console.log('Effect Running');

  //   return () =>{
  //     console.log('Effect Cleanup');
  //   }

  // }, [passwordState]);



  //Here we are pulling out the certain properties of the object
  const { isValid: emailIsValid } = emailState; //object destructuring where we change the name of isvalid key to what is written after ":"
  const { isValid: passwordIsValid } = passwordState;  



  //We want to send the request only after some time when the user has written something:
  useEffect(() => {
    const identfier = setTimeout(() => {
      console.log("Checking Form Validity");

      setFormIsValid(
        // enteredEmail.includes('@') && enteredPassword.trim().length > 6
        // emailState.isValid && passwordState.isValid
        emailIsValid && passwordIsValid
      );
    }, 1000);

    //clean-up:  except for the first time it will run from 2nd time to clean up the.
    return () => {
      console.log("clean up");
      clearTimeout(identfier); //it will clean up the set time out set to every key stroke
    };

    // }, [enteredEmail, enteredPassword])
    // }, [emailState, passwordState])
  }, [emailIsValid, passwordIsValid]);





  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );

    dispatchPassword({ type: "USER_PASS", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };



  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));

    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);

    dispatchPassword({ type: "PASS_BLUR" });
  };




  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const context = useContext(AuthContext);


  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);

    //  props.onLogin(emailState.value, enteredPassword);

    //  props.onLogin(emailState.value, passwordState.value);

    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }

    //If using context then:
    // context.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>

      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        {/* <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}

        {/* 
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`} >

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}

        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}

          {/* Removing disabled from Button */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
      
    </Card>
  );
};

export default Login;
