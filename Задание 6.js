let arr = [3, 3, 3]
let isEqual = true
let reference = arr[0]


arr.forEach(function(item) {
    if (item != reference) {
        isEqual = false
    }
})

console.log(isEqual)

