import React from 'react';
import { render } from 'react-dom';
import Banner from './Banner';
import Content from './Content';
import styles from './exercise1.css';
const App = () => (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Banner />
            <Content />
        </div>
    </div>
);
render(<App />, document.getElementById("root"));