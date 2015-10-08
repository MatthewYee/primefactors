describe("Prime Factorization", function() {


  it("given 100 should return [2,2,5,5]", function() {
    expect(primeFactors(100)).toEqual([2,2,5,5]);

  });
  it("given 13195 should return [5,7,13,29]", function() {
    expect(primeFactors(13195)).toEqual([5,7,13,29]);

  });
  it("given 600851475143 should return ", function() {
    expect(primeFactors(600851475143)).toEqual([71, 839, 1471, 6857]);

  });
});
