// *************** *************** *************** *************** ***************
// ***************** Comparision based Sorting Algorithms ***************  
// *************** *************** *************** *************** ***************

// 1. Bubble sort: Comparing each element with other elements
function bubble(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

// 2. Selection sort: Select minimum value and replace with the currect pointer
function selection(array) {
    var min;
    for (var i = 0; i < array.length; i++) {
        min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        // not in same position
        if (i != min) {
            var temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

// 3. Insertion sort: remove element and insert into its correct position
function insertion(array) {
    for (var i = 0; i < array.length; i++) {
        var index = i;
        for (var j = i - 1; j > -1; j--, index--) {
            if (array[index] < array[j]) {
                var temp = array[j];
                array[j] = array[index];
                array[index] = temp;
            }
        }
    }
    return array;
}

// 4. Shel sort: Shel short basically the improvement over the insertion sort.
// Shellsort’s key concept is
// that it compares distant elements first, rather than adjacent elements, as is done in the
// insertion sort

// step 1: take h which is less than n (h= floor(n/2))
// step 2: compare 0th and hth index till h
// step3: compare till h become zero

function shellSort(array) {
    var n = array.length;
    var h = Math.floor(n / 2);
    while (h >= 0) {
        for (var i = 0; i < n - h; i++) {
            if (array[i + h + 1] < array[i]) {
                var temp = array[i + h + 1];
                array[i + h + 1] = array[i];
                array[i] = temp;
            }
        }
        h--;
    }
    return array;
}
// Correct shell sort
function shellSort(arr) {
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];

            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }
    return arr;
}


// 5. Merge Sort
// Merge sort is a perfect example of a Divide and Conquer algorithm. It simply uses the 2 main steps of such an algorithm:
// Divide the unsorted list until you have N sublists. Each sublist has 1 element that is unsorted and N is the number of elements in the original array
// Conquer (merge) the sublists two at a time to produce a new sorted sublist until this includes all elements in a single sorted array
function mergeSort(array) {
    if (array.length < 2) return array;

    var middle = Math.floor(array.length / 2);
    var leftA = array.slice(0, middle);
    var rightA = array.slice(middle);

    return mergecCompareTwoArrays(mergeSort(leftA), mergeSort(rightA));

    function mergecCompareTwoArrays(left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
        }
        for (var k = leftIndex; k < left.length; k++) {
            resultArray.push(left[k]);
        }
        for (var m = rightIndex; m < right.length; m++) {
            resultArray.push(right[m]);
        }
        return resultArray;
        // concat remaining left and right array elements
        // return resultArray
        //     .concat(left.slice(leftIndex))
        //     .concat(right.slice(rightIndex));
    }
}


// 6. Quick Sort: The quicksort algorithm is a sorting algorithm that sorts an array by choosing a pivot element, 
// and partition the array around the pivot such that
function quickSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];

    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

function quickSort2(list, low, high) {
    if (high > low) {
        var pivot = partition(list, low, high); // Select Pivot element in a array
        quickSort2(list, low, pivot - 1); // Select pivot element in the left sub array
        quickSort2(list, pivot + 1, high);// Select pivot element in the right sub array
    }
}

function partition(array, low, high) {
    var pivot = array[low];
    var i = low + 1;
    var j = high;
    while (j > i) {
        while (array[i] <= pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, low, j); // Swap pivot with new pivot element
    return j;
}


function swap(array, i1, i2) {
    var temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
    return array;
}
var array = [10, 4, 12, 5, 23, 79, 2, 1, 23, 45, 2, 34, 12, 24, 56, 24, 17];
quickSort2(array, 0, array.length - 1);


// *************** *************** *************** *************** ***************
// ***************** Linear Sorting Algorithms ***************  ***************
// *************** *************** *************** *************** ***************

// 1. Counting Sort: This will count the occurance of elements and create a new array with those occurances and push in to
// those indexes
function countSort(array) {
    var countArray = [];
    var min = Math.min(...array);
    var max = Math.max(...array);

    for (var index = 0; index < max + 1; index++) {
        countArray[index] = 0;
    }
    for (var value of array) {
        countArray[value] = countArray[value] + 1;
    }
    var i = 0;
    for (index = min; index <= max; index++) {
        var value = countArray[index];
        while (value > 0) {
            array[i] = index;
            i++;
            value--;
        }
    }

    return array;
}


// 2. Radix sort:
function radixSort(array) {
    var max = Math.max(...array);
    var numberOfDigits = `${max}`.length;
    function asInteger(num) {
        return Math.abs(Math.trunc(num));
    }
    function digitAtPosition(num, pos) {
        return Math.floor(asInteger(num) / Math.pow(10, asInteger(pos))) % 10;
    }
    for (var index = 0; index < numberOfDigits; index++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (i = 0; i < array.length; i++) {
            buckets[digitAtPosition(array[i], index)].push(array[i]);
        }
        array = [].concat(...buckets);
    }
    return array;
}

// Tree sort
// Tree sort uses a binary search tree. It involves scanning each element of the input and placing it
// into its proper position in a binary search tree. This has two phases:
// • First phase is creating a binary search tree using the given array elements.
// • Second phase is traversing the given binary search tree in inorder, thus resulting in a
// sorted array

// Tree sort and heap sort are based on tree and Topological Sort based on graph. So will be learnt after tree.