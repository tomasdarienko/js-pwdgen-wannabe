let nome = prompt(`inserisci il tuo nome`)
console.log(nome)

let cognome = prompt(`inserisci il tuo cognome`)
console.log(cognome)

let colore = prompt(`inserisci il tuo colore preferito`)
console.log(colore)

let numero = 23;
console.log(numero)

let sottotitolo = (`${nome}${cognome}${colore}${numero}`)

document.getElementById(`sottotitolo`).innerHTML = sottotitolo