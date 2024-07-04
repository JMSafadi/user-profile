import styles from './ContactForm.module.css'
import { useState } from 'react'
import * as yup from 'yup'

export default function ContactForm() {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
    schema
      .validateAt(name, { [name]: value })
      .then(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }))
      })
      .catch((error) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error.errors[0],
        }))
      })
    }

  const schema = yup.object().shape({
    name: yup.string().required('Nombre requerido'),
    email: yup.string().email('Formato de correo invalido').required('Email requerido'),
    message: yup.string().required('Mensaje requerido')
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleCloseAlert = () => {
    setformData({
      name: '',
      email: '',
      message: ''
    })
    setFormSubmitted(false)
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
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.error : ''}`}
              required
              />
            {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              required
              />
            {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea 
              type="text"
              id='message'
              name='message'
              className={`${styles.input} ${errors.message ? styles.error : ''}`}
              value={formData.message}
              onChange={handleChange}
              rows='5'
              required
                />
            {errors.message && <div className={styles.errorMessage}>{errors.message}</div>}
          </div>
          <button className={styles.button} type='subtmit'>Enviar</button>
          {formSubmitted && (
            <div className={styles.alert}>
              <h3>¡Enviado!</h3>
              <button onClick={handleCloseAlert} className={styles.alertButton}>Aceptar</button>
            </div>
          )}
          {errors && errors.path === 'name' && (
            <div className={styles.error}>{errors.message}</div>
          )}
        </form>
      </section>
    </div>
  )
}
