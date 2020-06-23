import React, { useState } from "react";
import styles from "./filter.module.css"

function Filter(props){

    const [isSpan,setSpan] = useState(false);

    function handleSpan(){
        setSpan(prev => !prev);
    }

    function handleChoose(filter){
        props.handleFilter(filter);
        setSpan(false);
    }

    return(
        <div className={styles.filterDiv}>
            <div className={styles.buttonDiv}>
                <p>Filter by Region </p>
                <svg onClick={handleSpan} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>
            <div className={styles.filterList} style={ {visibility: isSpan ? "visible":"hidden"} }>
                <p onClick={()=> handleChoose("Africa")} >Africa</p>
                <p onClick={()=> handleChoose("America")}>America</p>
                <p onClick={()=> handleChoose("Asia")}>Asia</p>
                <p onClick={()=> handleChoose("Europe")}>Europe</p>
                <p onClick={()=> handleChoose("Oceania")}>Oceania</p>
                <p onClick={()=> handleChoose("")}>All</p>
            </div>
            
        </div>
    )
}

export default Filter;