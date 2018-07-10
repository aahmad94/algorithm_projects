function electionWinner(votes) {
  const voteCts = {};
  const sortedVoteCts = [];
  for (let i = 0; i < votes.length; i++) {
    voteCts[votes[i]] = (voteCts[votes[i]] || 0) + 1;
  }
  for (const candidate in voteCts) {
    sortedVoteCts.push([candidate, voteCts[candidate]]);
  }
  sortedVoteCts.sort(function (a, b) {
    return a[0] - b[0];
  });
  console.log({
    sortedVoteCts
  });

}
