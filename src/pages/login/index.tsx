import React, { useState, useMemo } from "react"
import { Login } from "src/components/auth/login/Login";
import { Register } from "src/components/auth/register/Register"; 

const Auth = () => {
    const [ isLogin, setLogin ] = useState(false);
    const [ isRegister, setIsRegister ] = useState(true);

    const isAuthStat = useMemo(() => {
        if(!isRegister) return false;
        if(!isLogin && isRegister) return true; 
    }, [ isLogin, isRegister ]);

    const handleClick = () => {
        setLogin(isLogin => isLogin = !isLogin);
    }

    return (
        <div>
            { 
                isAuthStat 
                ? <Login></Login>
                : <Register></Register>
            }
            <button onClick={ handleClick }>change Statement</button>
        </div>
    );
}

export default Auth;