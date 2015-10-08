/**
 * Created by MGY on 10/8/2015.
 */

/**
 * Solving Project Euler problem 3 which is finding the prime factorization
 * functions that solves Project Euler 3 Prime Factorization
 * Created by MGY on 10/7/2015.
 */

/*exported  primeFactors, num */


/**
 * Given a number this function will find the
 * @param num : The target number to find the prime factors
 * @returns {Array} : list of prime factors
 */

function primeFactors(num) {
  var factors = [];
  var divider = 2;
  while (num > 1) {
    while ((num % divider) === 0) {
      factors.push(divider);
      num /= divider;
    }
    divider += 1;

  }
  return factors;
}