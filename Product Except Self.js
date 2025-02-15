function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
      
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
      result[i] = leftProduct; // Store left-side product
      leftProduct *= nums[i];  // Update leftProduct
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct; // Multiply by right-side product
      rightProduct *= nums[i];   // Update rightProduct
  }

  return result;
}

console.log(productExceptSelf([1,2,4,6]))

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
