import React from 'react'
import styles from './styles'
import twemoji from 'twemoji'
import twitterText from 'twitter-text'


class Text extends React.Component {
  render () {
    let {data} = this.props, {text, entities} = data

    // remove any embedded media links
    if (entities.media) {
      entities.media.forEach( e => {
        text = text.replace(e.url, '')
      })
    }

    // remove any quote links
    if (data.quoted_status) {
      entities.urls.forEach( u => {
        if (u.expanded_url.indexOf('/status/') > -1) {
          text = text.replace(u.url, '')
        }
      })
    }

    // replace + style links and mentions
    text = twitterText.autoLink(text, {'usernameIncludeSymbol': true})
    text = text.replace(/href=/g, 'style="text-decoration: none;color:#6CCCF9;" href=')

    // replace + style emoji
    text = twemoji.parse(text)
    text = text.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"')


    const tweetProps = {
      'className': 'tweet-text',
      'style': styles.tweetText,
      'dangerouslySetInnerHTML': {
        '__html': text
      }
    }

    return <p {... tweetProps} />
  }
}

Text.propTypes = {
  'data': React.PropTypes.object
}

Text.displayName = 'Text'


export default Text
