import React from "react";
import styles from "./topbar.module.css"

function TopBar(){
    return(
        <div className={styles.topbar}>
            <h1>Where in the world?</h1>
            <div className={styles.mode}>
                <img src="/moon-solid.svg"></img>
                <h2>Dark Mode</h2>
            </div>
        </div>
    );
}

export default TopBar;