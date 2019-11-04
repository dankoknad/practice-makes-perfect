function solution(A) {
  const acc = A.reduce((acc, n) => {
    if (n > 0) {
      acc[n] = true
    }
    return acc
  }, {}),
    accLen = Object.keys(acc).length;

  for (let i = 1; i <= accLen; i++) {
    if (!acc[i]) {
      return i
    }
  }

  return accLen + 1
}

// https://app.codility.com/demo/results/training5H6DH9-GH9/
