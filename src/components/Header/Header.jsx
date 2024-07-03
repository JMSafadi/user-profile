import ProfileImg from '../ProfileImg/ProfileImg'
import styles from './Header.module.css'

export default function Header({ name, imageUrl }) {
  return (
    <header className={styles.header}>
      <ProfileImg imageUrl={ imageUrl } />
      <h1 className={styles.headerName} >{ name }</h1>
    </header>
  )
}
