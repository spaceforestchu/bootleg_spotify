import React, { Component, PropTypes } from 'react';
import Styles from './SongItem.css';

class SongItem extends Component {

  render(){
    const {songData} = this.props;
    const album = songData.album;
    const albumName = songData.name;
    const albumImage = album.images[1];

    return(
      <div className={Styles.root}>
        <div className={Styles.album}>
          <img role='presenation' src={albumImage.url} />
          <span className={Styles.albumName}>{albumName}</span>
        </div>
        <div className={Styles.songAndDescription}>
          <audio controls duration src={songData.preview_url}/>
          <span className={Styles.songDescription}>Name: {songData.name}</span>
          <span className={Styles.songDescription}>Duration: {songData.duration_ms / 1000} s</span>
        </div>
      </div>
    )
  }
}


SongItem.propTypes = {
  songData: PropTypes.object.isRequired
};


export default SongItem;
