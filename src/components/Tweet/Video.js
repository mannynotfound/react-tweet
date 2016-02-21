import React from 'react'
import styles from './styles'


class Video extends React.Component {
  render () {
    let {media, gif} = this.props, videoSrc = ''

    media[0].video_info.variants.forEach( v => {
      if (v.url.indexOf('.mp4') > -1) videoSrc = v.url
    })

    return (
      <div className="AdaptiveMedia" style={styles.AdaptiveMedia}>
        <video src={videoSrc} controls={!gif} autoPlay={gif} loop={gif} style={styles.video}>
          {'Your browser does not support the '}<code>{'video '}</code>{'element.'}
        </video>
        {gif ?
          <div className="AdaptiveMedia-badge" style={styles.AdaptiveMediaBadge}>
            GIF
          </div> : null}
      </div>
    )
  }
}

Video.propTypes = {
  'media': React.PropTypes.array,
  'gif': React.PropTypes.bool
}

Video.defaultProps = {
  'media': [],
  'gif': false
}

Video.displayName = 'Video'


export default Video


