import React, {useState} from 'react';
import axios from 'axios';


const videoPlayer = () => {
    const [vidData, setVidData] = useState('');

    const getVideos = (searchedVid = '_') => {
        axios.get(`/server/routes/youtubevids/populate/${searchedVid}`)
            .then(({data}) => {
                console.log(data, "TEST");
                setVidData(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <h1>videos go here{getVideos()}</h1>
    )
}
export default videoPlayer;