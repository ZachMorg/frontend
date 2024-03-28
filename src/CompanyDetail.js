import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import JobList from './JobList';
import JoblyApi from './api';

const CompanyDetail = function(){
    const {company} = useParams();
    const [comp, setComp] = useState(null);

    useEffect(function getComp(){
        async function apiCall(){
            setComp(await JoblyApi.getCompany(company))
        }
        apiCall();
    },[company]);

    if(!comp){
        return(<h2>Loading...</h2>);
    }

    return(
        <div>
            <h3>{comp.name}</h3>
            <h6>{comp.description}</h6>
            <div>
                <JobList company={comp}/>
            </div>
        </div>
    )
}

export default CompanyDetail;