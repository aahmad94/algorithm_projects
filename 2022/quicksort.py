# avg time complexity O(nlog(n))
# space O(n)

def quick_sort(array):
    if len(array) <= 1:
        return array
    else:
        pivot = array[0]
        less = [x for x in array[1:] if x <= pivot]
        greater = [x for x in array[1:] if x > pivot]
        return quick_sort(less) + [pivot] + quick_sort(greater)

# avg time O(nlogn)
# avg space O(log(n))
def quick_sort_in_place(array, start, end):
    if start >= end:
        return
    pivot_index = partition(array, start, end)
    quick_sort_in_place(array, start, pivot_index - 1)
    quick_sort_in_place(array, pivot_index + 1, end)

def partition(array, start, end):
    pivot = array[end]
    pivot_index = start
    for i in range(start, end):
        if array[i] <= pivot:
            array[i], array[pivot_index] = array[pivot_index], array[i]
            pivot_index += 1
    array[pivot_index], array[end] = array[end], array[pivot_index]
    return pivot_index