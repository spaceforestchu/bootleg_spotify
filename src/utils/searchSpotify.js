import axios from 'axios';

const SearchSpotify = (searchItem) => new Promise ((resolve, reject) => {
  const result = axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`);

  result
    .then( ({data}) => {
      resolve(data);
    })
    .catch( (err) => {
      reject(err);
    })

});


// const SearchSpotify = (searchItem) => {
//   return new Promise ((resolve, reject) => {
//     axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=artist`)
//       .then( ( {data} ) => {
//         resolve(data);
//       })
//       .catch( (err) => {
//         reject(err);
//       })
//   });
// }

export default SearchSpotify;
