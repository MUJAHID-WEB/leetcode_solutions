
// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


var reverseVowels = function(s){
    const vowels = new Set (['a','e','i','o','u','A','E','I','O','U'])
    let left = 0, right = s.length -1
    const sArray = s.split('')

    while(left < right){
        while(left < right && !vowels.has(sArray[left])){
            left++
        }
        while(left < right && !vowels.has(sArray[right])){
            right--
        }
        if(left < right){
            [sArray[left], sArray[right]] = [sArray[right], sArray[left]]
            left++
            right--

        }
    }
    return sArray.join('')
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))

// Suppose we have the input string "hello".

// Initialization:

// We initialize two pointers, left and right, pointing to the start and end of the string respectively. So initially, left = 0 and right = 4 (the index of the last character).
// We also create a set vowels containing all the vowels: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].
// Iteration:

// We iterate through the string from both ends.
// The left pointer moves towards the right until it reaches a vowel. In this case, it stops at the first vowel 'e' at index 1.
// The right pointer moves towards the left until it reaches a vowel. In this case, it stops at the last vowel 'o' at index 4.
// Swapping:

// We swap the vowels found by the left and right pointers. So, we swap 'e' at index 1 with 'o' at index 4.
// After swapping, the string becomes "holle".
// Then, we increment the left pointer (to 2) and decrement the right pointer (to 3).
// Continued Iteration and Swapping:

// Now, the left pointer moves towards the right until it reaches a vowel. In this case, it stops at the vowel 'o' at index 3.
// The right pointer moves towards the left until it reaches a vowel. In this case, it stops at the vowel 'e' at index 2.
// We swap the vowels found by the left and right pointers. So, we swap 'o' at index 3 with 'e' at index 2.
// After swapping, the string becomes "holle" again.
// Final Result:

// The left pointer (2) is now greater than the right pointer (3), which means we have completed traversing the string.
// The final string with reversed vowels is "holle".
// Return:

// We join the modified array back to a string and return it. So, the function returns "holle".
// This process ensures that only the vowels in the string are reversed while keeping the consonants in their original positions.