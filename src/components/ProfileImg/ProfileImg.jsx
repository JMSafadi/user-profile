import styles from './ProfileImg.module.css'

export default function ProfileImg({ imageUrl }) {
  return (
    <div className={styles.profileImgContainer}>
      <img className={styles.profileImg} src={imageUrl} alt='user-img'/>
    </div>
  )
}
