/**
 * Write your solution in this file.
 *
 * You can execute and test your answer by either pressing 'Try Answer' in the
 * side panel, or by running `node test_answer.js <test_case_path>` on the
 * command line.
 * For example:
 *      node test_answer.js inputs/one_bot_accesses.json
 *
 * You can organize your code as you wish (eg, use auxiliary files) as long as
 * `test_answer.js` produces the expected output.
 */
const fs = require('fs');

const fetchData = (filepath) => {
  const data = fs
    .readFileSync(filepath)
    .toString()
    .split("\n");
  return data;
};

const enqueue = (userEntries, datum) => {
  const user = datum.user;
  const timestamp = datum.timestamp;
  const action = datum.action;

  userEntries[user].queue.push({ action: action, timestamp: timestamp });
  userEntries[user].counter.total++
  if (userEntries[user].counter[datum.action]) {
    userEntries[user].counter[datum.action] += 1;
  } else {
    userEntries[user].counter[datum.action] = 1;
  }
};

const dequeue = (userEntries, datum) => {
  const user = datum.user;
  const shiftedObj = userEntries[user].queue.shift();
  const shiftedObjAction = Object.values(shiftedObj)[0];
  userEntries[user].counter[shiftedObjAction] -= 1;
  userEntries[user].counter.total -= 1;
};

// generate counts for each type of user action 
// for a 4 minute (240 s) window via a queue
// if during any 4 minute window, the total count >= 10 and
// one same action has occurred 5 times 
// push name in result array -- return only unique users in result
const findBot = (data) => {
  let result = [];
  const userEntries = {};
  data.forEach(datum => {
    datum = JSON.parse(datum);
    const user = datum.user;
    const timestamp = datum.timestamp;
    const action = datum.action;
    if (!userEntries[user]) {
      userEntries[user] = { queue: [{ action: action, timestamp: timestamp }], counter: { total: 1 } };
      userEntries[user].counter[action] = 1;
      return;
    } else {
      let lastIdx = userEntries[user].queue.length - 1;
      let range = Math.abs(userEntries[user].queue[0].timestamp - userEntries[user].queue[lastIdx].timestamp);
      while (range > (4 * 60)) {

        dequeue(userEntries, datum);
        lastIdx = userEntries[user].queue.length - 1;
        range = Math.abs(userEntries[user].queue[0].timestamp - userEntries[user].queue[lastIdx].timestamp);
      }
      enqueue(userEntries, datum);
    }

    // create arr of action counts excluding total actions
    const actionCts = Object.values(userEntries[user].counter);
    actionCts.shift();
    if (userEntries[user].counter.total >= 10 &&
      actionCts.some(ct => ct >= 5)) {
      result.push(user);
    }
    return;
  });
  result = [... new Set(result)];
  return result;
}

module.exports = {
  /**
   * Implement your solution here.
   *
   * @param input_file_path - path to the file with log information
   * @return list of bot names sorted alphabetically
   */
  bot_detection: function (input_file_path) {
    const data = fetchData(input_file_path);
    data.pop();
    return findBot(data);
  },
};