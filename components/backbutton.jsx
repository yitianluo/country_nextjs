import React from "react";
import styles from "./backbutton.module.css";
import Link from "next/link";

function BackButton(){
    return(
        <div className={styles.backDiv}>
        <Link href="/">
            <div className={styles.backButton}><span>←</span> Back</div>
        </Link>
            
        </div>
    );
}

export default BackButton;