import logo from './logo.svg';
import './App.css';
import React from "react";

const Clips = {
  q:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  w:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  e:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  a:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  s:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  d:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  z:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  x:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  c:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}
const Message = {
  q:"one",
  w:"two",
  e:"three",
  a:"four",
  s:"five",
  d:"six",
  z:"seven",
  x:"eight",
  c:"nine"
}

const keys = ["q","w","e","a","s","d","z","x","c"];

// eslint-disable-next-line no-undef
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Slap me!",
    }
    this.handleKeyPress =    this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }


  handleKeyPress(event) {
    let foo = event.key.toLowerCase()
    if (keys.indexOf(foo) >= 0) {

      this.playSound(event.key);

    }
  }
  playSound(key) {


    this.setState({
      message: Message[key],
      key: key
    })
    document.getElementById(key.toUpperCase()).play()
  }
  render() {
    return (
        <div id ="drum-machine">
          <h1>The Machine<sup className="circle">&reg;</sup></h1>
          <div id="drum-pad">
            <button className={this.state.key ==="q"?"drum-pad red":"drum-pad"}
                    id="Boom" onClick={() => this.playSound("q")}>
              Q
              <audio src={Clips.q} className="clip" id="Q" />
            </button>
            <button className={this.state.key ==="w"?"drum-pad red":"drum-pad"} id="Pow" onClick={() => this.playSound("w")}>
              W
              <audio src={Clips.w} className="clip" id="W" />
            </button>
            <button className={this.state.key ==="e"?"drum-pad red":"drum-pad"} id="Slap!" onClick={() => this.playSound("e")}>
              E
              <audio src={Clips.e} className="clip" id="E" />
            </button>
            <button className={this.state.key ==="a"?"drum-pad red":"drum-pad"} id="Bow" onClick={() => this.playSound("a")}>
              A
              <audio src={Clips.a} className="clip" id="A" />
            </button>
            <button className={this.state.key ==="s"?"drum-pad red":"drum-pad"}id="Ooooh" onClick={() => this.playSound("s")}>
              S
              <audio src={Clips.s} className="clip" id="S" />
            </button>
            <button className={this.state.key ==="d"?"drum-pad red":"drum-pad"} id="Phew!" onClick={() => this.playSound("d")}>
              D
              <audio src={Clips.d} className="clip" id="D" />
            </button>
            <button className={this.state.key ==="z"?"drum-pad red":"drum-pad"} id="Tssss" onClick={() => this.playSound("z")}>
              Z
              <audio src={Clips.z} className="clip" id="Z" />
            </button>
            <button className={this.state.key ==="x"?"drum-pad red":"drum-pad"} id="Pum" onClick={() => this.playSound("x")}>
              X
              <audio src={Clips.x} className="clip" id="X" />
            </button>
            <button className={this.state.key ==="c"?"drum-pad red":"drum-pad"} id="Ka-ching" onClick={() => this.playSound("c")}>
              C
              <audio src={Clips.c} className="clip" id="C" />
            </button>
          </div>
          <div id="display">
            {this.state.message}
          </div>
        </div>
    );
  }
}
export default App;
