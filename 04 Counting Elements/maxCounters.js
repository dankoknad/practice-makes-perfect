function solution(N, A) {
  let out = []

  for (let i = 0; i < N; i++) {
    out[i] = 0
  }

  for (let j = 0; j < A.length; j++) {
    if (A[j] > N) {
      out.fill(Math.max(...out))
    } else {
      out[A[j] - 1]++
    }
  }

  return out
}

// https://app.codility.com/demo/results/training2G7JHS-RN2/
// Task Score 77%
// Correctness 100%
// Performance 60%

// other folks solutions translated to js:
// https://app.codility.com/demo/results/trainingRS6BK4-FZE/
// Task Score 100%

// https://app.codility.com/demo/results/training9UMRPB-2XZ/
// Task Score 100%

// https://app.codility.com/demo/results/trainingKSCZ9W-8GA/
// Task Score 88%
// Correctness 100%
// Performance 80%
