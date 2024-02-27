"use strict";

function dscount(line, ltf, lts) {
  line = line.toLowerCase();
  ltf = ltf.toLowerCase();
  lts = lts.toLowerCase();
  let cnt = 0;
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i].toString() === ltf && line[i+1].toString() === lts) cnt += 1;
  }
  return cnt;
}

// Простая функция тестирования
function test(call, args, count, n) {
  let r = (call.apply(n, args) === count);
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw "Test failed!";
}

try {
  test(dscount, ['ab___ab__', 'a', 'b'], 2);
  test(dscount, ['___cd____', 'c', 'd'], 1);
  test(dscount, ['de_______', 'd', 'e'], 1);
  test(dscount, ['12_12__12', '1', '2'], 3);
  test(dscount, ['_ba______', 'a', 'b'], 0);
  test(dscount, ['_a__b____', 'a', 'b'], 0);
  test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
  test(dscount, ['aAa', 'a', 'a'], 2);

  console.info("Congratulations! All tests passed.");
} catch(e) {
  console.error(e);
}
