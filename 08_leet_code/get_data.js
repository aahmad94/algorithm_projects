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
  // const https = require('https');
  const params = {
    count: 0
  };
  const urlStr = `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`;
  https.get(urlStr, res => {
    res.on('data', data => {
      let strData = data.toString();
      updateCts(strData, params, topic);
    });
    res.on('end', () => (console.log(params.count)));
  }).on('error', (error) => {
    console.error(0);
  });
}

const updateCts = (strData, params, topic) => {
  const regExp = new RegExp(topic, "g");
  const count = (strData.match(regExp) || []).length;
  params.count += count;
  // process.stdout.write(strData);
};

console.log(getTopicCount("france"));