console.log('number, string, boolean, any, null, undefined')

const myName: string = 'Giuliano'
const myAge: number = 25
const studyingTS: boolean = true

const greet = function (name: string): string {
  return 'Ciao ' + name
}

console.log(greet(myName))

const sum = (a: number, b: number): number => a + b

console.log(sum(2, 4))

const addIva = (a: number): number => a * 1.22

console.log(addIva(10))

const addStrings = (s1: string, s2: string): number => (s1 + s2).length

console.log(addStrings('ciao', 'frank'))

let union: string | number

let e8: number | null | undefined

const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3]

const tuple1: [string, string, string, number, number] = [
  'ss',
  'ss',
  'ss',
  1,
  4,
]

interface Persona {
  firstName: string
  lastName: string
  age: number
}

interface e14 {
  email: string
  phone?: number
}

const person1: Persona = {
  firstName: 'Franco',
  lastName: 'Pippo',
  age: 65,
}

const arr3: Persona[] = [person1]
console.log(arr3)

interface Veicolo {
  nRuote: number
  topSpeed: number
}

interface Auto extends Veicolo {
  turbina: boolean
}

const duetto: Auto = {
  nRuote: 4,
  topSpeed: 190,
  turbina: false,
}

interface Response {
  title: string
  _id: number
  createdAt: string
  updatedAt: string
  __v: 0
}
