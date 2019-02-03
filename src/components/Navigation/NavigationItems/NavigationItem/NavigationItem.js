import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem';

const navigationItem = (props) => (
    <li className={styles.Navigation__item}>
        <NavLink 
            className={styles.Navigation__link} 
            activeClassName="Navigation__link--active" 
            to={props.link}
            exact
        >{props.children}</NavLink>
    </li>
);

export default navigationItem;