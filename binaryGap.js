function solution(N) {
  var arrOfZeros = N.toString(2).match(/(?!1)(0+)(?=1)/g),
    arrLength = Array.isArray(arrOfZeros) && arrOfZeros.length,
    largestGap = 0

  if (!arrLength) {
    return 0
  }

  while (arrLength > 0) {
    if (arrOfZeros[arrLength - 1].length > largestGap) {
      largestGap = arrOfZeros[arrLength - 1].length
    }
    arrLength--
  }

  return largestGap
}

// https://app.codility.com/demo/results/training4S9CCW-8A3/
