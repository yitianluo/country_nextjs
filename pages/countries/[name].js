import Country from "../../components/country";
import {getCountryByID,getAllCountryPaths, getCompareList} from "../../lib/countryData";

function Countries({country,compareList}){

    const {flag,name,nativeName,topLevelDomain,population,currencies,region,languages,subregion,capital,borders} = country;

    return(
        <Country flag={flag} name={name} nativeName={nativeName} topLevelDomain={topLevelDomain} population={population}
        currencies={currencies} region={region} languages={languages} subregion={subregion} 
        capital={capital} borders={borders} compareList={compareList}/>
    )

    // return (<div>hello </div>)
}



export async function getStaticProps({params}) {
    // console.log(params.id);
    
    const country = await getCountryByID(params.name);
    const compareList = await getCompareList();
    
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        country,compareList
      }
    }
  }

export async function getStaticPaths() {

    // Get countries path
    const paths = await getAllCountryPaths();
    
    return {
        paths,
        fallback: false // See the "fallback" section below
    };
    
  }

  export default Countries;