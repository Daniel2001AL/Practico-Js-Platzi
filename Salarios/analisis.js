// DATA //
const COLOMBIASALARY = COLOMBIA.map(
    function(person) {
        return person.salary;
    }
);
const COLOMBIASALARYSORTED = COLOMBIASALARY.sort((a,b) => a-b);

// HELPERS //
function isPair(list) {
    return (list.length % 2 === 0);
}

// MEDIAN FUNCTION //
function calculateMedian(list) {
    let median;
    // list = list.sort((a,b) => a-b);
    let middle = parseInt(list.length/2);
    if(isPair(list)){
        median = (list[middle-1] + list[middle])/2
    }
    else{
        median = list[middle]
    }
    return median;
}

// GENERAL MEDIAN //

const GENERALMEDIAN = calculateMedian(COLOMBIASALARYSORTED);

// TOP 10 MEDIAN //

const SPLICESTART = (COLOMBIASALARYSORTED.length * 90)/100;
const SPLICECOUNT =  COLOMBIASALARYSORTED.length - SPLICESTART;
const COLOMBIASALARYTOP10 = COLOMBIASALARYSORTED.splice(SPLICESTART,SPLICECOUNT);
const TOP10MEDIAN = calculateMedian(COLOMBIASALARYTOP10);

// PRINT // 

console.log({
    GENERALMEDIAN,
    TOP10MEDIAN,
});