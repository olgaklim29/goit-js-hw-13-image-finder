import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY='23232157-ed61124855b6c79290677e8dc';

function getPictures(query, page) {
  return axios.get(`?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY}`)
  
}

export default getPictures;