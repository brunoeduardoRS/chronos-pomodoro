import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a
        href='#'
        className={styles.link}
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>

      <a
        href='#'
        className={styles.link}
        aria-label='Ir para o histórico'
        title='Ir para o histórico'
      >
        <HistoryIcon />
      </a>

      <a
        href='#'
        className={styles.link}
        aria-label='Ir para as configurações'
        title='Ir para as configurações'
      >
        <SettingsIcon />
      </a>

      <a
        href='#'
        className={styles.link}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
