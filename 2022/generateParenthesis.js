let generateParenthesis = (n) => {
    const parens = [];
    recur(n, 1, 0, '(', parens);
    return parens;
}

let recur = (n, l, r, str, parens) => {
    if (str.length >= n*2) {
        parens.push(str);
        return;
    };
    
    if (l < n) {
        recur(n, l+1, r, str + '(', parens);
    }

    if (r < l) {
        recur(n, l, r+1, str + ')', parens);
    };
};