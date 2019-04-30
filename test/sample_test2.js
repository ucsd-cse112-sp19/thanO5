describe('Included matchers:', function() {
  let a = 12;
  let b = a;

  it('The "toBe" matcher compares with ===', function() {
    a = 12;
    b = a;
    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });
});
