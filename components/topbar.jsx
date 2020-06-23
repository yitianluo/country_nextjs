import React,{useState} from "react";
import styles from "./topbar.module.css"

function TopBar(){

    // const [isDarkMode,setDarkMode] = useState(true);
    
    function handleMode(){
        var root = $(":root");
        const bgColor = root.css("--background-color");
        if (bgColor === "hsl(207, 26%, 17%)"){
            root.css("--background-color","hsl(0, 0%, 98%)");
            root.css("--element-color","white");
            root.css("--text-color","hsl(200, 15%, 8%)");
            root.css("--place-color","hsl(0, 0%, 52%)");
        } else {
            root.css("--background-color","hsl(207, 26%, 17%)");
            root.css("--element-color","hsl(209, 23%, 22%)");
            root.css("--text-color","white");
            root.css("--place-color","white");
        }
    }

    return(
        <div className={styles.topbar}>
            <h1>Where in the world?</h1>
            <div className={styles.mode} onClick={handleMode} >
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                <h2>Dark Mode</h2>
            </div>
        </div>
    );
}

export default TopBar;