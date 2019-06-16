import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SingItem } from './styles'

export default class SongItem extends Component {
  render() {
    const { songName, artistName, albumPhoto, songId, tokenPath } = this.props
    return (
      <Link to={`player/${songId}${tokenPath}`}>
        <SingItem>
          <div className='SongItem-photo'>
            <img src={albumPhoto} alt='' />
          </div>
          <div className='SongItem-info'>
            <h2>{songName}</h2>
            <h3>{artistName}</h3>
          </div>
        </SingItem>
      </ Link>
    )
  }
}

SongItem.propTypes = {
  songId: PropTypes.string,
  tokenPath: PropTypes.string,
  albumPhoto: PropTypes.string,
  songName: PropTypes.string,
  artistName: PropTypes.string
}
