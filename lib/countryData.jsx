import fetch from 'node-fetch';

export async function getAllCountries() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
  const countries = res.json();

  return countries;
}

export async function getCountryByID(id){
    const res = await fetch('https://restcountries.eu/rest/v2/alpha/' + id);
    const country = await res.json();

    return country;
}


export async function getAllCountryPaths(){
    
    const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
    const countries = await res.json();

    return countries.map((country) =>({
        params:{
            name:country.alpha3Code,
          }
      }));

}

export async function getCompareList(){
  const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
  const countries = await res.json();

  function getList(country){
    const {name,alpha3Code} = country;
    return {name:name,code:alpha3Code}
  }

  const compareList = countries.map(getList);

  return compareList; 
}

