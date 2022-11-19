// Count the number of Duplicates

function duplicateCount(text) {
  let result = text.toLowerCase();

  const obj = {};
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }

  let repeaters = 0;

  for (const iterator in obj) {
    if (obj[iterator] >= 2) {
      repeaters++;
    }
  }

  return repeaters == 0 ? 0 : repeaters;
}

// shortest way
function duplicateCount2(text) {
  return text
    .toLowerCase()
    .split("")
    .reduce(
      function (a, l) {
        a[l] = a[l] ? a[l] + 1 : 1;
        if (a[l] === 2) a.count++;
        return a;
      },
      { count: 0 }
    ).count;
}

// WTF wayy
const duplicateCountWtf = (text) =>
  (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;
console.log(duplicateCount("KIIMMOO"));
console.log(duplicateCount("KImosabey"));
console.log("\n");
console.log(duplicateCount2("KIIMMOO"));
console.log(duplicateCount2("KImosabey"));
console.log("\n");
console.log(duplicateCountWtf("KIIMMOO"));
console.log(duplicateCountWtf("KImosabey"));
