var idade = 65
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não pode votar`)
} else {
    if (idade < 18 || idade >= 65) {
        console.log(`Pode votar, mas não é obrigado.`)
    } else {
        console.log(`É obrigado por lei a votar`)
    }
}