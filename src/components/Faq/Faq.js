import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { listData, faqContents } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={listData.title} image={faqContents.image} />
    <h2>{faqContents.title}</h2>
    <p>{faqContents.text}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
export default Faq;