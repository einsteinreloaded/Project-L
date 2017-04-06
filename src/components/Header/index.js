import React from 'react';
import styles from './styles.scss';

/**
 * Component inside the folder 'src/components/' are expected to be pure components.
 * They should not connect to Redux store by themselves (to improve their re-usability).
 */

const Header = () => (
  <h1 className={styles.header}>
    Hello World
  </h1>
);

export default Header;
