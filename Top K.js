function topK(arr, k) {
    let map = {};
    
    // Step 1: Build frequency map
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    // Step 2: Use Min-Heap to keep top k frequent elements
    let heap = [];

    Object.entries(map).forEach(([num, count]) => {
        heap.push([count, num]);
        heap.sort((a, b) => a[0] - b[0]); // Sort in ascending order (min-heap behavior)

        if (heap.length > k) heap.shift(); // Remove the smallest element if heap exceeds k
    });

    // Step 3: Extract elements from heap
    return heap.map(item => item[1]);
}

console.log(topK([1,1,1,1,1,7,7,17], 2)); // [1,7]
