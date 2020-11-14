import React, { Component, Fragment } from "react";
import home from "./components/home";

import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firstbodyPara from "./components/firstbodyPara";
import introPara from "./components/introPara";
import secondbodyPara from "./components/secondbodyPara";
import thirdbodyPara from "./components/thirdybodyPara";
import conclusionPara from "./components/conclusionPara";
import UIfx from "uifx";
import jpg from "../src/images/Spider-Man Into the Spider-.jpg";


// const Sunflower = new UIfx(SunflowerSong, {
//   volume: 0.3,
// });

const App = () => {
  //   const songPlay = () => {
  //     let audio = new Audio("/public/Sunflower-1.mp3")
  // songPlay()
  //   }
  const playSong = () => {
    let audio = new Audio("/music/Sunflower-1.mp3");
    audio.play();
  };
  
  console.log("You better work or else!");

  const pauseSong = () => {
    let stopAudio = new Audio 
    stopAudio.pause();
  }



  return (
    
      <Router>
        <img src={jpg} alt="Spider-Man Into the Spider" id="film-poster" />
        <button type="button" class="btn btn-dark" id="sound-btn" onClick={playSong}>
          Play some Tunes!
        </button>

        <button type="button" class="btn btn-dark" id="pause-btn" onClick={pauseSong}>
          Stop the Tunes!
        </button>


        
        <Link className="next-page" to="./introPara">
          <button type="button" class="btn btn-dark" id="journey-btn">
           Start the Journey!
          </button>
        </Link>


        <Link className="next-page" to="./firstbodyPara"></Link>
        <Switch>
          <Route exact path="/firstbodyPara" component={firstbodyPara}></Route>
        </Switch>

        <Link className="next-page" to="./secondbodyPara"></Link>
          <Switch>
            <Route exact path="/secondbodyPara" component={secondbodyPara}></Route>
          </Switch>

          <Link className="next-page" to="./thirdbodyPara"></Link>
          <Switch>
            <Route exact path="/thirdbodyPara" component={thirdbodyPara}></Route>
          </Switch>

          <Link className="next-page" to="./conclusionPara"></Link>
          <Switch>
            <Route exact path="/conclusionPara" component={conclusionPara}></Route>
          </Switch>
       

        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/introPara" component={introPara}></Route>
        </Switch>
      </Router>
    
  );
};

export default App;
