import React from "react";
import TopBar from "./topbar";
import Border from "./border";
import BackButton from "./backbutton";
import styles from "./country.module.css";
// import Link from "next/link";
// import { getStaticProps } from "../pages";


function Country(props){


    function getCurrency(currency,index){
        return(
            <span key={index}>{currency.name}</span>
        )
    }

    function getLanguage(language,index){
        return(
            <span key={index}>{language.name}</span>
        )
    }

    function getBorder(border,index){
        
        const country = props.compareList.filter(item => item.code===border);
        const countryName = country[0].name;

        const name = countryName.substring(0, countryName.indexOf("(")>0 ? countryName.indexOf("("):countryName.length);
        console.log(name);

        return (
            <Border key={index} borderCode={border} name={name} />
        )
    }

    return(
        <div>
            <TopBar />
            <BackButton />
            <div className={styles.countryDiv}>
                <img src={props.flag}></img>
                <div className={styles.infoDiv}>
                    <h1>{props.name}</h1>
                    <div className={styles.row}>
                        <p className={styles.col}>Native Name: <span>{props.nativeName}</span></p>
                        <p className={styles.col}>Top Level Domain: <span>{props.topLevelDomain}</span></p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.col}>Population: <span>{props.population}</span></p>
                        <p className={styles.col}>Currencies: {props.currencies.map(getCurrency)}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.col}>Region: <span>{props.region}</span></p>
                        <p className={styles.col}>Languages: {props.languages.map(getLanguage)}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.col}>Sub Region: <span>{props.subregion}</span></p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.col}>Capital: <span>{props.capital}</span></p>
                    </div>

                    <div className={styles.borderRow}>
                        <div className={styles.borderP}>Border Countries:</div> {props.borders.map(getBorder)}
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Country;