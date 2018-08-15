import React from 'react';
import classNames from 'classnames';
import styles from './Accordion.css';

class Accordion extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    }
  }

  handleAccordionClick(index) {
    return e => {
      if (this.state.active === index) {
        this.setState({
          active: -1,
        })
      } else {
        this.setState({
          active: index,
        });
      }
    }
  }
 
  render() {
    return(
      <div className={styles.accordion}>
        {
          React.Children.map(this.props.children, (childItem, index) => {
            return React.cloneElement(childItem, {
              active: this.state.active === index,
              index: index,
              handleClick: this.handleAccordionClick(index),
            })
          })
        }
      </div>
    )
  }
}

class AccordionItem extends React.PureComponent {
  render() {
    return(
      <div className={classNames(styles.accordionItemContainer, this.props.active && styles.active)} onClick={this.props.handleClick}>
        {this.props.active}
        {this.props.children}
      </div>
    )
  }
}

Accordion.Item = AccordionItem;

export default Accordion;