import { useState } from "react";

import styles from "./Accordion.module.css"

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const items = [
        {question:"O que é React?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab quibusdam esse aspernatur maxime mollitia est magnam doloribus enim quo repudiandae molestiae autem, deserunt eligendi, ad tempore. Debitis, aliquam. Labore!"
        },
        {question:"O que é Hook?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab quibusdam esse aspernatur maxime mollitia est magnam doloribus enim quo repudiandae molestiae autem, deserunt eligendi, ad tempore. Debitis, aliquam. Labore!"
        },
        {question:"O que é useState?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab quibusdam esse aspernatur maxime mollitia est magnam doloribus enim quo repudiandae molestiae autem, deserunt eligendi, ad tempore. Debitis, aliquam. Labore!"
        }
    ]

    const toggleAccordion = (index) =>{
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={index} className={`${styles.item} ${activeIndex === index ? styles.open : ""}`}>
                    <button className={styles.button} onClick={() => toggleAccordion(index)}>
                        {item.question}
                    </button>
                    {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
                </div>
            ))}
        </div>
    )
}

export default Accordion