import axios from "axios";

const KEY = "AIzaSyDpOug6y3HbBmrwCZND_bBN8aj6IGjFYS0";

// make a preconfigured instance of axios that has a base url and some default parameters loaded into it.
// type parameter to axios object to only search for video and not playlists.
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
