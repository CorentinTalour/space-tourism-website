import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.scss"
import logo from "../../assets/images/shared/logo.svg";
import imgHamburger from "../../assets/images/shared/icon-hamburger.svg";
import {useState} from "react";
import NavBarMobile from "../NavBarMobile/NavBarMobile.jsx";

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={`d-flex align-items-center ${styles.navContainer}`}>
            <img src={logo} alt="Logo"/>
            <hr/>
            <ul className={`${styles.ulContainer}`}>
                <NavLink to="/">
                    <button className={`btn`}>00 HOME</button>
                </NavLink>
                <NavLink to="/destination">
                    <button className={`btn`}>01 DESTINATION</button>
                </NavLink>
                <NavLink to="/crew">
                    <button className={`btn`}>02 CREW</button>
                </NavLink>
                <NavLink to="/technology">
                    <button className={`btn`}>03 TECHNOLOGY</button>
                </NavLink>
            </ul>
            <img onClick={() => setShowMenu(true)} src={imgHamburger} alt="Icon hamburger"
                 className={`${styles.headerXs}`}/>
            {showMenu &&
                <>
                    <div onClick={() => setShowMenu(false)} className={`calc`}></div>
                    <NavBarMobile setShowMenu={setShowMenu}/>
                </>
            }
        </nav>
    )
}

export default NavBar;