// ==========================================
// SCRIPT COMPLETO
// ==========================================

// Seleciona todos os planetas
const planets = document.querySelectorAll(".planeta");

// Seleciona todos os menus laterais
const menus = document.querySelectorAll(".menu");

// Seleciona todos os botões "LEIA MAIS"
const botoesLeiaMais = document.querySelectorAll(".ler-mais");


// ==========================================
// INFORMAÇÕES DOS PLANETAS
// ==========================================

const informacoesPlanetas = {

    Mercúrio: `
        Mercúrio é o planeta mais próximo do Sol.
        É também o menor planeta do Sistema Solar.
        Possui uma superfície rochosa e cheia de crateras.
    `,

    Vênus: `
        Vênus é o segundo planeta a partir do Sol.
        É o planeta mais quente do Sistema Solar,
        devido à sua atmosfera muito densa.
    `,

    Terra: `
        A Terra é o terceiro planeta a partir do Sol.
        É o único planeta conhecido que possui vida.
        Cerca de 71% de sua superfície é coberta por água.
    `,

    Marte: `
        Marte é conhecido como o Planeta Vermelho.
        Sua superfície possui muitas crateras,
        vulcões e grandes vales.
    `,

    Júpiter: `
        Júpiter é o maior planeta do Sistema Solar.
        É um gigante gasoso e possui uma enorme tempestade
        conhecida como Grande Mancha Vermelha.
    `,

    Saturno: `
        Saturno é um gigante gasoso famoso por seus anéis.
        Seus anéis são formados principalmente por gelo,
        poeira e fragmentos rochosos.
    `,

    Urano: `
        Urano é um gigante de gelo.
        Ele possui uma característica única:
        gira praticamente de lado em relação à sua órbita.
    `,

    Netuno: `
        Netuno é o planeta mais distante do Sol.
        Possui uma intensa coloração azul e
        alguns dos ventos mais rápidos do Sistema Solar.
    `,

    Plutão: `
        Plutão é um planeta anão localizado no Cinturão de Kuiper.
        Possui uma superfície composta por gelo e rocha
        e possui cinco luas conhecidas.
    `

};


// ==========================================
// FUNÇÃO PARA LIMPAR ANIMAÇÕES
// ==========================================

function limparAnimacoes() {

    planets.forEach((planet) => {

        planet.classList.remove(
            "planeta-ativo"
        );

        planet.style.scale = "1";

    });

    menus.forEach((menu) => {

        menu.classList.remove(
            "ativo"
        );

    });

}


// ==========================================
// EFEITOS DOS PLANETAS
// ==========================================

planets.forEach((planet, index) => {

    // ======================================
    // HOVER
    // ======================================

    planet.addEventListener(
        "mouseenter",
        () => {

            planet.style.scale = "1.15";

        }
    );


    planet.addEventListener(
        "mouseleave",
        () => {

            if (
                !planet.classList.contains(
                    "planeta-ativo"
                )
            ) {

                planet.style.scale = "1";

            }

        }
    );


    // ======================================
    // CLIQUE NO PLANETA
    // ======================================

    planet.addEventListener(
        "click",
        () => {

            limparAnimacoes();

            // Ativa planeta
            planet.classList.add(
                "planeta-ativo"
            );

            // Ativa menu correspondente
            if (menus[index]) {

                menus[index].classList.add(
                    "ativo"
                );

            }

        }
    );

});


// ==========================================
// CLIQUE NO MENU LATERAL
// ==========================================

menus.forEach((menu, index) => {

    menu.addEventListener(
        "click",
        (event) => {

            // Se clicou no botão LEIA MAIS,
            // não executa o clique do menu
            if (
                event.target.classList.contains(
                    "ler-mais"
                )
            ) {

                return;

            }

            limparAnimacoes();

            // Ativa menu
            menu.classList.add(
                "ativo"
            );

            // Ativa planeta correspondente
            if (planets[index]) {

                planets[index].classList.add(
                    "planeta-ativo"
                );

                planets[index].style.scale =
                    "1.5";

            }

        }
    );

});


// ==========================================
// BOTÃO "LEIA MAIS"
// ==========================================

botoesLeiaMais.forEach((botao, index) => {

    botao.addEventListener(
        "click",
        (event) => {

            // Impede o botão de ativar o menu
            event.stopPropagation();

            // Encontra o menu correspondente
            const menu =
                botao.closest(".menu");

            // Pega o nome do planeta
            const nome =
                menu.querySelector(
                    ".planeta-nome"
                ).textContent.trim();

            // Busca as informações
            const informacao =
                informacoesPlanetas[nome];

            // Mostra as informações
            if (informacao) {

                alert(
                    nome + "\n\n" +
                    informacao.trim()
                );

            }

        }
    );

});


// ==========================================
// ROTAÇÃO DO SISTEMA SOLAR
// ==========================================

const solar =
    document.querySelector(
        ".sistema-solar"
    );