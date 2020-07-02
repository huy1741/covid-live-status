import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
  
  let changeableUrl = url;
  
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }  
  
  try {
        const {data: { confirmed, recovered, deaths, lastUpdate }}= await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };  
    } catch (error) {}
        
    }


export const fetchDailyData = async () => {
        try {
          const { data } = await axios.get(`${url}/daily`);
      
          return data
        } catch (error) {
          return error;
        }
      };

export const countries = async()=>{
  try {
      const {data:{countries}} = await axios.get(`${url}/countries`);
      
      const newCountries = countries.map((item)=> {
        
        return {...item}
      });
     
      
      return newCountries
  } catch (error) {
    return error;
  }
}

  
    