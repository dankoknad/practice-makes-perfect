function solution(A) {
  const acc = A.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = true
      acc.distinct++
    }

    return acc
  }, { distinct: 0 })

  return acc.distinct
}

// https://app.codility.com/demo/results/trainingV6UBQS-P46/

// Task Score 100% 
// Correctness 100% 
// Performance 100%
