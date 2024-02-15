import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./Crew.module.scss"

function Crew() {

    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <h1>Crew</h1>
        </div>

    )
}

export default Crew;