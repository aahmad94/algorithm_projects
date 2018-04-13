/**
 * Write your solution in this file.
 *
 * You can execute and test your answer by either pressing 'Try Answer' in the
 * side panel, or by running `node test_answer.js <test_case_path>` on the
 * command line.
 * For example:
 *      node test_answer.js inputs/large.json
 *
 * You can organize your code as you wish (eg, use auxiliary files) as long as
 * `test_answer.js` produces the expected output.
 */

const fs = require("fs");
const kLaregestRequests = require("./k_largest_requests.js");

const fetchData = (filepath) => {
  const data = fs
    .readFileSync(filepath)
    .toString()
    .split("\n");
  return data;
};

const parseUrl = (datum) => {
  const url = datum.split(" ")[6];
  return url;
};

const isGetRequest = (datum) => {
  const requestType = datum.split(" ")[5];
  if (requestType === `"GET`) return true;
  return false;
};

const isStatusOk = (datum) => {
  const status = datum.split(" ")[8];
  if (status === "200") return true;
  return false;
};

const isUrlGif = (url) => {
  const bool = url.search(/\bgif\b/g) !== -1;
  return bool;
};

const parseRequestTime = (datum) => {
  let reqTime = datum.match(/(\d+(\.\d+)?)/g);
  reqTime = reqTime[reqTime.length - 1];
  return reqTime;
};

const genReqObjs = (data) => {
  const reqObjs = [];
  for (let i = 0; i < data.length; i++) {
    const reqObj = {};
    const datum = data[i];
    reqObj["reqTime"] = parseRequestTime(datum);
    reqObj["url"] = parseUrl(datum);
    if (!isUrlGif(reqObj.url) && isGetRequest(datum) && isStatusOk(datum)) {
      reqObjs.push(reqObj);
    }
  }
  return reqObjs;
};

const calcAvg = (reqObjs) => {
  const avgdReqObjs = [];
  const sumReqTime = {};
  for (let i = 0; i < reqObjs.length; i++) {
    const reqObj = reqObjs[i];
    if (sumReqTime[reqObj.url.toLowerCase()]) {
      sumReqTime[reqObj.url].length += 1;
      sumReqTime[reqObj.url].reqTime += parseFloat(reqObj.reqTime);
    } else {
      sumReqTime[reqObj.url.toLowerCase()] = { reqTime: parseFloat(reqObj.reqTime), length: 1 };
    }
  }
  Object.keys(sumReqTime).forEach(url => {
    sumReqTime[url].reqTime = sumReqTime[url].reqTime / sumReqTime[url].length;
    avgdReqObjs.push({ url: url, reqTime: sumReqTime[url].reqTime });
  });

  return avgdReqObjs;
};

module.exports = {
  /**
   * Implement your solution here.
   *
   * @param {string} log_path - String with path of Nginx access logfile.
   * @return {array} A list of strings, representing the URLs with the largest average processing time.
   */
  analyze_requests: function (log_path) {
    const data = fetchData(log_path);
    data.pop();
    const reqObjs = genReqObjs(data);
    const inputs = calcAvg(reqObjs);
    const comparator = (val1, val2) => {
      if (val1.reqTime < val2.reqTime) return -1;
      if (val1.reqTime === val2.reqTime) return 0;
      if (val1.reqTime > val2.reqTime) return 1;
    };
    const lrgReqs = kLaregestRequests(inputs, 15, comparator);

    // sort 15 largest items 
    const srtdReqObjs = lrgReqs.sort((a, b) => {
      if (a.reqTime < b.reqTime) {
        return 1;
      } else if (a.reqTime === b.reqTime) {
        return 0;
      } else if (a.reqTime > b.reqTime) {
        return -1;
      }
    });

    const srtdUrls = srtdReqObjs.map(reqObj => {
      return reqObj.url;
    });
    return srtdUrls;
  }
};
