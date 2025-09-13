let errado = false
let errado2 = false
let errado3 = false

alert("Use apenas os números que aparecerem nas escolha, caso contrário o programa ira parar!")
let nome = prompt("Digite seu nome: ")
let pedido1 = parseFloat(prompt(`
    =========MENU=========
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) Sair
    ======================
    `))
if (pedido1 === 5) {
    alert("Volte sempre!")
} else if (pedido1 !== 5) {
    switch (pedido1) {
        case 1: 
            valor1 = 20.00
            nomepedido1 = "Hambúrguer"
            break
        case 2:
            valor1 = 35.00
            nomepedido1 = "Pizza"
            break
        case 3:
            valor1 = 5.00
            nomepedido1 = "Refrigerante"
            break
        case 4:
            valor1 = 12.00
            nomepedido1 = "Batata Frita"
            break
        default:
            errado = true
    } if (errado != true) {
        escolha2 = parseFloat(prompt(`
        =========MENU=========
        (1) Hambúrguer – R$ 20
        (2) Pizza – R$ 35
        (3) Refrigerante – R$ 5
        (4) Batata Frita – R$ 12
        (5) Sair
        ======================
        `))
        if (escolha2 === 5) {
            alert("Volte sempre!")
        } else if (escolha2 !== 5) {
        switch (escolha2) {
            case 1:
                valor2 = 20.00
                nomepedido2 = "Hambúrguer"
                break
            case 2:
                valor2 = 35.00
                nomepedido2 = "Pizza"
                break
            case 3:
                valor2 = 5.00
                nomepedido2 = "Refrigerante"
                break
            case 4:
                valor2 = 12.00
                nomepedido2 = "Batata Frita"
                break
            default:
                errado2 = true
        } if (errado2 !== true) {
            menu3 = parseFloat(prompt(`
            =========MENU=========
            (1) Hambúrguer – R$ 20
            (2) Pizza – R$ 35
            (3) Refrigerante – R$ 5
            (4) Batata Frita – R$ 12
            (5) Sair
            ======================
                `))
                if (menu3 === 5) {
                    alert("Volte sempre!")
                } else if (menu3 !== 5) {
                switch(menu3) {
                    case 1:
                        valor3 = 20.00
                        nomepedido3 = "Hambúrguer"
                        break
                    case 2:
                        valor3 = 35.00
                        nomepedido3 = "Pizza"
                        break
                    case 3:
                        valor3 = 5.00
                        nomepedido3 = "Refrigerante"
                        break
                    case 4:
                        valor3 = 12.00
                        nomepedido3 = "Batata Frita"
                        break
                    default: 
                        errado3 = true
                } if (errado3 !== true) {
                    estudante = prompt(`
                        Você é estudante:
                        1.sim
                        2.não
                        `)
                    switch (estudante) {
                        case "1":
                            soma = parseFloat(valor1 + valor2 + valor3)
                            desconto10 = parseFloat((soma*10) / 100)
                            if (desconto10 > 50) {
                                totaldesconto = parseFloat((desconto10 * 5) / 100)
                                alert(`
                                Obrigado ${nome}!
                                Pratos escolhidos:
                                -${nomepedido1} de R$${valor1}
                                -${nomepedido2} de R$${valor2}
                                -${nomepedido3} de R$${valor3}
                                Total sem desconto: R$${soma.toFixed(2)}
                                Total com desconto: R$${totaldesconto.toFixed(2)}
                                    `)
                            } else {alert(`
                                Obrigado ${nome}!
                                Pratos escolhidos:
                                -${nomepedido1} de R$${valor1}
                                -${nomepedido2} de R$${valor2}
                                -${nomepedido3} de R$${valor3}
                                Total sem desconto: R$${soma.toFixed(2)}
                                Total com desconto do estudante: R$${desconto10.toFixed(2)}
                                `)}
                            break
                        case "2":
                            soma = parseFloat(valor1 + valor2 + valor3)
                            if (soma > 50) {
                                totaldesconto = parseFloat(soma * 5) / 100
                                alert(`
                                Obrigado ${nome}!
                                Pratos escolhidos:
                                -${nomepedido1} de R$${valor1}
                                -${nomepedido2} de R$${valor2}
                                -${nomepedido3} de R$${valor3}
                                Total sem desconto: R$${soma.toFixed(2)}
                                Total com desconto: R$${totaldesconto.toFixed(2)}
                                    `)
                            } else {
                                alert(`
                                Obrigado ${nome}!
                                Pratos escolhidos:
                                -${nomepedido1} de R$${valor1}
                                -${nomepedido2} de R$${valor2}
                                -${nomepedido3} de R$${valor3}
                                Total sem desconto: R$${soma.toFixed(2)}
                                    `)
                            }
                        } 
                    } 
                } 
            } 
        } 
    }
}