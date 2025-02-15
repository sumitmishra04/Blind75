function topK(arr, k) {
    let map = {};
    const keys = []
    let maxCount = 0

    for (let i =0; i< arr.length; i++) {
        const num = arr[i];
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num] = map[num] + 1
        }
    }
    
    const heap = []
    Object.entries(map).forEach((key, val) => {
        heap.push([key[1], key[0]])
        heap.sort((a, b) => b[0] - a[0])
    })


    return heap.slice(0,k).map(item => item[1]);
}

console.log(topK([1,1,1,1,1,7,7,17], 2)); // [1,7]
