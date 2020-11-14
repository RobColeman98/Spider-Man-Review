import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import thirdbodyPara from "./thirdybodyPara";
import firstbodyPara from "./firstbodyPara";

const secondbodyPara = () => {
  return (
    <Fragment>
      <h1>That's what Friends are For</h1>
      <p>
        Freinds, everyone has them. You love them, you cherish them, you would
        do anything to support them. Some you knew since grade school, others
        you've known later on in your life, but what if your friend slowly
        starts to become your lover and suddenly they are snatched away from
        you? That's exactly what happens to Gwen Stacy, also known as
        Spider-Gwen and why she becomes dettached from emotions and devloping
        friendships simply because in her words "to avoid distractions". Gwen is
        as you might have guessed from a different universe, a universe where
        her version of Peter Parker is her best friend who I believe was more
        than her best friend. After an science experiment gone wrong, Peter
        becomes the Green Goblin and begans wrecking havoc on the city. Knowing
        her responsibilites as Spider-Man she is forced to defeat her best
        friend but couldn't save him in the process. This creates an internal
        conflict with Gwen as she begans to feel as though there was something
        that she could have done better or differently to save Peter. Fast
        forward to the universe of Miles Morales, Gwen also begins to train
        Miles on his journey. She slowly starts to open up more to him, but is
        still reluctant to fully commit to a friendship due to her past. As the
        films progresses, she begins to feel empathy for Miles, she wants to see
        him prove himself and everyone else wrong and that he can become
        Spider-Man, despite him not being fully ready. It's not until the end of
        the movie where we get to see Gwen finally releases her barrier and
        accepts Miles as a friend. She is estatic and impressed to see how far
        Miles has come on his long journey. As she is getting ready to return
        back into her universe, her and Miles cap off the friendship with a
        handshake and a goodbye. She realizes that no matter what Miles and the
        rest of the Spider-Pwople aren't there to "be her distraction", but
        instead have her back because that's simply what friends are for.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/i2XK0b5DLrY?start=170"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link className="next-page" to="./thirdbodyPara">
      <button type="button" class="btn btn-dark" id="third-body-btn">
          Next Page!
        </button>
      </Link>
      <Switch>
          <Route
          exact path="/thirdbodyPara"component={thirdbodyPara}></Route>
        </Switch>
        
        <Link className="prev-page" to="./firstbodyPara">
          <button type="button" class="btn btn-dark" id="prev-btn">
         Prev Page!
          </button>
          </Link>
          <Switch>
          <Route exact path="./firstbodyPara" component={firstbodyPara}></Route>
        </Switch>
    
    </Fragment>
  );
};

export default secondbodyPara;
