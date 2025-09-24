let errado = false

let nome = prompt("Digite seu nome:")
let pedido1 = parseInt(prompt(`
==========MENU==========
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair
========================
`))
if (pedido1 === 5) {
    alert("Até mais!")
} else {
    switch (pedido1) {
        case 1:
            valor1 = 20
            nomePedido1 = "Hambúrguer"
            break
        case 2:
            valor1 = 35
            nomePedido1 = "Pizza"
            break
        case 3:
            valor1 = 5
            nomePedido1 = "Refrigerante"
            break
        case 4:
            valor1 = 12
            nomePedido1 = "Batata Frita"
            break
        default:
            errado = true
    }
    if (errado !== true) {
        let pedido2 = parseInt(prompt(`
==========MENU==========
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair
========================           
`))
        if (pedido2 === 5) {
            alert("Volte sempre!")
        } else {
            switch (pedido2) {
                case 1:
                    valor2 = 20
                    nomePedido2 = "Hambúrguer"
                    break
                case 2:
                    valor2 = 35
                    nomePedido2 = "Pizza"
                    break
                case 3:
                    valor2 = 5
                    nomePedido2 = "Refrigerante"
                    break
                case 4:
                    valor2 = 12
                    nomePedido2 = "Batata Frita"
                    break
                default:
                    errado = true
            }
            if (errado !== true) {
                let pedido3 = parseInt(prompt(`
==========MENU==========
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair
========================                
`))
                if (pedido3 === 5) {
                    alert("Volte sempre!")
                } else {
                    switch (pedido3) {
                        case 1:
                            valor3 = 20
                            nomePedido3 = "Hambúrguer"
                            break
                        case 2:
                            valor3 = 35
                            nomePedido3 = "Pizza"
                            break
                        case 3:
                            valor3 = 5
                            nomePedido3 = "Refrigerante"
                            break
                        case 4:
                            valor3 = 12
                            nomePedido3 = "Batata Frita"
                            break
                        default:
                            errado = true
                    }
                    if (errado !== true) {
                        let estudante = prompt("Você é estudante? [S/N]").toLowerCase()
                        let valorTotal = valor1 + valor2 + valor3
                        let cinquenta = parseFloat(50)
                        let descontoDoEstudante = valorTotal * 10 / 100
                        let descontoDe5 = valorTotal * 5 / 100

                        if (estudante === "s" && valorTotal > cinquenta) {
                            alert(`
Obrigado ${nome}
Pratos escolhidos:
-${nomePedido1} de R$${valor1}
-${nomePedido2} de R$${valor2}
-${nomePedido3} de R$${valor3}
Total sem desconto: R$${valorTotal.toFixed(2)}
Total com desconto: R$${(valorTotal - descontoDe5 - descontoDoEstudante).toFixed(2)}
`)
                        } else if (estudante === "s" && valorTotal < cinquenta) {
                            alert(`
Obrigado ${nome}
Pratos escolhidos:
-${nomePedido1} de R$${valor1}
-${nomePedido2} de R$${valor2}
-${nomePedido3} de R$${valor3}
Total sem desconto: R$${valorTotal.toFixed(2)}
Total com desconto: R$${(valorTotal - descontoDoEstudante).toFixed(2)}
`)
                        } else if (estudante === "n" && valorTotal > cinquenta) {
                            alert(`
Obrigado ${nome}
Pratos escolhidos:
-${nomePedido1} de R$${valor1}
-${nomePedido2} de R$${valor2}
-${nomePedido3} de R$${valor3}
Total sem desconto: R$${valorTotal.toFixed(2)}
Total com desconto: R$${(valorTotal - descontoDe5).toFixed(2)}
`)
                        } else {
                            alert(`
Obrigado ${nome}
Pratos escolhidos:
-${nomePedido1} de R$${valor1}
-${nomePedido2} de R$${valor2}
-${nomePedido3} de R$${valor3}
Total sem desconto: R$${valorTotal.toFixed(2)}
`)
                        }
                    } else {
                        alert("Esse pruduto não está no menu. Programa encerrado")
                    }
                }
            } else {
                alert("Esse produto não está no menu. Programa encerrado")
            }
        }
    } else {
        alert("Esse produto não está no menu. Programa encerrado")
    }
}