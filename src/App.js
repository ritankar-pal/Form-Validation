import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './Store/auth-context';



// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);      //Initially user is not logging in hence initial state is false.


//   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn'); 

//   // If we just write the below code then we will end up in an infinite loop as useState functions re-evaluate the state again n again:
//   // if(storedUserLoggedInInformation === '1') {
//   //   setIsLoggedIn(true);
//   // }


//   // Hence for above problem we use useEffect: 
//   useEffect(() =>{
//     console.log('use Effect');
//     if(storedUserLoggedInInformation === '1') {
//          setIsLoggedIn(true);
//        }
//   }, [])



//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways

//     // to store the user data: 
//     localStorage.setItem('isLoggedIn', '1');

//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn'); 
//     setIsLoggedIn(false);
//   };

//   return (
//     // <React.Fragment>
//     //   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

//     //   <main>
//     //     {!isLoggedIn && <Login onLogin={loginHandler} />}
//     //     {isLoggedIn && <Home onLogout={logoutHandler} />}
//     //   </main>

//     // </React.Fragment>




//     // Using context-api Method 1: we will use AuthContext here to wrap it with .Provider as AuthContext is itself not a component
//     // <AuthContext.Provider value={{isLoggedIn: isLoggedIn }}>
      
//     //   <MainHeader onLogout={logoutHandler} />

//     //   <main>
//     //     {!isLoggedIn && <Login onLogin={loginHandler} />}      
//     //     {isLoggedIn && <Home onLogout={logoutHandler} />}
//     //   </main>

//     // </AuthContext.Provider>




    
//     //Making Context dynamic by passing function: 

//     <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
      
//       {/* <MainHeader onLogout={logoutHandler} />   Below we remove the onLogout as well as we don't need in MainHeader but in Navigation.JS */}


//       <MainHeader />    

//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}      
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>

//     </AuthContext.Provider>

//   );
// }





// We can put the entire APP in the auth-context.js file:

function App() {

  const context = useContext(AuthContext);

  return (
    
    <>
      <MainHeader />    

        <main>
          {!context.isLoggedIn && <Login />}      
          {context.isLoggedIn && <Home />}
        </main>

    </>

  );
}

export default App;
