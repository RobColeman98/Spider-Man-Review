import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firstbodyPara from "./firstbodyPara";
import home from "./home"



const introPara = () => {
  return (
    <Fragment>
      <h1 id="intro-para">The Leap of Faith</h1>;
     
      <p>
        Spider-Man Into the Spider-Verse is an animated film and it really helps
        with the aesthetic of the film. The bright colors and crafty editing
        really gives the film a comic book vibe. The story takes place in
        Brooklyn, New York in the universe of Miles Morales . The main antagonist,
        William "Kingpin" Fisk, with the help of Olivia Octavius builds a device
        that would bring back his wife and son that he lost in a car accident.
        However, the device backfires and opens a portal that brings other
        universes into the current universe. Peter Parker comes in and steals
        the device and gives it to young Miles, however he is killed in the
        process. This gives Miles the almost impossible task of bringing
        verything back to the way it was while also becoming the next one and
        only Spider-Man, or so he thought. When the device opened multiple
        universes it also brought the Spider-Man's of that universe! With the
        help of the other Spider-People, Miles has to set everything back the
        way it was. Now I know you want me to get to the story of Miles, but in
        order to understand his story, you must first understand the other
        Spider-People, in particular Peter B. Parker(Peter Parker from a
        different universe) and Spider-Gwen, or Gwen Stacy. 
      </p>
      
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/a9gY8LDsIlE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link className="next-page" to="./firstbodyPara">
        <button type="button" class="btn btn-dark" id="first-body-btn">
        Next Page!
        </button>
      </Link>
      <Switch>
        <Route exact path="/firstbodyPara" component={firstbodyPara}></Route>
      </Switch>

      <Link className="prev-page" to="./">
          <button type="button" class="btn btn-dark" id="prev-btn">
         Prev Page!
          </button>
          </Link>
          <Switch>
          <Route exact path="./" component={home}></Route>
        </Switch>
    </Fragment>
  );
};
export default introPara;
