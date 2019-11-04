function solution(A) {
  let len = A.length,
    lSum = A[0],
    rSum = A.slice(1).reduce((acc, n) => acc + n, 0),
    diff = Math.abs(lSum - rSum),
    i = 1;

  for (; i < len - 1; i++) {
    lSum += A[i]
    rSum -= A[i]
    const currDiff = Math.abs(lSum - rSum)

    if (currDiff < diff) {
      diff = currDiff
    }
  }

  return diff
}

// https://app.codility.com/demo/results/trainingHCUSW3-H9U/
