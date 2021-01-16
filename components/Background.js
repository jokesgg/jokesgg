import React, { Component, Fragment } from 'react';
import Particles from 'react-particles-js';

export default class Background extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <Particles params={{
          retina_detect: false,
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 200
              }
            },
            color: {
              value: '#fff'
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 3
              }
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: false
              }
            },
            line_linked: {
              opacity: 0.25,
              distance: 150
            },
            size: {
              value: 3,
              random: true,
              anim: {
                  enable: false
              }
            },
            move: {
              speed: 0.25
            }
          }
        }}/>
      </div>
    );
  }
}