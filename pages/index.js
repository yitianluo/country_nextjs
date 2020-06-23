import TopBar from "../components/topbar";
import ToolBar from "../components/toolbar";
import CardDiv from "../components/carddiv";
import React, { useState } from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import {getAllCountries} from "../lib/countryData";

export default function Home({countries}) {

  const [searchText,setSearchText] = useState("");
  const [filterText,setFilterText] = useState("");

  function handleSearch(text){
    setSearchText(text);
  }

  function handleFilter(filter){
    console.log(filter);
    setFilterText(filter);
  }

  
  return (
    <div className="light">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <TopBar />
      <ToolBar handleSearch={handleSearch} handleFilter={handleFilter} />
      <CardDiv countries={countries} searchText={searchText} filter={filterText}/>

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
      <footer><script src="/jquery-3.5.1.min.js"></script></footer>
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


