import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { listData, infoContents } from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={infoContents.image} />
    <h2>{infoContents.title}</h2>
    <p>{infoContents.text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};


export default Info;