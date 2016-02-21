import React from 'react';
import ReactDom from 'react-dom';
import Tweet from '../src/components/Tweet/Tweet.js';
import './_app.scss';
import tweets from './tweets'



ReactDom.render((
  <div className="ExamplePage" style={{'width': '590px', 'margin': '0 auto'}}>
    <div className="tweet-stream" style={{'width': '100%'}}>
      {tweets.map((t, i) => (
        <Tweet data={t} key={i} />
      ))}
    </div>
  </div>
), document.getElementById('container'))
