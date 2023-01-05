import styles from './Avatar.module.css'

export function Avatar({ avatarUrl, hasBorder = true }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarUrl} 
    />
  )
}