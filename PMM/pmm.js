
//Average Function
function calculateAverage(list) {
    let sumaList = list.reduce(
        function(accumulated, newElement ) {
            return accumulated + newElement;
        }
    );
    let average = sumaList/list.length;
    return average
}

//Median Function
function isPair(list) {
    let pair = list.length % 2 === 0 ? true : false;
    return pair;
}

function calculateMedian(list) {
    let median;
    list = list.sort((a,b) => a-b);
    let middle = parseInt(list.length/2);
    if(isPair(list)){
        median = (list[middle-1] + list[middle])/2
    }
    else{
        median = list[middle]
    }
    return median;
}

//Mode function

function calculateMode(list) {
    const LISTCOUNT = {};
    list.map(
        function(element) {
            LISTCOUNT[element] ? LISTCOUNT[element]+=1: LISTCOUNT[element] =1;
        }
    );
    let finalArray = Object.entries(LISTCOUNT).sort((a,b) => a[1]-b[1]);
    let mode = finalArray[finalArray.length-1];
    return parseInt(mode[0]);
}