def is_valid(self, s: str) -> bool:
    open_list = ['[', '(', '{']
    close_to_open = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    open_queue = [];
    
    for char in s:
        if char in open_list:
            open_queue.append(char)
        elif len(open_queue):
            poppedOpen = open_queue.pop()
            mappedOpen = close_to_open[char]
            if poppedOpen != mappedOpen:
                return False
        else:
            return False
            
    if len(open_queue) == 0:
        return True
    else:
        return False
        