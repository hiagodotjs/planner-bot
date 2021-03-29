const STEPS = [
    {
        text: "Olá. Meu nome é Mila, sua concierge virtual. Estou aqui para planejar sua viagem, por favor digite seu cpf para iniciarmos.",
        answerType: "freeText",
        step: 0,
    },
    {
        text: "Verifiquei que suas preferencias não foram definidas ou estão desatualizadas, vou te fazer umas perguntinhas para acharmos a melhor viagem pra você. Pra começar eu gostaria de saber em geral quanto tempo dura sua viagem:",
        inputType: "multiChoice",
        options: [
            "Planejo pelo menos uma viagem longa por ano",
            "Tenho flexibilidade, consigo uma semana de folga para viagens mais curtas",
            "Tento aprovaiter feriados prolongados sempre que possivel",
            "Consigo fazer viagens rápidas aos fins de semana"
        ],
        step: 1,
    },
    {
        text: "Conta ai, qual seu estilo ideal de viagem?",
        inputType: "multiChoice",
        options: [
            "Quando chego no aeroporto, gosto de me hospedar o mais perto possível",
            "Gosto de praticidade. Ando e me desloco de transporte local",
            "Adoro pegar o carro e explorar a região que viajei",
            "Busco conhecer as cidades ao redor, mesmo que tenha que pegar um segundo voo",
            "Me aventuro em lugares de mais difícil acesso, estilo mochileiro"
        ],
        step: 2,
    },
    {
        text: "Que tipo de destino prefere?",
        inputType: "multiChoice",
        options: [
            "Praia",
            "Natureza",
            "Aventura",
            "Vida noturna",
            "Gastronomia",
            "Cultura moderna",
            "Cultura histórica",
            "Diversao - Para adultos e crianças"
        ],
        step: 3,
    },
    {
        text: "Quais meses do ano voce prefere viajar?",
        inputType: "multiChoice",
        options: [
            "Jan / Mar",
            "Mar / Abril",
            "Jun / Julh",
            "Agosto / Outubro",
            "Nov / Dez"
        ],
        step: 4,
    },
    {
        text: "Possui contas em quais bancos? Vamos sugerir alguns, mas voce pode escrever todos eles. Vai que voce tem mais milhas ai escondidas?",
        inputType: "multiChoiceAndFreeText",
        options: [
            "Itaú",
            "Bradesco",
            "Nubank",
            "Banco Do Brasil",
            "Caixa"
            
        ],
        secondMsg: "*Se quiser pode escrever uma outra opção",
        step: 5,
    },
    {
        text: "Com quem você costuma viajar?",
        options: [
            "Em familia",
            "Com crianças",
            "Em casal",
            "Com amigos",
            "Sozinho"

        ],
        inputType: "multiChoice",
        step: 6,
    },
    {
        text: "Com quanto tempo de antecedência você costuma se programar para viajar a turismo?",
        inputType: "sigleChoice",
        options: [
            "1 semana antes",
            "Até 15 dias antes",
            "1 mês antes",
            "3 meses antes",
            "6 meses antes",
            "Mais de um ano antes"
        ],
        step: 7,
    },
    {
        text: "Agora vamos la, chegou a hora de definirmos o melhor pacote de viagens que se encaixa perfeitamente com você. Então, de onde voce esta saindo?",
        inputType: "freeText",
        step: 8,
    },
    {
        text: "Preferencia de hotel",
        inputType: "multiChoice",
        options: [
            "Econômico",
            "Padrão",
            "Hotel de luxo"
        ],
        step: 9,
    },
    {
        text: "Ate quanto pretende gastar nessa viagem?",
        inputType: "multiChoiceAndFreeText",
        options: [
            "Até R$ 1000,00",
            "Até R$ 3000,00",
            "Até R$ 5000,00",
            "Acima de R$ 7000,00."            
        ],
        secondMsg: "*Se quiser pode escrever uma outra opção",
        step: 10,
    },
    {
        text: "Como prefere pagar",
        inputType: "multiChoice",
        options: [
            "Totalmente em milhas",
            "Totalmente em dinheiro",
            "Milhas + dinheiro"
        ],
        step: 11,
    },
    {
        text: "Ótimo! Encontramos pacotes excelentes que combinam com você!",
        inputType: "packageChoice",
        packages: [
            {
                name: "Cidade a dois",
                description: "Gramado + Canela com hotel 4 estrelas e café da manhã",
                startDate: "20/04",
                endDate: "25/04",
                prices: {
                    money: 2500,
                    club: 2000,
                    miles: 25000
                },
                tags: ['casal', 'romantico']
            },
            {   
                name: "Praia badalada",
                description: "Rio de janeiro, hotel 5 estrelas na orla de copacabana com cafe da manha",
                startDate: "20/07",
                endDate: "25/07",
                prices: {
                    money: 4000,
                    club: 3800,
                    miles: 80000
                },
                tags: ['praia', 'vida noturna']
            },
            {   
                name: "Praia badalada",
                description: "Rio de janeiro, hotel 5 estrelas na orla de copacabana com cafe da manha",
                startDate: "20/07",
                endDate: "25/07",
                prices: {
                    money: 1200,
                    club: 900,
                    miles: 15000
                },
                tags: ['economico', 'natureza']
            }
        ],
        options: [
            "Prefiro esperar e receber novos pacotes no meu email"
        ],
        step: 12,
    },
    {
        text: "Que legal! Você selecionou uma viagem que será, sem dúvidas, incrível! Essa viagem ficará no preço de R$ 2500,00. Porém se assinar o Clube Smiles, ficará por R$ 2000,00 e além disso você acumula milhas todo mês por apenas R$ 42,00. Gostaria de assinar?",
        inputType: "multiChoice",
        options: [
            "Sim",
            "Não"
        ],
        step: 13,
    },
    {
        text: "Gostaria de adicionar transfer ou algum passeio? Veja o que temos disponível",
        inputType: "packagePlus",
        plusOptions: [
            {
                description: "Transfer aeroporto para gramado + passeio caminhos de pedra",
                price: 400
            }
        ],
        options: [
            "Realizar pagamento"
        ],
        step: 14,
    },
    {
        text: "Pagamento confirmado! Agora é só preparar as malas!",
        inputType: "noAnswer",
        step: 15,
        lastStep: true
    }
]

module.exports = { STEPS };