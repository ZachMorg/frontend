import React, {useState, useEffect} from 'react';
import JobCard from './JobCard';
import JoblyApi from './api';

const JobList = function({company}){

    const [jobs, setJobs] = useState(null);

    useEffect(function getJobs(){
        async function apiCall(){
            setJobs(await JoblyApi.getJobs());
        }
        apiCall();
    },[]);

    if(company){
        return(
            <div>
                {company.jobs.map(j => (
                    <div>
                        <JobCard job={j}/>
                    </div>
                ))}
            </div>
        )
    }

    if(!jobs){
        return(<h2>Loading...</h2>)
    }

    console.log(jobs);
    return(
        <div>
            {jobs.map(j => (
                <div>
                    <JobCard job={j}/>
                </div>
            ))}
        </div>
    )
}

export default JobList;