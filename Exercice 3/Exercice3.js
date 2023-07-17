
function BubbleSort(array){  

        const arr = array.split(", ").map(Number);//map is used to convert each string elements to a number otherwise it'll compare it lexicographically 

        for (let i = 0 ; i < arr.length ; i++){
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j+1]) {
                let temp = arr [j+1];
                arr [j+1] = arr [j];
                arr [j] = temp;
                swapped = true;
            }
        }
            if (!swapped) {
            break;
            }
       
    }
    const sortedArrayString = arr.join(", ");
    return sortedArrayString;
}

    function XYZ() {
    const randomArr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
    const arrayString = randomArr.join(", ");
    const  X = BubbleSort(arrayString);
    document.getElementById("result").innerHTML = X;
    
     ;
}
