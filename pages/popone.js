import React, { Component } from 'react';
import LayoutPopOne from '../components/LayoutPopOne';

export default function PopOne({ hi, preview }) {
    return (
        <LayoutPopOne>
            <style global jsx>{`
        body {
            background-color: #2D2D2D
        }
      `}
            </style>

            <section id="p1-hero">
                <img src="images/jokes.svg" />
                <img src="images/popone.png" />
            </section>

            <section id="p1-heroText">
                <h1>A VERY JOKES <br /> TORNAMENT</h1>
            </section>

            <section id="p1-what-when">
                <div id="p1-what">
                    <h3>what?</h3>
                    <p>
                        Who’s the best population one team in our discord? We’re hosting a tornament to find out. Squad up with 2 others and track your kills, wins, and revives.
              </p>
                </div>
                <div id="p1-when">
                    <h3>when?</h3>
                    <p>
                        This event takes place at <br />
                        8pm CEST, March 27th
              </p>
                </div>
            </section>

            <section id="p1-squad-req">
                <div className="squad-req-header">
                    <h3>
                        squad requirements
                    </h3>
                    <img src="images/squadreq.svg" />
                </div>
                <div className="squad-req-text">
                    <p>
                        Each team requires a captain who can stream/submit recorded proof of the games played, to verify the scoreboard at the end of games.
                    </p>

                    <div className="buttons">
                        <div className="register-button">
                            <a href="https://airtable.com/shr7t6Vu6rq8jfu2b">REGISTER</a>
                        </div>
                        <div className="make-button">
                            <a href="https://airtable.com/shrBlZSMQpZWd7vUr">MAKE A SQUAD</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="p1-airtableHeader">
                <h3>Squads</h3>
                <h3>Players</h3>
            </section>
            
            <section id="p1-airtable">
                <div>
                    <iframe class="airtable-embed" src="https://airtable.com/embed/shrGf3ahdbGEwCeEI?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                </div>
                <div>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shr3ZEj3lkrNwiCdt?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                </div>
            </section>




        </LayoutPopOne>
    );
}

export async function getStaticProps({ preview = false }) {
    const hi = 'hi'
    return {
        props: { hi }, // will be passed to the page component as props
    };
}