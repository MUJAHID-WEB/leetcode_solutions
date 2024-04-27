const arr = [1,2,3, 'Mujahid']

arr.push(4) // add 4 at end
arr.unshift(0) // add 0 at start

arr.pop() // remove from end
arr.shift() // remove from start

for(const item of arr){
    console.log(item)
}

// map, filter, reduce, concat, slice, splice