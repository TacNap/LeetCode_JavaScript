function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let ii = 0; ii < nums.length; ii++) {
            if (nums[i] === nums[ii] && i !== ii) {
                return true
            }
        }
    }
    return false
};

// Too Slow.

function containsDuplicatePerformance(nums) {
    if(nums.length <= 1) { return false }
    nums.sort();
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] === nums[i+1]) {
            return true
        } 
    }
    return false
}

module.exports = { 
    containsDuplicate,
    containsDuplicatePerformance
};