const { Router } = require('express');
const populateList = Router();
const YTKEY = process.env.REACT_APP_YTKEY;
const axios = require('axios').default;


  populateList.get('/:searchVids', (req, res) => {
    const {searchVids} = req.params;
    console.log(process.env.REACT_APP_YTKEY);
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=under10hours_${searchVids}&key=${process.env.REACT_APP_YTKEY}`)
        .then(({data}) => {
            res.send(data);
        })
        .catch(error => {
          console.log(error);
        })

  })




module.exports = { populateList };