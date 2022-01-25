//Function to selection sort

//inp   [33,9,2,46,22,-2,43,90,3]
//op    [-2, 2, 3, 9, 22, 33, 43, 46, 90]

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        var lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]) lowest = j;
       }

        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([33,9,2,46,22,-2,43,90,3]);