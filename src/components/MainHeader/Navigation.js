import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import classes from "./Navigation.module.css";

// import AuthContext from "../../Store/auth-context";

const Navigation = (props) => {
  // return (

  //   <nav className={classes.nav}>

  //     <ul>

  //       {props.isLoggedIn && (<li> <a href="/">Users</a> </li> )}

  //       {props.isLoggedIn && (<li> <a href="/">Admin</a> </li> )}

  //       {props.isLoggedIn && (<li> <button onClick={props.onLogout}>Logout</button> </li> )}

  //     </ul>

  //   </nav>
  // );







  // //Using context api method 1 (not used usually)
  // return (

  //   <AuthContext.Consumer>

  //     {(context) =>{
  //       return (
  //         <nav className={classes.nav}>

  //       <ul>

  //         {context.isLoggedIn && (<li> <a href="/">Users</a> </li> )}

  //         {context.isLoggedIn && (<li> <a href="/">Admin</a> </li> )}

  //         {context.isLoggedIn && (<li> <button onClick={props.onLogout}>Logout</button> </li> )}

  //       </ul>

  //     </nav>
  //       )
  //     }}

  //   </AuthContext.Consumer>
  // );








  const context = useContext(AuthContext);

  // //Using context api method 2 (useContext)
  return (


    <nav className={classes.nav}>


      <ul>


        {context.isLoggedIn && ( <li> <a href="/">Users</a> </li>)}

        {context.isLoggedIn && ( <li> <a href="/">Admin</a> </li> )}

        

        {/* {context.isLoggedIn && ( <li> <button onClick={props.onLogout}>Logout</button> </li> )} */}


        {/* The context.onLogout is from the App.js directly being passed here */}
        {context.isLoggedIn && ( <li> <button onClick={context.onLogout}>Logout</button> </li> )}  



      </ul>
    </nav>
  );
};

export default Navigation;
