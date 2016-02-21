<p align="center">
  <img src="https://raw.githubusercontent.com/artnotfound/react-tweet/master/tweet.png" />
</p>

[live demo](https://react-tweet.herokuapp.com/)

React.js component for rendering tweets as they are presented on Twitter.com. Currently themed after the Desktop
experience with the idea of a fixed width timeline. See the [example app](http://gitub.com/artnotfound/react-tweet/example/app.js) for
an example of a tweet stream.

## Motivation

`react-tweet` should make it easier to boostrap Twitter based React.js apps. This way we can focus
on interesting ways to use and manipulate the API without the pains of rendering. Styles, assets, and HTML have
been lifted from [twitter.com](https://twitter.com) and [twitter dev docs](https://dev.twitter.com/overview/documentation).
`react-tweet` uses only inline styles and while written in ES6, compiles to plain JS meant to be absorbed by any React project.
`react-tweet` can be used a 'dumb' component for simply rendering data or could be a starting point for a more ambitious Tweet component.

## Usage

Pass in tweet objects returned from twitter API Requests as a 'data' prop. Designed for use with
[search](https://dev.twitter.com/rest/reference/get/search/tweets) & [home_timeline](https://dev.twitter.com/rest/reference/get/statuses/home_timeline) methods,
although any object can be used as long as it has the following properties:


```js
import React from 'react'
import Tweet from 'react-tweet'

const tweetData = {
  id: 'XXX',
  user: {
    name: 'XXX',
    screen_name: 'XXX',
    profile_image_url: 'XXX'
  },
  text: 'XXX',
  created_at: 'XXX',
  favorite_count: 'XXX',
  retweet_count: 'XXX',
  entities: {
    media: [],
    urls: [],
    user_mentions: [],
    hashtags: [],
    symbols: []
  } 
}

class MyTweetComponent extends React.Component {
  render () {
    return (
      <Tweet data={tweetData} />
    )
  }
}
```

## Demo
  * live: [live demo](https://react-tweet.herokuapp.com/)
  * local: run `npm start` & visit `localhost:8080`

## Supported
  * Desktop Twitter.com styles
  * Retweets
  * Quote tweets
  * Auto-linking via [twitter-text](https://www.npmjs.com/package/twitter-text)
  * Twitter Emoji support via [twemoji](https://github.com/twitter/twemoji)
  * Modal mode for images

## TODO:
  * Mobile style support
  * Better video support, seems Twitter uses custom player
  * Mimick video controls of Twitter.com
  * Add slideshow controls in Modal mode
  * Refactor how images get cropped, kind of a mess rn
  * Support for Tweet threads
  * Tests


