function maxSubarraySum(nums) {
    let maxSum = nums[0]; // Initialize max sum with the first element
    let currentSum = nums[0]; // Start tracking the sum

    for (let i = 1; i < nums.length; i++) {
        // If currentSum + nums[i] is greater, it means the subarray benefits from adding nums[i].
        // If nums[i] is greater than currentSum + nums[i], it means the previous sum was a burden, so we restart the subarray from nums[i].
        // -1,-2,6,3 => max[6, 6-3] => 6 and hence discard the previous sum and move on with 6 as the new current sum
        
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum); // Update max sum if needed
    }

    return maxSum;
}

// Example Usage:
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6 (Subarray: [4, -1, 2, 1])
