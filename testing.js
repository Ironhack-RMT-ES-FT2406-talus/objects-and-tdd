console.log("aprendiendo testing")

function centsToEuros(cents) {

  if (cents === undefined) {
    return 0
  }

  if (typeof cents !== "number") {
    return undefined
  }

  let euros = cents / 100
  return euros

}
// mi funcion se llama centsToEuros
// TESTS

console.log("1. Deberia convertir los centimos a euros")
console.log( centsToEuros(100) === 1 )
console.log( centsToEuros(250) === 2.5 )
console.log( centsToEuros(2000) === 20 )
console.log( centsToEuros(10) === 0.1 )
console.log( centsToEuros(0) === 0 )

console.log("2. Si el valor que se nos da no es un numero deberia darnos como return un undefined")
console.log( centsToEuros("patata") === undefined )

console.log("3. Si no recibo ningun valor deberia retornar 0")
console.log( centsToEuros() === 0 )