describe("function centsToEuros", function() {

  it("1. Deberia convertir los centimos a euros", function() {

    expect( centsToEuros(100) ).toBe(1)
    expect( centsToEuros(250) ).toBe(2.5)
    expect( centsToEuros(2000) ).toBe(20)
    expect( centsToEuros(10) ).toBe(0.1)
    expect( centsToEuros(0) ).toBe(0)

  })

  it("2. Si el valor que se nos da no es un numero deberia darnos como return un undefined", function() {

    expect( centsToEuros("patata") ).toBeUndefined()

  })

  it("3. Si no recibo ningun valor deberia retornar 0", function() {

    expect( centsToEuros() ).toBe(0)

  })

})

