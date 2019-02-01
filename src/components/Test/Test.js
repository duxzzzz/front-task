import React from 'react';
import styles from './Test.scss';

const test = (props) => (
    <div className={styles.test}>
        <h1 className={styles.test__title}>{props.text}</h1>
    </div>
)

export default test;