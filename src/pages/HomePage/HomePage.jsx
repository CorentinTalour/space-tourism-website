import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./HomePage.module.scss";

function HomePage() {
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <h1>HomePage</h1>
        </div>

    )
}

export default HomePage;