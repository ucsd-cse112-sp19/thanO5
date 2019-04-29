describe('Included matchers:', function() {

  it('The "toBe" matcher compares with ===', function() {
    let a = 12;
    let b = a;
    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });
});
