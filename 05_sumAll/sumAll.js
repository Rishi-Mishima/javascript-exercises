const sumAll = function(min, max) {
let n = 0; 



if(min % 1 !== 0||max % 1 !== 0 ||min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max))
    {
    return 'ERROR'}; 

if (min > max){
    let temp = min; 
    min = max; 
    max = temp;
   }

    for (let i= min; i<= max; i++){
        n += i;
}
return n;
};

// Do not edit below this line
module.exports = sumAll;
