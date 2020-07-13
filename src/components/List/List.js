import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <div>
        <section className={styles.component}>
          <Hero titleText={this.props.title} />
          <div className={styles.description}>
            {this.props.children}
          </div>
        </section>
        <section className={styles.component}>
        <Hero imageProp={this.props.image} />
          <div className={styles.image}>
            {this.props.image}
          </div>
        </section> 
      </div>
    )
  }
}

export default List;
