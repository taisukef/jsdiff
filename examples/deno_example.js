//require('colors')
//import { Diff } from "../Diff.js";
import { diffChars } from '../src/diff/character.js';

const one = 'beep boop';
const other = 'beep boob blah';

//const diff = Diff.diffChars(one, other);
const diff = diffChars(one, other);
console.log(diff);

/*
diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  var color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log();
*/
