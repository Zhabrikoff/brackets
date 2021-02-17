module.exports = function check(str, bracketsConfig) {
  let configArr = [];
  bracketsConfig.map((item) => {
    configArr.push(item.join(''));
  });

  let count = 0;
  let strLenght = str.length / 2;
  while (count < strLenght) {
    configArr.map((item) => {
      str = str.replace(item, '')
    });
    count++;
  }

  return str.length === 0 ? true : false;
}
