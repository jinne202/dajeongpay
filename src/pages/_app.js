import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/global.css';

const Dajeongpay = ({ Component }) => {
  return (
    <>
      <Head>
        <title>DAJUNG PAY</title>
      </Head>
      <Component />
    </>
  );
};

Dajeongpay.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Dajeongpay;