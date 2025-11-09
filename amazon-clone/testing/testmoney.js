import {formatCurrency} from '../scripts/utility/money.js';
//We can't run javacript files directly ,we need to load this js file using html file
//NAMING OF TESTS 
console.log('test suite:formatCurrency')
console.log('convert cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log('correct');
} else{
    console.log('not correct');
}

console.log('works with 0');
if(formatCurrency(0)==='0.00'){
  console.log('correct');
} else{
    console.log('not correct');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5)==='20.01'){
  console.log('correct');
}else{
    console.log('not correct');
}
//first one is basic test case.
// second and third are edge cases.
//another name we use for 'situations' is 'test cases'