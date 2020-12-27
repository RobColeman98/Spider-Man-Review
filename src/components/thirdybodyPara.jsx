import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import conclusionPara from "./conclusionPara";
import secondbodyPara from "./secondbodyPara";

const thirdbodyPara = () => {
  return (
    <Fragment>
      <h1>Accept your Self</h1>
      <p>
        Miles is by far the most relatable character in the film to me just
        because he put the viewers into the shoes of being a teenager again more
        so than being Spider-Man. We've all at some point in time felt like
        Miles where we are young and naive and trying to find our purpose in
        life. Miles is a gifted student and was given an opportunity to attend
        school at a prestigious charter school, which his parents enrolled him
        to. Although being intelligent and more than qualifed, Miles feels as
        though he doesn't belong with the "snobby smart kids" so he tries to
        fail multiple assignments and test in order to get kicked out which
        eventually backfires. As I mentioned before, Miles is tasked with
        destroying the machine and sending all the other Spider-People home to
        thier universe by Peter B. Parker and the late Peter Parker from his
        universe. This sure seems like a tall task for just a teenager who's
        still trying to adjust to his powers, but both Parkers wouldn't trust
        him into doing something so dangerous if they believed that he wasn't
        special. After the death of his Uncle Aaron, who's also the Prowler,
        Miles begins to have second thoughts on his journey. What if he isn't
        ready? What if he gets killed by Kingpin? Peter, as well as the other
        Spider-People comforts Miles before heading to the big showdown. A
        confused Miles wonders why he can't join them, that's when Peter forces
        him to use his powers on command but he's unable to which causes Peter
        to tie him up so he can't escape. Miles asks "How do I know if I'm ready
        to be Spider-Man?", to which Peter simply replies "You don't, it's a
        leap of Faith Miles, that's all it is". After having a breif interaction
        with his father who told him that "There's a spark inside you" and
        "You're gonna be the best of us Son, I love you", this gives Miles the
        spark he needs and now he's truly ready. Earlier in the film as Miles
        looks at the Spider-Suit his reflection was below the mask, this time
        his reflection is inside the mask, symbolizing he is ready to wear the
        mask. As he sits on top of the building, he takes the "leap of faith".
        As the glass shatters, he accepts his role, but still is not fully
        comfortable. At first glance it looks like he's falling, but with a
        quick flip of the camera he is now rising, rising to the challenge of
        being Spider-Man and more importantly rising to accept himself.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XXkwJupqoJA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link className="next-page" to="./conclusionPara">
        <button type="button" class="btn btn-dark" id="conclusion-btn">
          Next Page!
        </button>
      </Link>
      <Switch>
        <Route exact path="/conclusion" component={conclusionPara}></Route>
      </Switch>

      <Link className="prev-page" to="./secondbodyPara">
        <button type="button" class="btn btn-dark" id="prev-btn">
          Prev Page!
        </button>
      </Link>
      <Switch>
        <Route exact path="./secondbodyPara" component={secondbodyPara}></Route>
      </Switch>
    </Fragment>
  );
};

export default thirdbodyPara;
