module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [];
  for (let bracket of str) {
    for (let pattern of bracketsConfig) {
      if (pattern.includes(bracket)) {
        if (bracket === pattern[1] && pattern[1] === openingBrackets[openingBrackets.length - 1]
          || bracket === pattern[1] && pattern[0] === openingBrackets[openingBrackets.length - 1]) {
          openingBrackets.pop();
        } else if (bracket === pattern[0]) {
          openingBrackets.push(bracket);
        } else {
          return false;
        }
      }
    }
  }
  return !openingBrackets.length;
}

