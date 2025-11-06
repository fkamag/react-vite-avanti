import {useState} from 'react'
import styles from './Modal.module.css'

function Modal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={styles.container}>
                <button onClick={() => setIsOpen(true)} className={styles.openButton}>Abrir Modal</button>

                {isOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h2>Título do modal</h2>
                            <p>Conteúdo do Modal</p>
                            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default Modal