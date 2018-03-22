import React from 'react';
import ReactDom from 'react-dom';
import Tweet from '../src/components/Tweet/Tweet.js';
import './_app.css';
import tweets from './tweets';

const linkProps = { target: '_blank' };

const filteredTweets = tweets.filter(tweet => {
  if (tweet.id === 953583426153713665) {
    return tweet;
  }
  return null;
});

ReactDom.render(
  <div className="ExamplePage" style={{ width: '590px', margin: '0 auto' }}>
    <div className="tweet-stream" style={{ width: '100%' }}>
      {filteredTweets.map((t, i) => <Tweet autoPlay data={t} key={i} linkProps={linkProps} />)}
    </div>
  </div>,
  document.getElementById('container')
);
