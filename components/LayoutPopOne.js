import React, { Component, Fragment } from 'react';
import Head from 'next/head';

export default class LayoutPopOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>jokes, good game</title>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
          <link rel='stylesheet' type='text/css' href='css/reset.css' />
          <link rel='stylesheet' type='text/css' href='css/styles.css' />
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}