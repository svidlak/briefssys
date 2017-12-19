import React from 'react';
import './loggedOut.css'

const userLoggedOut = (props) =>{
    return(
        <div className="log-in">
            <input type="text" placeholder="אנא מלאו את כתובת המייל שלכם" onChange={props.userName}/><br/>
            <input type="button" value="כניסה" onClick={props.logIn}/>
        </div>
    );
} 

export default userLoggedOut;