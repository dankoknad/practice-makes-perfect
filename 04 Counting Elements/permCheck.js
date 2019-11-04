function solution(A) {
  const len = A.length,
    noDuplicates = len === Array.from(new Set(A)).length,
    sum = A.reduce((acc, n) => acc + n, 0),
    expectedSum = len * (len + 1) / 2;

  return sum === expectedSum && noDuplicates ? 1 : 0;
}

// https://app.codility.com/demo/results/trainingSUMU2A-JUU/
