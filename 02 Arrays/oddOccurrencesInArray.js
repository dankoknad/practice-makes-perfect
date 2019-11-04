function solution(A) {
  const acc = {}

  A.forEach(n => {
    if (!acc[n]) {
      acc[n] = true
    } else {
      delete acc[n]
    }
  })

  return +Object.keys(acc)[0]
}

// https://app.codility.com/demo/results/trainingHGWJ7E-EAK/
