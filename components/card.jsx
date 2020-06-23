import styles from "./card.module.css"
import Link from "next/link";

function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.flag}>
                <img src={props.flag} className={styles.flagImg}/>
            </div>
            
            <div className={styles.info}>
            <Link href="/countries/[name]" as={"/countries/"+props.id}>
                <h1>{props.name}</h1>
            </Link>
                
                <p>Population: <span className={styles.detail}>{props.population}</span></p>
                <p>Region: <span className={styles.detail}>{props.region}</span></p>
                <p>Capital: <span className={styles.detail}>{props.capital}</span></p>
            </div>
        </div>
    )
}

export default Card;