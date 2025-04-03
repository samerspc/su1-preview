// import styles from "./styles.module.css"
import logo from '/logo.png';

export const Logo = () => {
  const styles = {
    width: '120px',
    height: '31.91px',
  };
  return <img src={logo} style={styles} alt="" />;
};
