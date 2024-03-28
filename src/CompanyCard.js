import React from 'react';
import {Link} from 'react-router-dom';

const CompanyCard = function({company}){
    console.log(company);
    return(
        <Link to={`/companies/${company.handle}`}>
            <div>
                <h5>{company.name}</h5>            
                <p>{company.description}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;