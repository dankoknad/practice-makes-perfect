function solution(X, A) {
  let len = A.length,
    accumulator = {},
    i = 0;

  for (; i < len; i++) {
    if (!accumulator[A[i]]) {
      accumulator[A[i]] = [i]
    } else {
      accumulator[A[i]].push(i)
    }
  }

  let canRiverBeCrossed = true;

  while (X > 0 && canRiverBeCrossed) {
    if (!accumulator[X]) {
      canRiverBeCrossed = false
    }
    X--
  }

  if (!canRiverBeCrossed) {
    return -1
  }

  const earliestTime = Object.keys(accumulator).reduce((acc, key) => {
    const tempEarliestTime = Math.min(...accumulator[key])

    if (tempEarliestTime > acc) {
      return tempEarliestTime
    }

    return acc
  }, -1)

  return earliestTime
}

// https://app.codility.com/demo/results/trainingWVNS3Z-2XX/
