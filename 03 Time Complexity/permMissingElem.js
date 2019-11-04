function solution(A) {
  const len = A.length,
    currSum = A.reduce((acc, n) => acc + n, 0),
    withMissingNumSum = ((len + 1) * (len + 2) / 2);

  return withMissingNumSum - currSum
}

// https://app.codility.com/demo/results/trainingDCJRN4-B7U/
