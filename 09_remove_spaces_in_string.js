function remove_spaces_found_in_string(str) {
  var arrStr = [...str];
  var removedSpaceStr = '';

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] != ' ') {
      removedSpaceStr += arrStr[i];
    }
  }

  return removedSpaceStr;
}

console.log(remove_spaces_found_in_string(' | The Legend | '));
