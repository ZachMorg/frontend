import {Routes, Route, Navigate} from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import Homepage from './Homepage';

const RouteList = function({currUser, login, signup}){

    if(!currUser){
        console.log('no current user');
        return(
            <Routes>
                <Route
                    path='/login'
                    element={<LoginForm login={login}/>}
                />
                <Route
                    path='/signup'
                    element={<SignupForm signup={signup}/>}
                />  
                <Route
                    path='/'
                    element={<Homepage/>}
                />
                <Route
                    path='/*'
                    element={<Navigate to='/'/>}
                />  
            </Routes>
        )
    }

    console.log('user signed in')
    console.log(currUser);
    return (
        <Routes>
            <Route
                path='/companies'
                element={<CompanyList/>}
            />
            <Route
                path='/companies/:company'
                element={<CompanyDetail/>}
            />
            <Route
                path='/jobs'
                element={<JobList/>}
            />
            <Route
                path='/signout'
                element={<Homepage/>}
            />
            <Route
                path='/profile'
                element={<ProfileForm/>}
            />
            <Route
                path='/'
                element={<Homepage/>}
            />
            <Route
                path='/*'
                element={<Navigate to='/'/>}
            />
        </Routes>
    )
}

export default RouteList;