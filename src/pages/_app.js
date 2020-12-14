import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/global.css';
import wrapper from '../store/configureStore';

const Dajeongpay = ({ Component }) => {

  return (
    <>
      <Head>
        <title>DAJEONG PAY</title>
      </Head>
      <Component />
    </>
  );
};

Dajeongpay.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Dajeongpay);