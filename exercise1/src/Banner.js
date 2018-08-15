import React from 'react';
import styles from './Banner.css';

class Banner extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Hello Developer!</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
        </div>
      </div>
    )
  }
}

export default Banner;