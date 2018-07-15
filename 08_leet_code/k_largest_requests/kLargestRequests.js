const BinaryMinHeap = require('./minHeap.js');

const kLargestRequests = (requests, k, comparator) => {
  if (k > requests.length) k = requests.length;
  const minHeap = new BinaryMinHeap(comparator);
  for (let i = 0; i < k; i++) { minHeap.insert(requests[i]); }
  for (; k < requests.length; k++) {
    if (comparator(requests[k], minHeap.store[0]) === 1) {
      minHeap.insert(requests[k]);
      minHeap.extractMin();
    }
  }
  return minHeap.store.map(requestObject => {
    return requestObject.url;
  });
};

module.exports = kLargestRequests;

// const comparator = (val1, val2) => {
//   if (val1.requestTime < val2.requestTime) return -1;
//   if (val1.requestTime === val2.requestTime) return 0;
//   if (val1.requestTime > val2.requestTime) return 1;
// };

// const requests = [
//   {requestTime: 50, url: "url50"},
//   {requestTime: 72, url: "url72"},
//   {requestTime: 300, url: "url300"},
//   {requestTime: 700, url: "url700"},
//   {requestTime: 732, url: "url732"},
//   {requestTime: 800, url: "url800"},
//   {requestTime: 912, url: "url912"},
//   {requestTime: 9120, url: "url9120"},
// ];

// console.log(kLargestRequests(requests, 6, comparator));

// function fetchData(filename) {
//   const data = fs
//     .readFileSync(filename)
//     .toString()
//     .split("\n");

//   return data;
// }


// const parseUrl = (datum) => {
//   let url = datum.match(/"(.*?)"/)[1];
//   url = url.split(" ");
//   url = url[0].concat(" ", url[1]);
//   console.log(url);
//   return url;
// };

// const isUrlGif = (url) => {
//   const bool = url.search(/\bgif\b/g) !== -1;
//   console.log(bool);
//   return bool;
// };

// const parseRequestTime = (datum) => {
//   let requestTime = datum.match(/(\d+(\.\d+)?)/g);
//   requestTime = requestTime[requestTime.length - 1];
//   console.log(requestTime);
//   return requestTime;
// };

// const generateRequestObjects = (data) => {
//   const requestObjects = [];
//   for (let i = 0; i < data.length; i++) {
//     const datum = data[i];
//     const requestObject = {};
//     requestObject["requestTime"] = parseRequestTime(datum);
//     requestObject["url"] = parseUrl(datum);
//     if (!isUrlGif(requestObject.url)) {
//       requestObjects.push(requestObject);
//     }
//   }
//   return requestObjects;
// };

// const data = fetchData("./data.txt");
// const requestObjects = (generateRequestObjects(data));
// const largestRequests = kLargestRequests(requestObjects, 1, comparator);
// console.log({largestRequests});
