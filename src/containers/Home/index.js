/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export function Home() {
  return <h1>Introduction React</h1>;
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Home;
