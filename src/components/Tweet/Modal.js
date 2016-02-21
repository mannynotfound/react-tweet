import React from 'react'
import Header from './Header'
import Text from './Text'
import Media from './Media'
import Footer from './Footer'
import styles from './styles'
import {cloneDeep} from './utils'


class Modal extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  close () {
    this.context.closeModal()
  }

  render () {
    if (typeof window === "undefined") return null

    let {data, modalIndex} = this.props, isRT = false
    let MediaComponent = null

    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status
      isRT = true
    }

    let media = data.entities.media[modalIndex]

    if (data.extended_entities && data.extended_entities.media) {
      media = data.extended_entities.media[modalIndex]
    }

    let tweetStyle = cloneDeep(styles.tweet)
    tweetStyle.padding = 0
    let contentStyle = cloneDeep(styles.content)
    contentStyle.padding = styles.tweet.padding

    let modalWrap = {
      'position': 'relative',
      'display': 'inline-block',
      'verticalAlign': 'middle',
      'width': media.sizes.large.w,
      'margin': '0 auto',
      'zIndex': 20,
      'minWidth': '590px'
    }

    let imgStyle = {
      'width': 'auto',
      'margin': '0 auto',
      'display': 'block'
    }

    let imgWrapStyle = {
      'width': '100%',
      'background': 'black'
    }

    if (media.sizes.large.h > window.innerHeight) {
      let newHeight = (window.innerHeight / 100) * 80

      imgStyle = {
        'height': `${newHeight}px`,
        'width': 'auto',
        'display': 'block',
        'margin': '0 auto'
      }
    }

    return (
      <div className="Modal" style={styles.Modal}>
        <span style={{'height': '100%', 'display': 'inline-block', 'verticalAlign': 'middle'}} />
        <div className="ModalClose" style={styles.ModalClose} onClick={this.close.bind(this)} />
        <div className="Modal-wrap" style={modalWrap}>
          <div className="tweet" style={tweetStyle}>
            <div className="media-wrap" style={imgWrapStyle}>
              <img src={media.media_url} style={imgStyle} />
            </div>
            <div className="content" style={contentStyle}>
              <Header data={data} />
              <Text data={data} />
              <Footer data={data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.contextTypes = {
  'closeModal': React.PropTypes.func
}

Modal.propTypes = {
  'data': React.PropTypes.object,
  'active': React.PropTypes.number
}

Modal.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'active': 0
}


export default Modal
