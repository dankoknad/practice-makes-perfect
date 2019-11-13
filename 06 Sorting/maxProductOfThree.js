function solution(A) {
  let max = Number.MIN_SAFE_INTEGER,
    len = A.length

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const product = A[i] * A[j] * A[k]

        if (product > max) {
          max = product
        }
      }
    }
  }
  return max
}

// https://app.codility.com/demo/results/trainingGZTTZR-UD5/

// Task Score 44%
// Correctness 100%
// Performance 0%
