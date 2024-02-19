import {useState} from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {destinations} from "../../data.json"
import styles from "./Destionation.module.scss";

function Destination() {
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)

    const {name, images, description, distance, travel} = planets[value];
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <section className={`d-flex`}>
                <h5 className={`mb-100`}><span className={`mr-30`}>01</span>PICK YOUR DESTINATION</h5>
                <div className={`${styles.container} d-flex`}>
                    <article className={`${styles.left} d-flex mr-160`}>
                        <img src={images.png} alt={name} title={name}/>
                    </article>
                    <article className={`${styles.right} d-flex`}>
                        <div className={`${styles.rightContainer}`}>
                            <ul>
                                {planets.map((item, index) => (
                                    <button key={index} onClick={() => setValue(index)}
                                            className={`mr-40 mb-40`}>{item.name}</button>
                                ))}
                            </ul>
                            <h2 className={`mb-20`}>{name}</h2>
                            <p className={`${styles.description} mb-50`}>{description}</p>
                            <hr className={`mb-30`}/>
                            <div className={`d-flex`}>
                                <div className={`mr-80`}>
                                    <p className={`${styles.avgDistance} mb-10`}>AVG. DISTANCE</p>
                                    <p className={`${styles.data}`}>{distance}</p>
                                </div>
                                <div>
                                    <p className={`${styles.travelTime} mb-10`}>EST. TRAVEL TIME</p>
                                    <p className={`${styles.data}`}>{travel}</p>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
        </div>
    )
}

export default Destination;