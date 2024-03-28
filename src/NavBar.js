import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import UserContext from './UserContext';

const NavBar = function({signout}){

    const {currUser} = useContext(UserContext);

    if(!currUser){
        return(
            <nav>
                <NavLink to={'/'}>Jobly</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
            </nav>
        )
    }

    return(
        <nav>
            <NavLink to={'/'}>Jobly</NavLink>
            <NavLink to={'/companies'}>Companies</NavLink>
            <NavLink to={'/jobs'}>Jobs</NavLink>
            <NavLink to={'/profile'}>Proflie</NavLink>
            <NavLink to={'/signout'} onClick={signout}>Sign Out</NavLink>
        </nav>
    )
}

export default NavBar;