import React, { Fragment } from "react";
import introPara from "./introPara";
import secondbodyPara from "./secondbodyPara";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const firstbodyPara = () => {
  return (
    <Fragment>
      <h1>The Broken Hero</h1>
      <p>
        Peter B. Parker is obviously not the same Peter Parker From Miles'
        universe, but it goes deeper than just looks or skillsets. The Parker
        from Miles' universe was charming, a role model for children, a loving
        boyfriend and the symbol for hope in Brooklyn. Peter B. Parker on the
        other hand, is a man who is completely broken. He's older not as agile,
        and even a little chubbier. He also lost the love of his life, Mary Jane
        Watson due to being afraid to have kids with her, thus causing their
        divorce and being split up. I absolutely love Miles as a character,
        however Peter B. Parker stole the show in my opinion with his relatable
        story. Once B. Parker joins Miles in his universe, he is given the task
        to train Miles in becoming Spider-Man. He didn't like the idea of
        training Miles at first because he didn't feel as though he was ready,
        however even when Miles is ready he is relunctant to return back to his
        reality. This all insinuated once he saw his ex-wife, Mary Jane Watson,
        and all those feelings and emotions he had for her came back to haunt
        him. Could you blame Peter for not wanting to leave, he had everything
        in this universe. Aunt May was still alive, his ex-wife was a happy
        woman, he had people he could depend on, and most importantly he felt
        special in this universe. The most captivating moment of the film in my
        opinion is when it's time for our heroes to return to their perspective
        universes and Peter tries to destroy the machine instead of Miles, thus
        causing him to sacrifice himself. With a quick sweep of the leg Miles
        trips Peter and tells him "he has to go back home" and a Peter with
        doubts and uncertainty in his eyes ask the young Miles "How will I know
        if I'm not gonna mess it up again" referencing his failed relationship
        with his ex-wife . Peter then smirks and realize exaclty what he told
        Miles earlier in the film "Right... it's a leap of faith". As he lets go
        of Miles, he is also letting go of his personal problems and fears of
        the future. He is also trusting that Miles will be able to get the job
        done and that he will be able to rebuild his bond with Mary Jane as he
        falls into the portal sending him back into his universe. We all have a
        Peter B. Parker in us in some form or fashion, the question is will you
        let go and take the leap of faith?
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GuqCibVW5wo?start=33"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
          
      <Link className="next-page" to="./secondbodyPara">
        <button type="button" class="btn btn-dark" id="second-body-btn">
          Next Page!
        </button>
          </Link>
        <Switch>
          <Route
          exact path="/secondbodyPara"component={secondbodyPara}></Route>
        </Switch>
          
          <Link className="prev-page" to="./introPara">
          <button type="button" class="btn btn-dark" id="prev-btn">
         Prev Page!
          </button>
          </Link>
          <Switch>
          <Route
          exact path="/inroPara"component={introPara}></Route>
        </Switch>

    </Fragment>
  );
};

export default firstbodyPara;
