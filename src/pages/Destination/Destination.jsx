import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./Destionation.module.scss";

function Destination() {

    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <h1>Destination</h1>
        </div>
    )
}

export default Destination;