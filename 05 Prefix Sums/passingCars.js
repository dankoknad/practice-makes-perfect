function solution(A) {
  let passes = 0,
    zeros = 0;

  A.forEach(direction => {
    direction === 0 ? zeros++ : passes += zeros;
  })

  return passes > 1000000000 ? -1 : passes;
}

// https://app.codility.com/demo/results/trainingK38XEQ-66N/
