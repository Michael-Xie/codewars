# Your task is to make function, which returns the sum of a sequence of integers.

# The sequence is defined by 3 non-negative values: begin, end, step.

# If begin value is greater than the end, function should returns 0

# Examples

# sequenceSum(2,2,2) === 2
# sequenceSum(2,6,2) === 12 // 2 + 4 + 6
# sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
# sequenceSum(1,5,3) === 5 // 1 + 4

def sequence_sum(begin_number, end_number, step):
    #your code here
    if begin_number > end_number:
        return 0
        
    else:
        return begin_number + sequence_sum(begin_number + step, end_number, step)