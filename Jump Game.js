// if initially the jumps are small such that you need to keep moving (i + nums[i]) to cover the distance, if you encounter a 0 then it means you already were falling short of the total distance covered  (if (i > maxReachable) return false;)
// and then happend to see a blocker and hence the joureny ends. However if the jump is big enough somewhere in between that can cover the distance at once then we can conclude it successfully.
var canJump = function(nums) {
    let maxReachable = 0; // The farthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachable) return false; // This means maxReachable could not overrun i because it got stuck somewhere because of 0 and i kept moving
        maxReachable = Math.max(maxReachable, i + nums[i]); // for every index increase its max reach; it will not increase only when nums[i] is 0.
        if (maxReachable >= nums.length - 1) return true; // jump is big enough to close the forloop and come out successfully
    }

    return true;
};

console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
console.log(canJump([0,3,1,7,4])); // false
