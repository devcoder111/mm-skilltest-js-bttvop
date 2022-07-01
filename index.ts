import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `Instructions: answer each question by writing to console.log
  <br> 
  <br>
  View the output in the console in the bottom right`;

/*

  Instructions
  Answer each question by writing to console.log
  This should take about 3 mins

  View the output in the console in the bottom right

  EXAMPLE:

  Question: Add an exclamation to the end of a var `text`

  Your Answer: console.log(`${text}!`);

  Submitting your code:
  Copy the entire index.ts file contents and send them to submit your work

 */

//
// PART 1 - Strings
// Using the var text... write each answer to console.log
//

const text = 'I am a master at strings';

// 1 - Replace first occurence of 'a' with the letter z
const replaceFirst = text.replace(/a/, 'z');
console.log('1: ' + replaceFirst);

// 2 - Replace all occurences of 'a' with the letter z
const replaceAll = text.replace(/a/gi, 'z');
console.log('2: ' + replaceAll);

// 3 - Print 0-based position of the first letter 'm'
let position = text.indexOf('m');
console.log('3: ' + position);

//
// PART 2 - Arrays
// Using the var list... write each answer to console.log
//

const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
var oddtotal = list.reduce(function (total, current) {
  if (current % 2 == 1) total += current;
  return total;
}, 0);
console.log('4: ' + oddtotal);

// 5 - Sort the list highest to lowest
var sortList = list.sort();
sortList.reverse();
console.log('5: ' + sortList);

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
list.reverse();
var dlimitedList = list.join('~');
console.log('6: ' + dlimitedList);
