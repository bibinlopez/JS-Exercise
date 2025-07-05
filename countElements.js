const arr = [
  'mango',
  'apple',
  'mango',
  'orange',
  'apple',
  'orange',
  'jackfruit',
]

function countElements(arr) {
  const entity = {}

  3
  //
  //

  // for (element of arr) {
  //   if (entity[element]) {
  //     entity[element]++
  //   } else {
  //     entity[element] = 1
  //   }
  // }

  2
  //
  //

  // for (element_ite1 of arr) {
  //   let count = 0
  //   if (entity[element_ite1]) {
  //     console.log('continue')
  //     continue
  //   }
  //   for (element_ite2 of arr) {
  //     console.log({ element_ite2 })
  //     if (element_ite1 === element_ite2) count++
  //   }
  //   entity[element_ite1] = count
  // }

  1
  //
  //

  // arr.forEach((element1) => {
  //   let count = 0
  //   arr.forEach((element2) => {
  //     if (element1 === element2) {
  //       console.log(element1)
  //       count++
  //     }
  //   })
  //   entity[element1] = count
  // })

  return entity
}

const result = countElements(arr)

console.log({ result })

// const obj = { name: 'bibin', place: 'ard', age: 0 }

// console.log(obj.name1)  // falsy value

// obj.age++

// console.log(obj)
