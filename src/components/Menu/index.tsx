import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <a href='#' className={styles.link}>
        <HouseIcon />
      </a>

      <a href='#' className={styles.link}>
        <HistoryIcon />
      </a>

      <a href='#' className={styles.link}>
        <SettingsIcon />
      </a>

      <a href='#' className={styles.link}>
        <SunIcon />
      </a>
    </div>
  );
}
