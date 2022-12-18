import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

import Button from "../UI/Button/Button";
import AuthContext from "../../Store/auth-context";


const Home = (props) => {
  const context = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>

      {/* <Button onClick={props.onLogout}>Logout</Button> */}

      {/* While using context */}
      <Button onClick={context.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
