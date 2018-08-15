import React from 'react';
import styles from './Item.css';

class Item extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img src="http://via.placeholder.com/400x300.png" />
        <div className={styles.content}>
          <p>
            {this.props.content}
          </p>
        </div>
        <div className={styles.actionButton}>
          Read More
        </div>
      </div>
    )
  }
}

export default Item;