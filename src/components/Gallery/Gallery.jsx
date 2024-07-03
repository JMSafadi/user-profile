import styles from './Gallery.module.css'

const photos = [
  '/gallery/photo-1.jpg',
  '/gallery/photo-2.jpg',
  '/gallery/photo-3.jpg',
  '/gallery/photo-4.jpg',
  '/gallery/photo-5.jpg',
  '/gallery/photo-6.jpg',
  '/gallery/photo-7.jpg',
  '/gallery/photo-8.jpg',
  '/gallery/photo-9.jpg',
]

export default function Gallery() {
  return (
    <>
      <h2 className={styles.title}>Mi galería</h2>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.photoContainer}>
            <img src={photo} alt={`Photo ${index+1}`} className={styles.photo} />
          </div>
        ))}
      </div>
    </>
  )
}
