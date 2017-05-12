import React, { Component, PropTypes } from 'react';
import Styles from './SearchBar.css';

class SearchBar extends Component {
  render() {

    const {updateText, fetchSongs} = this.props;

    return (
      <div className={Styles.root}>
        <input className={Styles.input} onChange={(event) => { updateText(event.target.value) } }/>
        <button className={Styles.button} onClick={fetchSongs}>Get Songs</button>
    </div>
    )
  }
}

SearchBar.propTypes = {
  updateText: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired
};

export default SearchBar;
