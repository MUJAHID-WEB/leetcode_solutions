//238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

var productExceptSelf = function(nums){
    const n= nums.length
    let leftProduct = new Array(n).fill(1)
    let rightProduct = new Array(n).fill(1)
    let result = new Array(n)

// Let's go through the steps of the algorithm and show the output for the input nums = [1, 2, 3, 4]:

// Initialize arrays leftProducts, rightProducts, and result:

// leftProducts: [1, 1, 1, 1]
// rightProducts: [1, 1, 1, 1]
// result: [undefined, undefined, undefined, undefined]
// Calculate products of all elements to the left of each element:


    for(let i = 1; i<n; i++){
        leftProduct[i] = leftProduct[i-1] * nums[i-1]
    }

// Calculate products of all elements to the left (leftProduct):

// i = 1: Calculate the product of elements to the left of nums[1] (2).
// leftProduct[1] = leftProduct[0] * nums[0] = 1 * 1 = 1
// i = 2: Calculate the product of elements to the left of nums[2] (3).
// leftProduct[2] = leftProduct[1] * nums[1] = 1 * 2 = 2
// i = 3: Calculate the product of elements to the left of nums[3] (4).
// leftProduct[3] = leftProduct[2] * nums[2] = 2 * 3 = 6
// After the loop, leftProduct = [1, 1, 2, 6].

    for (let i=n-2; i>=0; i--){
        rightProduct[i] = rightProduct[i+1]* nums[i+1]
    }

// Calculate products of all elements to the right (rightProduct):

// i = 2: Calculate the product of elements to the right of nums[2] (3).
// rightProduct[2] = rightProduct[3] * nums[3] = 1 * 4 = 4
// i = 1: Calculate the product of elements to the right of nums[1] (2).
// rightProduct[1] = rightProduct[2] * nums[2] = 4 * 3 = 12
// i = 0: Calculate the product of elements to the right of nums[0] (1).
// rightProduct[0] = rightProduct[1] * nums[1] = 12 * 2 = 24
// After the loop, rightProduct = [24, 12, 4, 1].

    for (let i=0; i<n; i++){
        result[i] = leftProduct[i] * rightProduct[i]
        
    }

// Calculate the product of all elements except the current one (result):

// i = 0: Calculate the product of all elements except nums[0] (1).
// result[0] = leftProduct[0] * rightProduct[0] = 1 * 24 = 24
// i = 1: Calculate the product of all elements except nums[1] (2).
// result[1] = leftProduct[1] * rightProduct[1] = 1 * 12 = 12
// i = 2: Calculate the product of all elements except nums[2] (3).
// result[2] = leftProduct[2] * rightProduct[2] = 2 * 4 = 8
// i = 3: Calculate the product of all elements except nums[3] (4).
// result[3] = leftProduct[3] * rightProduct[3] = 6 * 1 = 6
// After the loop, result = [24, 12, 8, 6].

    return result
}

console.log(productExceptSelf([1,2,3,4]))

// Let's go through the steps of the algorithm and show the output for the input nums = [1, 2, 3, 4]:

// Initialize arrays leftProducts, rightProducts, and result:

// leftProducts: [1, 1, 1, 1]
// rightProducts: [1, 1, 1, 1]
// result: [undefined, undefined, undefined, undefined]
// Calculate products of all elements to the left of each element:

// For the first element (1), there are no elements to its left.
// For the second element (2), the product of elements to its left is 1.
// For the third element (3), the product of elements to its left is 1 * 2 = 2.
// For the fourth element (4), the product of elements to its left is 1 * 2 * 3 = 6.
// leftProducts: [1, 1, 2, 6]
// Calculate products of all elements to the right of each element:

// For the fourth element (4), there are no elements to its right.
// For the third element (3), the product of elements to its right is 4.
// For the second element (2), the product of elements to its right is 4 * 3 = 12.
// For the first element (1), the product of elements to its right is 4 * 3 * 2 = 24.
// rightProducts: [24, 12, 4, 1]
// Calculate the product of all elements except the current one:

// For the first element (1), result[0] = leftProducts[0] * rightProducts[0] = 1 * 24 = 24.
// For the second element (2), result[1] = leftProducts[1] * rightProducts[1] = 1 * 12 = 12.
// For the third element (3), result[2] = leftProducts[2] * rightProducts[2] = 2 * 4 = 8.
// For the fourth element (4), result[3] = leftProducts[3] * rightProducts[3] = 6 * 1 = 6.
// result: [24, 12, 8, 6]
// Therefore, the output for nums = [1, 2, 3, 4] is [24, 12, 8, 6].