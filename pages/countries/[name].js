import Country from "../../components/country";

function Countries({country}){

    const {flag,name,nativeName,topLevelDomain,population,currencies,region,languages,subregion,capital,borders} = country;

    return(
        <Country flag={flag} name={name} nativeName={nativeName} topLevelDomain={topLevelDomain} population={population}
        currencies={currencies} region={region} languages={languages} subregion={subregion} 
        capital={capital} borders={borders} />
    )

    // return (<div>hello </div>)
}



export async function getStaticProps({params}) {
    // console.log(params.id);
    
    const res = await fetch('https://restcountries.eu/rest/v2/alpha/' + params.name);
    
    const country = await res.json();
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        country
      }
    }
  }

export async function getStaticPaths() {

    // Get countries data

    const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
    const countries = await res.json();
  
    const paths = countries.map((country) =>({
      params:{
          name:country.alpha3Code,
        }
    }));
    
    console.log(paths);

    // const paths = [{params:{name:"ALA"}}];

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
    
  }

  export default Countries;