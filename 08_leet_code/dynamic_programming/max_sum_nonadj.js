let find_max_sum_nonadjacent = function (a) {
    if (a.length < 1) {
      return 0;
    } else if (a.length === 1) {
      return a[0];
    }

    let lengthA = a.length;
    let result = [];
    result.push(a[0]);
    for (var i = 1; i < lengthA; i++) {
      result.push(Math.max(a[i], result[i - 1]));
      if (i - 2 >= 0) {
        result[i] = Math.max(result[i], a[i] + result[i - 2]);
      }
    }
    return result[lengthA - 1];
  };