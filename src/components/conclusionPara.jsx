import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import home from "./home";
import thirdbodyPara from "./thirdybodyPara"


const conclusionPara = () => {
  return (
    <Fragment>
      <h1>A Hero's Finale</h1>
      <p>
        Spider-Man into the Spider-Verse is truly one of the greatest movies of
        the last decade and yes, I will die on that hill. If comic book
        animation isn't quite your forte, I still highly reccommend watching
        this movie. It's great for all types of crowds such as hardcore comic
        fans, family movie night, and even casuals who just want to watch a cool
        movie. What I love about the film is it really doesn't feel like a movie
        about superheroes, instead it feels like a movie about characters trying
        to overcome their internal conflict. You have a girl who finally learned
        to have people close to her again after a devasting loss, a broken hero
        who rebuilds his life together, and a young boy who accepts himself and
        begins his journey not just as Spider-Man but as a young man. As a comic
        fan, this film truly embodys the special aura that Spider-Man gives me.
        Gives me hope and determination to never give up and that anybody truly
        can "wear the mask" and become Spider-Man. The only thing I can ask to
        whomever is reading is "What are you waiting for? Take the Leap of Faith
        and watch Spider-Man into the Spider-Verse Now!" I hope you enjoyed my
        review at least half as much as I enjoyed making it!
      </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g4Hbz2jLxvQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

<Link className="next-page" to="/">
      <button type="button" class="btn btn-dark" id="conclusion-btn">
         Go Home!
        </button>
      </Link>
      <Switch>
          <Route
          exact path="/"component={home}></Route>
        </Switch>

        <Link className="prev-page" to="/thirdbodyPara">
          <button type="button" class="btn btn-dark" id="prev-btn">
         Prev Page!
          </button>
          </Link>
          <Switch>
          <Route exact path="/thirdbodyPara" component={thirdbodyPara}></Route>
        </Switch>
    </Fragment>
  );
};

export default conclusionPara;
