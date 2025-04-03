import { Logo } from '../../atoms/Logo/Index';

import emit from '/burgerEmit.svg';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <>
      <nav className={styles.container}>
        <Logo />

        <div className={styles.buttons}>
          <div className={styles.links}>
            <p>info@su1ufa.ru</p>
            <p>+7 347 246-93-56</p>
          </div>
          <img src={emit} alt="" />
        </div>
      </nav>
    </>
  );
};
