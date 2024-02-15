import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./Technology.module.scss"

function Technology() {
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <h1>Technology</h1>
        </div>
    )
}

export default Technology;