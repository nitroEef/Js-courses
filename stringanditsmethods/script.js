// // types of String

// // single quote ('')

// const world = 'i am a boy'


// //double quote("")
// const words = "i am a boy"

// // backticks (``)
// const worlds = `i am a boy`

// console.log(world, words, worlds)


// const age = 12
// const school = 'DLT'
// const name = 'eef'

// const sentence =`my name is ${name}, i am ${age} years old and i go to ${school} school`
// console.log(sentence)

// const math = `2+2`

// const mathematics = `${2+2}`
// console.log(mathematics)

// const lines = `1
// 2
// 3
// 4
// 5
// `
// console.log(lines)


// const numerals = `hello i'm Aliyu and i am from "Kogi state"`
// console.log(numerals)

//to check how many characters in a string 

const name = "hayzed"
console.log(name.length)

console.log(name[0])

//changing the case of string
const words = "i am a boy"
console.log(words.toUpperCase())

const word = "SHE IS A GIRL"
console.log(word.toLowerCase())

// checking for substring .... to know where a word starts from
const man = "i love coding and my favorite language is javascript"
const final = man.indexOf('javascript')
const main = man.lastIndexOf('my')



console.log(main)
console.log(final)

const check = man.includes('favourite')

const starting = man.startsWith('I')
const ending = man.endsWith('t')



console.log(check)
console.log(starting)
console.log(ending)