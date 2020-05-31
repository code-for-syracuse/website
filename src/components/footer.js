import React from 'react';
import './intro.css';

export default function Footer() {
    return(
  <div className="footer-wrapper">
    <div className="footer-left-column">
      <h1>
        <span className="footer-big">Code For Syracuse</span>
        </h1>
        <p className="footer-byline">
        About
      </p>
      <p className="footer-byline">
        Volunteer
      </p>
      <p className= "footer-byline">
        Civic Data Sources
      </p>
    </div>
 
<div className="footer-right-column">
<h1>
        <span className="footer-big">Contact Us</span>
        </h1>
        <p className="footer-byline">
        Email: <a href="mailto: hello@codeforsyracuse.org"></a> 
      </p>
      <p className="footer-byline">
      Slack: Join the <a href="https://slackacuse.herokuapp.com/">Syracuse.io</a> Slack group
      </p>
      <p className= "footer-byline">
      Twitter: <a href="https://twitter.com/codeforsyracuse">@CodeForSyracuse</a> 
      </p>
      <p className= "footer-byline">
      Meetup: <a href="https://www.meetup.com/Code-for-Syracuse/">Code For Syracuse</a>
      </p>
</div>
</div>
    )
}