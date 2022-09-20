 var isValid = function(s) {
    const charMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    
    const openChars = ['(', '[', '{'];    
    const queue = [];
    
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (openChars.includes(char)) {
            queue.push(char);
        } else if (queue.pop() != charMap[char]) {
            // char must be a close char
            return false
        }
    };
    
    
    if (queue.length === 0) {
        return true;
    } else {
        return false;
    };
};