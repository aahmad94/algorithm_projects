// Given two strings needle and haystack, return the index of
// the first occurrence of needle in haystack, or -1 if needle
// is not part of haystack.

// time complexity = n(m-1) where n is length of the haystack
// and m is length of the needle
// evident in ex. w/ haystack = 'mississississississississippi',
// needle = 'issip'
const strStr = (haystack, needle) => {
    for (let i=0; i<haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let k=0, j=i; k<needle.length; k++, j++) {
                if (haystack[j] !== needle[k]) {
                    break;
                };
                if (k === needle.length-1) {
                    return i;
                }
            }
        }
    }
    return -1;
};