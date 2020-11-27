// 1. max value from array

const max = (collection) => {
    let resMax = collection[0]

    collection.forEach(e => {
        if (resMax < e){
            resMAx = e
        }
    })
    return resMAx
}

// let result = max([1, -5, 22, 4, 6, 5, 33])
// console.log(result)

// 2. check repeats in array ?

const x = (collection) => {
    n = 0
    let current = collection[n]
    let counter = 0

    collection.forEach(e => {
        if (current == e){
            counter++
            n++
        } 
    })
    return counter
}

// let result = x([1, -5, 22, 5, 2, 4, 4, 4, 6, 5, 33])
// console.log(result)

// 3. sort words in array descending

const desc = (collection) => {
    return collection.sort().down()
}

let result = desc([Poland, Switzerland, Croatia, Italy, Brazil])
console.log(result)