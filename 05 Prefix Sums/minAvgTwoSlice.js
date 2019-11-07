function solution(A) {
  let min = Number.MAX_SAFE_INTEGER,
    len = A.length,
    minsIndxs = [],
    obj = {};

  for (let i = 0; i < len - 1; i++) {

    for (let j = i + 2; j < len + 1; j++) {
      const slice = A.slice(i, j)
      const sum = slice.reduce((acc, n) => acc + n, 0) / slice.length

      if (sum < min) {
        min = sum
        if (obj[sum]) {
          obj = {
            [sum]: obj[sum].concat(i)
          }
        } else {
          obj = {
            [sum]: [i]
          }
        }
      }
    }
  }

  return obj[Object.keys(obj)[0]].sort()[0]
}

// https://app.codility.com/demo/results/trainingFBKBEJ-7FF/

// Task Score 50%
// Correctness 100%
// Performance 0%
