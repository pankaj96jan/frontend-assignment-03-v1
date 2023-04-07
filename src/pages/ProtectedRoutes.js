import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const users = localStorage.getItem('users');
        if (!users || users === 'null') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;