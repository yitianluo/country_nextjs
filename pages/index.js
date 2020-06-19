import Card from "../components/card";
import TopBar from "../components/topbar";
import React from "react";
import Head from "next/head";
import ReactDOM from "react-dom";

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

      <div className="card-div">
        {countries.map(createCard)}
      </div>
    </div>
  )
  
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
  
  const countries = await res.json();
  

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      countries
    },
  }
}


