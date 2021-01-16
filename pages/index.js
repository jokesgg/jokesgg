import React, { Component } from 'react';
import Layout from '../components/Layout';
import Background from '../components/Background';

export default function Index({ hi, preview }) {

  return (
    <Layout>
      <Background/>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh"
        }}
      >
        <section className="flexCenter">
          <a href="https://discord.gg/J6jZBj2UHv"><img className="logo" src="/images/jokesgg.gif"></img></a>
        </section>
        <section className="flexCenter intro">
          <h1>jokes, good game</h1>
          <p>We stream VR, hop in the <img src="/images/discord.png"></img> <a id="discordLink" href="https://discord.gg/J6jZBj2UHv"><b>Discord</b></a> to join our next session</p>
        </section>
        <section id="streamers">
          <div id="streamer">
            <a href="http://twitch.tv/datbyte">
              <span>DatByte - <img src="/images/twitch.png" alt="DatByte's Channel"/></span>
            </a>
          </div>
          <div id="streamer">
            <a href="http://twitch.tv/jollygrin">
              <span>JollyGrin - <img src="/images/twitch.png" alt="JollyGrin's Channel"/></span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const hi = 'hi'
  return {
    props: { hi }, // will be passed to the page component as props
  };
}