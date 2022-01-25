module.exports = function check(str, bracketsConfig) {
  let brackets = "";
  let opening = [];
  let closing = "";
  let same = 0;
  let same7 = 0;
  let same8 = 0;

  bracketsConfig.forEach(x => brackets += x[1]);

  for (let i = 0; i < str.length; i++) {
    if (!brackets.includes(str[i]) || (str[i] === "|" && same === 0) ||
    (str[i] === "7" && same7 === 0) || (str[i] === "8" && same8 === 0)) {
      opening.push(str[i]);
      if (str[i] === "|") {
        same++;
      } else if (str[i] === "7") {
        same7++;
      } else if (str[i] === "8") {
        same8++;
      }
    } else {
      if (opening.length === 0) {
        return false;
      }
      let filtered = bracketsConfig.filter(x => x[0] === opening[opening.length - 1]);
      if (str[i] == filtered[0][1]) {
        opening.pop();
        if (str[i] === "|") {
          same--;
        } else if (str[i] === "7") {
          same7--;
        } else if (str[i] === "8") {
          same8--;
        }
      } else {
        return false;
      }
    }
  }
  return opening.length == 0 && same === 0 ? true : false;
}


