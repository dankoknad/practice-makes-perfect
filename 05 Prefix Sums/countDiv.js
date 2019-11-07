function solution(A, B, K) {
  let counter = 0

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      counter++
    }
  }

  return counter
}

// https://app.codility.com/demo/results/trainingA275RY-M5U/

// Task Score 50%
// Correctness 100%
// Performance 0%
