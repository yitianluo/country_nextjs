import React from "react";
import styles from "./border.module.css";
import Link from "next/link"

function Border(props){
  
    return(
        <div className={styles.border}>
            <Link href="/countries/[name]" as={"/countries/"+props.borderCode}>
                <span>{props.name}</span>
            </Link>
        </div>
    )

    
}

export default Border;
