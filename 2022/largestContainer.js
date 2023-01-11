// Find two lines that together with the x-axis form a container, such that the container contains the most water.

let maxArea = (arr) => {
    
    let l = 0;
    let r = arr.length - 1;
    let maxArea = 0;
    
    // create bounding box w/ most area
    while (l != r || l < r) {
        const left = arr[l];
        const right = arr[r];
        const dist = r - l;
        
        if (left < right) {
            maxArea = left * dist > maxArea ? left * dist : maxArea;
            l++;
        } else {
            maxArea = right * dist > maxArea ? right * dist : maxArea;
            r--;
        }
    }
    
    return maxArea;
};