import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import JoblyApi from './api';
import UserContext from './UserContext';


const ProfileForm = function(){
    const navigate = useNavigate();
    const {currUser, setCurrUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: currUser.username,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email
    });

    const handleChange = function(evt){
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = async function(evt){
        evt.preventDefault();
        const updatedProfile = await JoblyApi.editProfile(formData.username, {firstName: formData.firstName, lastName: formData.lastName, email: formData.email});
        
        setCurrUser(currUser => ({
            ...currUser,
            data: updatedProfile
        }));

        navigate('/');
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input onChange={handleChange} name='username' id='username' value={formData.username}/>
                <label htmlFor='firstName'>FirstName:</label>
                <input onChange={handleChange} name='firstName' id='firstName' value={formData.firstName}/>
                <label htmlFor='lastName'>LastName:</label>
                <input onChange={handleChange} name='lastName' id='lastName' value={formData.lastName}/>
                <label htmlFor='email'>Email:</label>
                <input onChange={handleChange} name='email' id='email' value={formData.email}/>
                <button>Submit Changes</button>
            </form>
        </div>
    )
}

export default ProfileForm;