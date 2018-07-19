const https = require('https');

// const getContent = async (cb) => {
//   const searchTerm = "spiderman";
//   const urlStr = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${searchTerm}`;
//   await https.get(urlStr, (response) => {
//   // console.log('statusCode:', response.statusCode); // statusCode: 200
//     response.on('data', (d) => {
//        cb(Array.from(JSON.parse(d).data));
//     });
//     response.on('end', () => (console.log("END")));
//   });
//   return store;
// };

// const cb = (toReturn) => {
//   return toReturn;
// };

// getContent(cb);

// // const movieData = () => {
// //   return getContent().then((data) => data);
// // };

// // movieData();

function getTopicCount(topic) {
  const params = {
    count: 0
  };
  const urlStr = `https://en.wikipedia.org/wiki/${topic}`
  https.get(urlStr, resp => {
    resp.on('data', data => {
      updateCtCB(data, params);
    });
  });
}

const updateCtCB = (data, params) => {
  console.log(data);
};

console.log(getTopicCount("pizza"));