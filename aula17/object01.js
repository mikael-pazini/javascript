let perfil = {nome: 'Mikael',
    sexo: 'M',
    peso: 98.5,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }
}

perfil.engordar(2)
console.log (`${perfil.nome} pesa ${perfil.peso}`)