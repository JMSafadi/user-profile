import styles from './ContactForm.module.css'
import { useState } from 'react'

export default function ContactForm() {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    setTimeout(() => {
      setformData({
        name: '',
        email: '',
        message: ''
      })
      setFormSubmitted(false)
    }, 4000)

  }


  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contacto</h2>
      <section className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input 
              type="text"
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea 
              type="text"
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='5'
              required
                />
          </div>
          <button className={styles.button} type='subtmit'>Enviar</button>
          {
            formSubmitted && <p className={styles.submitMessage}>enviado</p>
          }
        </form>
      </section>
    </div>
  )
}
