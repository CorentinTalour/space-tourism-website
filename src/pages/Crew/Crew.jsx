import {useState} from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {crew} from "../../data.json"
import styles from "./Crew.module.scss"

function Crew() {
    const [people] = useState(crew)
    const [value, setValue] = useState(0)

    const {name, images, role, bio} = people[value];
    return (
        <div className={`${styles.background}`}>
            <NavBar/>
            <section>
                <div className={`${styles.container} d-flex`}>
                    <article className={`${styles.left} d-flex`}>
                        <h5><span className={`mr-30`}>02</span>MEET YOUR CREW</h5>
                        <div className={`${styles.leftContainer} d-flex`}>
                            <h4 className={`mb-20`}>{role}</h4>
                            <h3 className={`mb-30`}>{name}</h3>
                            <p className={`mb-120`}>{bio}</p>
                            <div>
                                <ul>
                                    {people.map((item, index) => (
                                        <button key={index} onClick={() => setValue(index)}
                                                className={`mr-40 mb-40`}>
                                        </button>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className={`${styles.right} d-flex`}>
                        <img src={images.png} alt={name} title={name}/>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Crew;