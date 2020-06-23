import React from "react"
import Card from "./card";

function createCard(country){
    
    const {name,flag,population,region,capital,alpha3Code} = country; 
    return <Card key={name} id={alpha3Code} name={name} flag={flag} region={region} population={population} 
    capital={capital} />
  }

function CardDiv(props){

    console.log(props.searchText);
    let countries = props.countries.filter(country => country.name.toUpperCase().includes(props.searchText.toUpperCase()));
    countries = countries.filter(country =>country.region.toUpperCase().includes(props.filter.toUpperCase()))

    return <div className="card-div">
    {countries.map(createCard)}
  </div>
}

export default CardDiv;