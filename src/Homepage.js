import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from './UserContext';

const Homepage = function(){

    const {currUser} = useContext(UserContext);
    if(currUser){
        return(
            <div>
                <h2>Welcome {currUser.firstName}!</h2>
            </div>
        )
    }

    return(
        <div>
            <h2>Hello, sign up or login to continue.</h2>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}

export default Homepage;