import { useState, useEffect } from 'react';
import { Slogan } from '../../atomic/atoms/Slogan/Slogan';
import { Header } from '../../atomic/templates/Header/Index';
import styles from './styles.module.css';

import hao1 from '/hao1.png';
import hao2 from '/hao2.png';
import hao3 from '/hao3.png';
import hao4 from '/hao4.png';
import hao6 from '/hao6.png';
import hao7 from '/hao7.png';
import hao8 from '/hao8.png';
import hao9 from '/hao9.png';
import hao10 from '/hao10.png';
import hao11 from '/hao11.png';
import hao12 from '/hao12.png';

const GroupImage = ({ images, groupState }) => {
  const [visible, setVisible] = useState(true);
  const [currentState, setCurrentState] = useState(groupState);

  useEffect(() => {
    if (groupState !== currentState) {
      setVisible(false);
      const timer = setTimeout(() => {
        setCurrentState(groupState);
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [groupState]);

  const currentImage = images[currentState];

  return (
    <img
      src={currentImage.src}
      alt=""
      className={`${styles[currentImage.className]} ${styles.image} ${
        visible ? styles.visible : styles.hidden
      }`}
    />
  );
};

const leftTopImages = {
  A: { src: hao1, className: 'hao1' },
  B: { src: hao7, className: 'hao7' },
};

const leftBottomImages = {
  A: { src: hao4, className: 'hao4' },
  B: { src: hao9, className: 'hao9' },
};

const rightTopImages = {
  A: { src: hao3, className: 'hao3' },
  B: { src: hao10, className: 'hao10' },
};

const rightBottomImages = {
  A: { src: hao6, className: 'hao6' },
  B: { src: hao11, className: 'hao11' },
};

const centerImages = {
  A: { src: hao2, className: 'hao2' },
  B: { src: hao8, className: 'hao8' },
  C: { src: hao12, className: 'hao12' },
};

export const Home = () => {
  const [leftState, setLeftState] = useState('A');
  const [rightState, setRightState] = useState('A');
  const [centerState, setCenterState] = useState('A');

  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStep((prev) => (prev + 1) % 12);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    switch (step) {
      case 0:
        setLeftState('B');
        break;
      case 1:
        setRightState('B');
        break;
      case 2:
        setCenterState('B');
        break;
      case 3:
        setLeftState('A');
        break;
      case 4:
        setRightState('A');
        break;
      case 5:
        setCenterState('C');
        break;
      case 6:
        setLeftState('B');
        break;
      case 7:
        setRightState('B');
        break;
      case 8:
        setCenterState('A');
        break;
      case 9:
        setLeftState('A');
        break;
      case 10:
        setRightState('A');
        break;
      case 11:
        setCenterState('B');
        break;
      default:
        break;
    }
  }, [step]);

  return (
    <section>
      <Header />
      <Slogan />
      <section className={styles.container}>
        <p className={styles.p}>СТРОИМ УФУ</p>
        {/* left */}
        <GroupImage images={leftTopImages} groupState={leftState} />
        <GroupImage images={leftBottomImages} groupState={leftState} />
        {/* right */}
        <GroupImage images={rightTopImages} groupState={rightState} />
        <GroupImage images={rightBottomImages} groupState={rightState} />
        {/* centeer */}
        <GroupImage images={centerImages} groupState={centerState} />
      </section>
    </section>
  );
};
