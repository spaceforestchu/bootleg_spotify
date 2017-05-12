import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchSpotify from '../utils/SearchSpotify';
import SongItem from './SongItem/SongItem';
import Styles from './app.css';
import SongList from './SongList/SongList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    SearchSpotify(this.state.song)
      .then( ({tracks}) => {
        this.setState({
          tracks: tracks
        });
      })
      .catch ((err) => {
        console.log('err: ', err);
      })
  }


  render() {
    const { initialMessage, song, tracks, songPosition } = this.state;

    return (
      <div className={Styles.root}>

        <SearchBar
          updateText={(song) => {this.setState({song: song})}}
          fetchSongs={this.fetchSongs}
          />
        {tracks.items && <SongItem songData={tracks.items[songPosition]} /> }
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => {this.setState({songPosition: songPosition})}}/>}
      </div>
    );
  }
}

export default App;
