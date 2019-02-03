import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.scss';

const navigationItems = () => (
    <ul className={styles.Navigation__items}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/contact-us">Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;