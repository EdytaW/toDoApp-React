import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  //zapisywał zawartość właściwości cards w stanie komponentu
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  } 
    render() {
      const { title, cards, addCard } = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title} </h3>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))} 
          <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
          </div>  
        </section>
      )
    }
  }

  Column.propTypes = {
    title: PropTypes.string,
  };
  
  export default Column;