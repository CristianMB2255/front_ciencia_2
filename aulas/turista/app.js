const lugares = ["montanha", "praia", "campo", "ame-latina", "lisboa", "orlando"]
// const mensagem = `
//     ---Roteiro de Viagens---
//     Lugares: ${lugares}
//     ---------------------------`
// alert(mensagem)
// const escolhaUsuario = prompt('Pra onde deseja viajar: ')

// if (!escolhaUsuario) {
//   alert("Por favor digite um valor da lista de viagens.")
// } else {
//   for (const lugar of lugares) {
//     if (escolhaUsuario.toLowerCase() == lugar) {
//       // alert(lugar)
//       window.location.href = `${lugar}.html`
//     }
//   }
// }

const redirectLugar = (local) => {
    if (!local) return console.error("Por favor, selecione um destino.")
    if (!lugares.includes(local)) return console.error("Destino inválido.")

    window.location.href = `locations/${local}.html`
}

const returnHome = () => {
    window.location.href = "../index.html"
}
