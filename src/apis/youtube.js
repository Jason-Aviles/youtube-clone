import axios from 'axios'

const KEY = 'AIzaSyAOjsP2KUwfmyQc88W-ApCJePOLkSMH5vA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:15,
        key:KEY

    }
})


