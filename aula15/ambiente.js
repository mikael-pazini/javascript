let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

// console.log(`Nosso vetor é o ${num}`)
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`Nosso vetor em ordem é ${num.sort()}`)

/*
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`${num.indexOf(3)}`)