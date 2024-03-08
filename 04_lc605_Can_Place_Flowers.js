// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

var canPlaceflowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      let nextEmpty = i === flowerbed.length -1 || flowerbed[i + 1] === 0;

      if (prevEmpty && nextEmpty) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n
};


console.log( canPlaceflowers ([1,0,0,0,1], 1))
console.log( canPlaceflowers ([1,0,0,0,1], 2))

// Imagine you have a flowerbed represented by an array where each element indicates whether the corresponding plot is empty (0) or already contains a flower (1). Now, you want to plant new flowers in this flowerbed without violating the rule that no two adjacent plots can have flowers.

// Here's how the function works:

// Initialization:

// Initialize a variable count to keep track of the number of flowers planted.
// Iteration through the Flowerbed:

// Loop through each plot in the flowerbed array.
// Checking Empty Plots:

// For each plot, check if it's empty (0). If it's not empty, we don't need to plant a flower there, so we move on to the next plot.
// Checking Adjacent Plots:

// If the current plot is empty, check if the previous and next plots are also empty or if they are out of bounds (meaning there are no adjacent plots). We need to ensure that no two adjacent plots have flowers.
// If both the previous and next plots are empty or if the current plot is at either end of the flowerbed array, it means we can plant a flower in the current plot without violating the rule.
// Planting Flowers:

// If conditions permit, plant a flower in the current plot by setting its value to 1, indicating that it's no longer empty.
// Increment the count variable to keep track of the number of flowers planted.
// Checking if Enough Flowers are Planted:

// After iterating through all plots in the flowerbed, check if the number of flowers planted (count) is greater than or equal to the required number of new flowers (n).
// If enough flowers are planted to satisfy the requirement (count >= n), return true.
// If not (count < n), return false.
// This function essentially iterates through the flowerbed, checks each plot to see if it's eligible for planting a flower, plants flowers where possible, and then checks if enough flowers are planted to satisfy the requirement. Finally, it returns true if enough flowers are planted and false otherwise.