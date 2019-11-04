function solution(A, K) {
  const copy = A.slice(),
    len = A.length;

  if (len < 2) {
    return A
  }

  for (let i = 0; i < K; i++) {
    copy.unshift(copy.pop())
  }

  return copy
}

// https://app.codility.com/demo/results/training6S65J2-56P/
