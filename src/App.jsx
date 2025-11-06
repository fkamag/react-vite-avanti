
import './App.css'
import Accordion from './components/accordion/Accordion'
import Clock from './components/clock/Clock'
import ContactForm from './components/contactForm/ContactForm'
import Modal from './components/modal/Modal'

function App() {

  return (
    <>
      <h1>Relógio</h1>
      <Clock/>
      <hr />

      <h2>Modal</h2>
      <Modal/>
      <hr />

      <h2>Formulário de Contato</h2>
      <ContactForm/>
      <hr />

      <h2>Accordion</h2>
      <Accordion/>
    </>
  )
}

export default App
