
/**
 *  Retrieves a random number between 0 and 100
 *  @returns {number} Random number between 0 and 100
 */

function pseudoRandom(){
  const random = Date.now().toString().slice(-3)
  return Math.round(Number(random)/10);
}

console.log(pseudoRandom());