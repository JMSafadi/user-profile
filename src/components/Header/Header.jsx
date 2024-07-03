import ProfileImg from '../ProfileImg/ProfileImg'
import styles from './Header.module.css'

import { TbWorld  } from 'react-icons/tb'
import { MdOutlineWorkOutline   } from 'react-icons/md'

export default function Header({ name, imageUrl }) {
  return (
    <header className={styles.header}>
      <ProfileImg imageUrl={ imageUrl } />
      <div className={styles.description}>
        <h1>{ name }</h1>
        <p><MdOutlineWorkOutline/> Fotógrafa Profesional</p>
        <p><TbWorld/> Madrid, España</p>
      </div>
    </header>
  )
}
