import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import { countries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker =(props)=> {
    const [fetchCountries, setFetchedContries] = useState([]);

    useEffect(()=> {
        const fetchedCountries=async()=>{
            setFetchedContries(await countries())
        }
        fetchedCountries();
    },[]);
    
    
    console.log(fetchCountries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries && fetchCountries.map((item, index)=>{
                    return  <option key={index} value={item.name} >{item.name}</option>
                })}
               
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;