//Function to bubble sort

//inp   [33,9,2,46,22,-2,43,90,3]
//op    [-2, 2, 3, 9, 22, 33, 43, 46, 90]

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([33,9,2,46,22,-2,43,90,3,1]);