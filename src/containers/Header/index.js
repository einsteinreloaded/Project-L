import React from 'react';
import styles from './styles.scss';
import NavBar from 'components/Navbar';
/**
 * Component inside the folder 'src/components/' are expected to be pure components.
 * They should not connect to Redux store by themselves (to improve their re-usability).
 */

const Header = () => (
  <NavBar/>
);

export default Header;