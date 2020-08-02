import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

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
  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
    render() {
      const { title, cards, icon } = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div className={styles.cards}>
            {this.state.cards.map(({ key, ...columnProps }) => (
              <Card key={key} {...columnProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>  
        </section>
      )
    }
  }
  
  export default Column;