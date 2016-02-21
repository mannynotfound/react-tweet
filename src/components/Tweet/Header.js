import React from 'react'
import styles from './styles'
import twemoji from 'twemoji'


class Header extends React.Component {
  createTimestamp (time) {
    if (!time) return null

    const parseTwitterDate = tdate => {
      let system_date = new Date(Date.parse(tdate))
      var user_date = new Date()

      let diff = Math.floor((user_date - system_date) / 1000)
      if (diff < 59) {return diff + "s"}
      if (diff <= 3540) {return Math.round(diff / 60) + "m"}
      if (diff <= 86400) {return Math.round(diff / 3600) + "h"}
      if (diff < 604800) {return Math.round(diff / 86400) + "d"}
      return system_date.toString().substring(4, 10)
    }

    return parseTwitterDate(time)
  }

  render () {
    const {data} = this.props
    const timestamp = this.createTimestamp(data.created_at)

    let {name} = data.user
    name = twemoji.parse(name)
    name = name.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"')

    return (
      <div className="header">
        <a className="account-group" style={styles.accountGroup} href={`http://twitter.com/${data.user.screen_name}`}>
          <img className="avatar" src={data.user.profile_image_url} style={styles.avatar} />
          <strong className="fullname" style={styles.fullname}>{data.user.name}{' '}</strong>
          <span>&rlm;</span>
          <span className="username" style={styles.username}>
            <s style={styles.s}>{'@'}</s>
            <b style={styles.b}>{data.user.screen_name}</b>
          </span>
        </a>
        <small className="time" style={styles.time}>
          <a href={`http://twitter.com/${data.user.screen_name}/status/${data.id_str}`} className="tweet-timestamp" style={styles.timestamp}>
            {' • '}{timestamp}
          </a>
        </small>
      </div>
    )
  }
}

Header.defaultProps = {
  'data': {
    'user': {}
  }
}

Header.displayName = 'Header'


export default Header

