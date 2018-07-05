const fillWater = (arr) => {
  let leftWall = arr[0];
  let rightWall = arr[arr.length - 1];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1, j = arr.length - 2; i <= j; i++, j--) {
    const minWallHeight = Math.min(leftWall, rightWall);

    if (i === j) {
      if (arr[i] <= minWallHeight) {
        leftSum += minWallHeight - arr[i];
      } else {
        leftSum = 0;
        rightSum = 0;
      }
    }

    if (arr[i] <= leftWall) {
      leftSum += minWallHeight - arr[i];
    } else {
      leftWall = arr[i];
      leftSum = 0;
    }

    if (arr[j] <= rightWall) {
      rightSum += minWallHeight - arr[j];
    } else {
      rightWall = arr[j];
      rightSum = 0;
    }
  }

  return leftSum + rightSum;
};

console.log(fillWater([1,3,1,2,3,1,2,5,1]), "should be 6");
console.log(fillWater([3, 0, 0, 2, 0, 4]), "should be 10");
