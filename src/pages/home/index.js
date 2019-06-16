import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { checkSignIn, search } from '../../redux-flow/reducers/playerMusic/actionsCreators'
import SongItem from '../components/SongItem'
import Spinner from 'react-spinkit'

import { HomeContainer, SearchBox } from './styles'

class Home extends Component {
  state = {
    song: ''
  }
  componentWillMount() {
    this.props.ckeckSignIn()
  }

  getTokenPath = () => {
    let path = window.location.href
    return path.substring(path.indexOf('#'))
  }

  render() {
    const { song } = this.state
    const { musics } = this.props

    if (musics.isFetching) {
      return (<Spinner name='double-bounce' style={{ width: '100%', height: '100vh' }} />)
    }

    return (
      <HomeContainer>
        <div className='card'>
          <div className="card-content">
            <SearchBox>
              <input
                type='text'
                placeholder='Digite a música'
                onChange={(e) => this.setState({ song: e.target.value })}
                value={song} />

              <a href='/' className='waves-effect waves-light btn green'
                onClick={this.props.search(song)}>
                <FaSearch style={{ verticalAlign: 'middle' }} />
              </a>
            </SearchBox>
          </div>
        </div>

        {musics.tracksList && <div className='card card-results'>
          <div className='card-content'>
            {musics.tracksList.map((value, index) => (
              <SongItem
                key={index}
                tokenPath={this.getTokenPath()}
                songId={value._id}
                albumPhoto={value._album.images[0].url}
                albumName={value._album.name}
                songName={value._name}
                artistName={value._artists[0].name} />
            ))}
          </div>
        </div>}
      </HomeContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  musics: state.searchSong
})

const mapDispatchToProps = (dispatch) => ({
  ckeckSignIn: () => dispatch(checkSignIn()),
  search: (song) => (e) => {
    e.preventDefault()
    dispatch(search(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)