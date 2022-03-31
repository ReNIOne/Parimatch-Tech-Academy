// ([1,2,3,4,5],[6,7,8],1) => [1,6,7,8,2,3,4,5]

function insert(arr1, arr2, index) {
    arr1.splice(index, 0, arr2);

    return arr1.flat(1)
}

console.log(insert([1, 2, 3, 4, 5], [6, 7, 8], 1));