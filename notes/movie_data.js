const https = require('https');

const getContent = async (cb) => {
  const searchTerm = "spiderman";
  const urlStr = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${searchTerm}`;
  await https.get(urlStr, (response) => {
  // console.log('statusCode:', response.statusCode); // statusCode: 200
    response.on('data', (d) => {
       cb(Array.from(JSON.parse(d).data));
    });
    response.on('end', () => (console.log("END")));
  });
  return store;
};

const cb = (toReturn) => {
  return toReturn;
};

getContent(cb);

// const movieData = () => {
//   return getContent().then((data) => data);
// };

// movieData();
