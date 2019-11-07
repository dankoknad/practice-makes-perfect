function solution(S, P, Q) {
  const map = { A: 1, C: 2, G: 3, T: 4 },
    acc = [],
    len = P.length;

  let i = 0;

  for (; i < len; i++) {
    const temp = S.slice(P[i], Q[i] + 1).split("")
    acc.push(Math.min(...temp.map(char => map[char])))
  }

  return acc
}

// https://app.codility.com/demo/results/training74D7XY-6TA/

// Task Score 62%
// Correctness 100%
// Performance 0%
