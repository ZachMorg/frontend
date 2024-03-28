import React, {useEffect, useState} from 'react';
import './App.css';
import {jwtDecode} from 'jwt-decode';
import RouteList from './RouteList';
import JoblyApi from './api';
import NavBar from './NavBar';
import UserContext from './UserContext';
import useLocalStorage from './localStorage';

export const TOKEN = 'jobly-token';

function App() {

  const [jobApps, setJobApps] = useState(new Set([]))
  const [token, setToken] = useLocalStorage(TOKEN);
  const [currUser, setCurrUser] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function loadUser(){
    async function getUserData(){
      if(token){
        JoblyApi.token = token;
        const {username} = jwtDecode(token);
        const apiUser = await JoblyApi.getCurrUser(username)
        setCurrUser({
          data: apiUser,
          isLoading: false
        });
      }
      else{
        setCurrUser({
          data: null,
          isLoading: false
        })
      }
    }
    getUserData();
  },[token]);

  console.log(currUser);
  console.log(token);



  const login = async function(data){
    let token = await JoblyApi.login(data);
    setToken(token);
  }

  const signup = async function(data){
    let token = await JoblyApi.signup(data);
    setToken(token);
  }

  const signout = async function(){
    setToken(null);
  }

  const hasApplied = function(jobId){
    if(jobApps.has(jobId)){
      return true;
    }
    return false;
  }

  const applyForJob = async function(jobId){
    if(hasApplied(jobId)){
      return;
    }
    console.log(currUser);
    await JoblyApi.applyForJob(currUser.data.username, jobId);
    setJobApps(new Set([...jobApps, jobId]));
  }



  if(currUser.isLoading){
    return (<h2>Loading...</h2>)
  }

  return (
    <UserContext.Provider value={{currUser: currUser.data, setCurrUser, hasApplied, applyForJob}}>
      <div className="App">
        <NavBar signout={signout}/>
        <RouteList currUser={currUser.data} login={login} signup={signup}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
