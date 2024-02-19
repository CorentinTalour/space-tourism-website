import {useState} from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {technology} from "../../data.json"
import styles from "./Technology.module.scss"

function Technology() {
    const [techno] = useState(technology)
    const [value, setValue] = useState(0)

    const {name, images, description} = techno[value];
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <section className={`d-flex`}>
                <h5 className={`mb-20`}><span className={`mr-30`}>03</span>SPACE LAUNCH 101</h5>
                <div className={`${styles.container} d-flex`}>
                    <article className={`${styles.left} d-flex`}>
                        <div className={`${styles.leftContainer}`}>
                            <ul>
                                {techno.map((item, index) => (
                                    <button key={index} onClick={() => setValue(index)}
                                            className={`mr-40 mb-40`}>{index + 1}</button>
                                ))}
                            </ul>
                        </div>
                        <div className={`${styles.rightContainer}`}>
                            <p className={`${styles.subTitle} mb-10`}>THE TERMINOLOGY...</p>
                            <h3 className={`mb-20`}>{name}</h3>
                            <p className={`${styles.description} mb-20`}>{description}</p>
                        </div>
                    </article>
                    <article className={`${styles.right} `}>
                        <img src={images.portrait} alt={name} title={name}/>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Technology;