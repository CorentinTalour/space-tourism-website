import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "./HomePage.module.scss";
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <div className={`${styles.container}`}>
                <div className={`${styles.left}`}>
                    <h5 className={``}>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>
                        Let's face; if you want to go to space, you might as well genuinely go to outer space and not
                        hover
                        kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this
                        world experience !
                    </p>
                </div>
                <div className={`${styles.right}`}>
                    <NavLink to="/destination">
                        <button>EXPLORE</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default HomePage;