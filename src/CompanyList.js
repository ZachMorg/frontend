import React, {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard.js';
import SearchForm from './SearchForm.js';
import JoblyApi from './api.js';

const CompanyList = function(){
    const [companies, setCompanies] = useState({
        data: null,
        isLoading: true
    });

    useEffect(() => {
        const apiCompanies = async function(){
            let result = await JoblyApi.getCompanies();
            setCompanies({
                data: result,
                isLoading: false
            });
        }
        apiCompanies();
    },[]);

    const submitSearch = async function(search){
        let result = await JoblyApi.getCompanies(search);
        setCompanies({
            data: result,
            isLoading: false
        });
    };

    if(companies.isLoading){
        return (<h1>Loading...</h1>)
    }

    return (
        <div>
            <SearchForm submit={submitSearch}/>
            {companies.data.map(c => (
                <CompanyCard company={c}/>
            ))}
        </div>
    );
}

export default CompanyList;