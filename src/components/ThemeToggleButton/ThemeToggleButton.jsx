import styles from './ThemeToggleButton.module.css'

import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";



export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      { theme === 'light' ? <MdDarkMode/> : <CiLight/> }
    </button>
  )
}
