import styles from './About.module.css'

export default function Home() {
  return (
    <section className={styles.about}>
        <h2 className={styles.title}>
          Sobre mi
        </h2>
      <div className={styles.container}>
        <p className={styles.description}>
          ¡Hola! Soy María Lopez, una aposionada fotógrafa profesional de Madrid. Desde muy joven, descubrí en la fotografía no solo una forma de capturar momentos, sino también de contar historias que inspiren y conecten emocionalmente.
          <br/>
          Profesionalmente, me especializo en retratos y fotografía de eventos. Mi enfoque se centra en capturar la esencia de cada persona o evento, transmitiendo emociones y narrando experiencias inolvidables.
          <br/>
          Tambien disfruto explorar nuevos lugares con mi camara, buscando siempre la mejor luz y y una composición ideal.
          <br/>
          Me encanta colaborar en proyectos creativos y conectar con personas que comparten mi amor por la fotografía.
          <br/>
          ¡Bienvenido/a a mi perfil!
        </p>
      </div>
    </section>
  )
}
