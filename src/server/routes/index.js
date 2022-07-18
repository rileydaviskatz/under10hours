const { populateList } = require('./youtubevids.js');

module.exports = (app) => {
    app.use('/server/routes/youtubevids/populate', populateList);
}