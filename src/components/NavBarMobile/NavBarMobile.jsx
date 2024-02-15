import {NavLink} from "react-router-dom";
import styles from "./NavBarMobile.module.scss"
import closeIcon from "../../assets/images/shared/icon-close.svg";

// eslint-disable-next-line react/prop-types
function NavBarMobile({setShowMenu}) {
    return (
        <ul className={`${styles.NavBarContainer}`}>
            <img onClick={() => setShowMenu(false)} src={closeIcon} alt="Icon close"/>
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
    )
}

export default NavBarMobile;