import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlayerMusic } from './styles'
import { checkSignIn, playTrack } from '../../redux-flow/reducers/playerMusic/actionsCreators'

class Player extends Component {
  state = {
    songId: this.props.match.params.songId
  }

  async componentWillMount() {
    await this.props.checkSignIn()
    this.props.playTrack(this.state.songId)
  }

  render() {
    const { player } = this.props
    return (
      <PlayerMusic>
        {player.success && <div className='card'>
          <div className='card-content'>
            <div className='Player-left'>
              <img src={player.track.album.images[1].url} alt='' />
            </div>
            <div className='Player-right'>
              <audio controls>
                <source src={player.track.preview_url} />
              </audio>
              <h4>{player.track.name}</h4>
              <p>{player.track.artists[0].name}</p>
            </div>
          </div>
        </div>}
      </PlayerMusic>
    )

  }
}

const mapStateToProps = (state) => ({
  player: state.searchSong,
})

const mapDispatchToProps = (dispatch) => ({
  playTrack: (songId) => dispatch(playTrack(songId)),
  checkSignIn: () => dispatch(checkSignIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)