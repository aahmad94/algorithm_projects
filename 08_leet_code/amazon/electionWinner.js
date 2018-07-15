function electionWinner(votes) {
  const voteCts = {};
  const sortedVoteCts = [];
  let max = 0;
  for (let i = 0; i < votes.length; i++) {
    voteCts[votes[i]] = (voteCts[votes[i]] || 0) + 1;
    if (voteCts[votes[i]] > max) max = voteCts[votes[i]]; 
  }

  for (const candidate in voteCts) {
    if (voteCts === max) {
      sortedVoteCts.push([candidate, voteCts[candidate]]);
    }
  }

  sortedVoteCts.sort();

  return sortedVoteCts[sortedVoteCts.length - 1] ? sortedVoteCts[sortedVoteCts.length - 1] : -1;
}
