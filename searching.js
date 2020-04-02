// ****************************************************
// ***************Searching ***************************
// ****************************************************

// ****************************************************
// ***************Searching Algorithms ****************
// ****************************************************

// *************** 1. Linear Search algorithms ***************
function linearSerach(array, item) {
    for(var index in array) {
        if (array[index] == item) {
            return index;
        }
    }
    return -1;
}

// *************** 2. Ordered Linear search algorithms ***************

function orderedLinearSearch(array, item) {
    for(var index in array) {
        if (array[index] == item) {
            return index;
        } else if (array[index] > item) {
            return -1;
        }
    }
    return -1;
}

// *************** 3. Binary search algorithms ***************

// Search a sorted array by repeatedly dividing the search interval in half. 
// Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle 
// of the interval, narrow the interval to the lower half.

// Algorithms:
// Compare x with the middle element.
// If x matches with middle element, we return the mid index.
// Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
// Else (x is smaller) recur for the left half.

function binarySearch(array, item) {
    var low = 0;
    var high = array.length - 1;
    var mid = Math.floor((high - low) / 2);
    if (mid > item) {
        return binarySearch(array.slice(0, mid));
    } else if (mid < item) {
        return binarySearch(array.slice(mid));
    } else if (mid == item) {
        return mid;
    } else {
        return -1;
    }
}

// *************** 4. Interpolation search ***************
// Interpolation is a statistical method by which related known values are used to estimate an unknown price or potential yield of a security

// Interpolation gives you the approximation if the data is discreate in nature

// Similar to binary search, interpolation search can only work on a sorted array. It places a probe in a calculated position on each iteration. If the probe is right on the item we are looking for, the position will be returned; otherwise, the search space will be limited to either the right or the left side of the probe.
// The probe position calculation is the only difference between binary search and interpolation search.
// In binary search, the probe position is always the middlemost item of the remaining search space.
// In contrary, interpolation search computes the probe position based on this formula:

// Algorithms:
// Step 1 − Start searching data from middle of the list.
// Step 2 − If it is a match, return the index of the item, and exit.
// Step 3 − If it is not a match, probe position.
// Step 4 − Divide the list using probing formula and find the new midle.
// Step 5 − If data is greater than middle, search in higher sub-list.
// Step 6 − If data is smaller than middle, search in lower sub-list.
// Step 7 − Repeat until match.

function interpolationSearch(array, item) {
    var mid;
    var low = 0;
    var high = array.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) * ((item - array[low]) / (array[high] - array[low])));
        if (item == array[mid])
            return mid;
        if (item < array[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

console.log(linearSerach([1, 2, 3, 4, 6, 7, 8], 8));