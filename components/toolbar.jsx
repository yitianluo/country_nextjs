import React from "react";
import styles from "./toolbar.module.css";

function ToolBar(){
    return(
        <div className={styles.toolbar}>
            <div>
                <input type="text" placeholder="Search for a country ..." name="search" />
            </div>
            <div>
                Filter here
            </div>
        </div>
    )
}

export default ToolBar; 