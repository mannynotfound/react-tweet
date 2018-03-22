import React from 'react';
import PropTypes from 'prop-types';
import VideoJS from 'react-videojs';
import styled from 'styled-components';
import styles from './styles';

const videoStyle = `
  width: 100%;
  vertical-align: bottom;
  max-height: 508px;
  object-fit: contain;
  background: #000000;
`;

let VideoComponent = styled.video`
  ${videoStyle};
`;

if (typeof videojs !== 'undefined') {
  VideoComponent = styled.VideoJS`
    ${videoStyle};
  `;
}

const AdaptiveMedia = styled.div`
  display: inline-block;
  max-height: 508px;
  max-width: 508px;
  margin: 10px 0 0 0;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  vertical-align: top;
  text-align: center;
  width: 100%;
`;

const AdaptiveMediaBadge = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  bottom: 52px;
  left: 80px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: #fff;
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  padding: 0 5px;
  position: absolute;
  z-index: 1;
`;

class Video extends React.Component {
  render() {
    const { media, gif, autoPlay } = this.props;
    let videoSrc = '';

    media[0].video_info.variants.forEach(v => {
      if (v.url.indexOf('.mp4') > -1) {
        videoSrc = v.url;
      }
    });
    return (
      <AdaptiveMedia>
        <VideoComponent src={videoSrc} controls={!gif} autoPlay={gif || autoPlay} loop={gif}>
          {'Your browser does not support the '}
          <code>video </code>
          {'element.'}
        </VideoComponent>
        {gif ? <AdaptiveMediaBadge>GIF</AdaptiveMediaBadge> : null}
      </AdaptiveMedia>
    );
  }
}

Video.propTypes = {
  media: PropTypes.array,
  gif: PropTypes.bool,
};

Video.defaultProps = {
  media: [],
  gif: false,
};

Video.displayName = 'Video';

export default Video;
