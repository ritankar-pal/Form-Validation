import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false, 

    onLogin: () => {        //an empty function: this is a good practice to mention whatever we are using

    },
    
    
    onLogout: () => {        //an empty function: this is a good practice to mention whatever we are using

    }         
});





export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); 



    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn'); 

    useEffect(() =>{
        console.log('use Effect');
        if(storedUserLoggedInInformation === '1') {
             setIsLoggedIn(true);
           }
    }, [])



    const loginHandler = (email, password) =>{

        localStorage.setItem('isLoggedIn', '1');

        setIsLoggedIn(true);
    }


    const logoutHandler = () =>{

        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }


    return (

        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler}} >
        
            {props.children}
        
        </AuthContext.Provider>
    )
}





export default AuthContext;    //AuthContext is not a component. We will use to wrap other component wherever needed.