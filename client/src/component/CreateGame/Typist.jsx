import React, { Component } from 'react';
import '../../App.css';
import Nav from '../../Nav';
import RoomCodeForm from '../../Room_code_form';
import NameForm from '../../Name_form'
import StartButton from '../../StartButton'
import 'bulma/css/bulma.css'

class Typist extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="column card">
        <div className="Typist">
          <div className="card-image">
            <figure className="image is-4by5">
            <img src="https://payload.cargocollective.com/1/1/50182/605229/typeordie-01_900.jpg" alt="Placeholder image" />
            </figure>
          </div>
        <div className="card-content">
              <p className="title">The Typist</p>
              </div>
            </div>
        </div>
    );
  }
}

export default Typist;
