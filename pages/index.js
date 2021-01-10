import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ hi, preview }) {


  return (
    <Layout>
      <section className="flexCenter">
        <a href="https://discord.gg/J6jZBj2UHv"><img className="logo" src="https://i.imgur.com/Fa0nYet.png"></img></a>
      </section>
      <section className="flexCenter">
        <h1>jokes, good game</h1>
        <p>we stream vr, hop in the <a href="https://discord.gg/J6jZBj2UHv">discord</a> to join our next session</p>
      </section>
      <section id="streamers">
        <div>
          <p>CamsOnCams (dat boyy)</p>
          <a href="http://twitch.tv/camsoncams"><img src="http://streambadge.com/twitch/light/camsoncams.png" alt="camsoncams's Streambadge" /></a>
        </div>
        <div>
          <p>JollyGrin</p>
          <a href="http://twitch.tv/jollygrin"><img src="http://streambadge.com/twitch/light/jollygrin.png" alt="jollygrin's Streambadge"/></a>
        </div>

      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const hi = 'hi'
  return {
    props: { hi }, // will be passed to the page component as props
  };
}