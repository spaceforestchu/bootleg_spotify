import React, { PropTypes, Component } from 'react';
import Styles from './SongList.css';

const eachSong = (props) => {
  const { album, name } = props;
  const albumImage = album.images[0];
  return (
    <div className={Styles.eachSong}>
      <img role='presentation' src={albumImage.url} className={Styles.image} />
      <span className={Styles.songDescription}>Name: {name}</span>
    </div>
  )
};

const SongList = (props) => (
  <div className={Styles.root}>
    {props.listOfSongs.map((songData, index) => <div
      key={songData.uri}
      onClick={() => props.selectSong(index)}
      >
      {eachSong(songData)}
    </div>
    )}
  </div>
)

SongList.propTypes = {
  listOfSongs: PropTypes.array.isRequired,
  selectSong: PropTypes.func.isRequired,
}

eachSong.propTypes = {
  album: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default SongList;
