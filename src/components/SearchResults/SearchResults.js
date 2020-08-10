import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
// import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';

class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
    }
    
    render() {
      const { cards } = this.props;
      return (
        <section className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      );
    }
}

export default SearchResults;