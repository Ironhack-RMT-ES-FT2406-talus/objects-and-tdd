
// Solución de iteración 5 Lab

const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "poison",
  "simple",
  "sharp",
  "simple"
];

function uniquifyArray(unArray) {

  let arraySinDuplicados = [];

  for (let i = 0; i < unArray.length; i++) {
    console.log(unArray[i])

    // solo agrego el elemento si no está incluido en el nuevo array
    if (!arraySinDuplicados.includes(unArray[i])) {
    // if (arraySinDuplicados.includes(unArray[i]) === false) {
      arraySinDuplicados.push(unArray[i])
    }

  }

  return arraySinDuplicados

}

console.log( uniquifyArray(duplicateWords) )



// OBJETOS

/* 
{
  key: value,
  key: value,
  nombreDePropiedad: valorDePropiedad
}
*/

let headPhones = {
  brand: "SteelSeries",
  "price": 100,
  isNew: false,
  "max volume": 90,
  colors: ["black", "green"],
  codes: {
    purchaseCode: "1234D",
    manufactureCode: "XY123"
  },
  // activar: function() {
  //   console.log("pew pew pew")
  // }
}

console.log(headPhones)

// notación de puntos
console.log(headPhones.brand)
console.log(headPhones.price)

// notación de corchetes
console.log(headPhones["max volume"])
console.log(headPhones["isNew"])

console.log(headPhones["colors"][0])
console.log(headPhones.colors[0])

console.log(headPhones.codes.purchaseCode)
console.log(headPhones["codes"]["purchaseCode"])


// actualizar objetos


headPhones.isNew = true; // modificando el valor de la propiedad

headPhones.discount = "20%";

// delete SOLO se usa para borrar propiedades de un objeto
delete headPhones["max volume"]

console.log(headPhones) // agregar propiedad



// formas de analizar objetos

// console.log( Object.keys(headPhones) ) // nos devuelve un array con todos los nombres de propiedades
// console.log( Object.values(headPhones) ) // nos devuelve un array con todos los nombres de propiedades


// for in nos permite iterar sobre propiedades de un objeto

for (let nombreDePropiedad in headPhones) {
  // console.log("estoy iterando en el bucle")
  console.log(nombreDePropiedad)
  // como acceso al valor de la propiedad?
  
  let valorDePropiedad = headPhones[nombreDePropiedad]
  console.log(valorDePropiedad)

  if (typeof valorDePropiedad === "object") {

    for (let propiedadAnidada in valorDePropiedad) {
      console.log(propiedadAnidada)
      console.log(valorDePropiedad[propiedadAnidada])
    }

  }

  // console.log(`property: ${nombreDePropiedad} is ${headPhones[nombreDePropiedad]}`)

}
