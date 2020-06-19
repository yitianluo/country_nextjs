import Card from "../components/card";
import TopBar from "../components/topbar";
import ToolBar from "../components/toolbar";
import React from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import {getAllCountries} from "../lib/countryData";

export default function Home({countries}) {

  function createCard(country){
    const {name,flag,population,region,capital,alpha3Code} = country; 
    return <Card key={name} id={alpha3Code} name={name} flag={flag} region={region} population={population} 
    capital={capital} />
  }
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <TopBar />
      <ToolBar />
      <div className="card-div">
        {countries.map(createCard)}
      </div>
    </div>
  )
  
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  
  
  const countries = await getAllCountries();

  return {
    props: {
      countries
    },
  }
}


