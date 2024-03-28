import React, { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';

const JobCard = function({job}){

    const {hasApplied, applyForJob} = useContext(UserContext);
    const [isApplied, setIsApplied] = useState();

    useEffect(function updateIsApplied(){
        setIsApplied(hasApplied(job.id));
    },[job, hasApplied]);

    const handleApply = async function(){
        if(isApplied){
            return;
        }
        applyForJob(job.id);
        setIsApplied(true);
    }

    return(
        <div>
            <h5>{job.title}</h5>
            <p>{job.salary}</p>
            <p>{job.equity}</p>
            <button onClick={handleApply}>{isApplied ? 'Applied' : 'Apply'}</button>
        </div>
    )
}

export default JobCard;