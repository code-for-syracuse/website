import React from 'react';
import './intro.css';

export default () => (
  <div className="intro-wrapper">
    <div className="intro-left">
      <h1>
        <span className="intro-big">Code For Syracuse</span>
        <span className="intro-small">helps solve civic problems through technology.</span>
      </h1>
      <p className="intro-byline">
        A <a href="https://www.codeforamerica.org">Code For America</a> Brigade
      </p>
      <p className="intro-byline">
        Sponsored by <a href="https://hackupstate.org">Hack Upstate</a>
      </p>

      <div className="intro-meetup-card">
        <div className="intro-meetup-card-header">Next Event</div>
        <h4>Code For Syracuse Monthly Hack Night</h4>
        <p>Single line summary of meetup text</p>
        <div className="intro-meetup-card-button-aligner">
          <a className="intro-meetup-card-button" href="https://www.meetup.com/Code-for-Syracuse/events/mwclprybchbjc/">Sign Up</a>
        </div>
      </div>
      <div className="intro-all-events-wrapper">
        <span>All of our events are on meetup:</span>
        <a href="https://www.meetup.com/Code-for-Syracuse/" className="intro-all-events-button">See All Events</a>
      </div>
    </div>
    <div className="intro-right">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Clinton_square_soldiers_sailors_monument_fountain.jpg" alt="Downtown Syracuse" />
    </div>
  </div>
);
