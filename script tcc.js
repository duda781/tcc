// ==========================================
// SCRIPT COMPLETO
// ==========================================


// Seleciona todos os planetas
const planets = document.querySelectorAll(".planeta");


// Seleciona todos os menus laterais
const menus = document.querySelectorAll(".menu");


// Seleciona todos os botões "LEIA MAIS"
// CORRIGIDO: no HTML a classe é .btn-leia-mais
const botoesLeiaMais =
    document.querySelectorAll(".btn-leia-mais");


// ==========================================
// INFORMAÇÕES DOS PLANETAS
// ==========================================

const informacoesPlanetas = {

    Mercúrio: {

        descricao:
            "Mercúrio é o planeta mais próximo do Sol. " +
            "É também o menor planeta do Sistema Solar. " +
            "Possui uma superfície rochosa e cheia de crateras.",

        titulo1:
            "UM ANO MUITO CURTO",

        texto1:
            "Mercúrio completa uma volta ao redor do Sol " +
            "em apenas 88 dias terrestres.",

        titulo2:
            "PEQUENO E ROCHOSO",

        texto2:
            "Mercúrio é o menor planeta do Sistema Solar. " +
            "Sua superfície possui muitas crateras.",

        titulo3:
            "DISTÂNCIA DO SOL",

        texto3:
            "Mercúrio está a aproximadamente 57,9 milhões " +
            "de quilômetros do Sol."

    },


    Vênus: {

        descricao:
            "Vênus é o segundo planeta a partir do Sol. " +
            "É conhecido por sua atmosfera extremamente densa " +
            "e pelas altas temperaturas.",

        titulo1:
            "O PLANETA MAIS QUENTE",

        texto1:
            "Vênus é o planeta mais quente do Sistema Solar, " +
            "com temperaturas extremamente elevadas.",

        titulo2:
            "ATMOSFERA DENSA",

        texto2:
            "Sua atmosfera é composta principalmente por dióxido " +
            "de carbono e provoca um intenso efeito estufa.",

        titulo3:
            "ROTAÇÃO DIFERENTE",

        texto3:
            "Vênus gira em sentido contrário ao da maioria " +
            "dos planetas do Sistema Solar."

    },


    Terra: {

        descricao:
            "A Terra é o terceiro planeta a partir do Sol " +
            "e o único planeta conhecido que possui vida.",

        titulo1:
            "PLANETA DA VIDA",

        texto1:
            "A Terra possui condições adequadas para a vida, " +
            "incluindo água líquida e uma atmosfera rica em oxigênio.",

        titulo2:
            "MUITA ÁGUA",

        texto2:
            "Cerca de 71% da superfície da Terra é coberta " +
            "por água.",

        titulo3:
            "NOSSO SATÉLITE",

        texto3:
            "A Terra possui um único satélite natural: a Lua."

    },


    Marte: {

        descricao:
            "Marte é conhecido como o Planeta Vermelho " +
            "por causa da presença de óxido de ferro em sua superfície.",

        titulo1:
            "O PLANETA VERMELHO",

        texto1:
            "A presença de ferro oxidado no solo é responsável " +
            "pela característica coloração avermelhada de Marte.",

        titulo2:
            "GRANDES VULCÕES",

        texto2:
            "Marte possui o Olympus Mons, um dos maiores vulcões " +
            "conhecidos do Sistema Solar.",

        titulo3:
            "DUAS LUAS",

        texto3:
            "Marte possui duas luas conhecidas: Fobos e Deimos."

    },


    Júpiter: {

        descricao:
            "Júpiter é o maior planeta do Sistema Solar " +
            "e é classificado como um gigante gasoso.",

        titulo1:
            "O MAIOR PLANETA",

        texto1:
            "Júpiter é o maior planeta do Sistema Solar " +
            "e possui uma massa muito superior à da Terra.",

        titulo2:
            "GRANDE MANCHA VERMELHA",

        texto2:
            "Júpiter possui uma enorme tempestade conhecida " +
            "como Grande Mancha Vermelha.",

        titulo3:
            "MUITAS LUAS",

        texto3:
            "Júpiter possui muitas luas, incluindo Ganimedes, " +
            "a maior lua conhecida do Sistema Solar."

    },


    Saturno: {

        descricao:
            "Saturno é um gigante gasoso famoso pelo seu " +
            "impressionante sistema de anéis.",

        titulo1:
            "OS FAMOSOS ANÉIS",

        texto1:
            "Seus anéis são formados principalmente por gelo, " +
            "poeira e fragmentos rochosos.",

        titulo2:
            "BAIXA DENSIDADE",

        texto2:
            "Saturno possui uma densidade média menor que a da água.",

        titulo3:
            "UMA GRANDE LUA",

        texto3:
            "Titã é uma das maiores luas de Saturno " +
            "e possui uma atmosfera bastante densa."

    },


    Urano: {

        descricao:
            "Urano é um gigante de gelo conhecido principalmente " +
            "pela sua rotação praticamente de lado.",

        titulo1:
            "GIRA DE LADO",

        texto1:
            "O eixo de Urano possui uma inclinação de aproximadamente " +
            "98 graus, fazendo com que ele pareça girar de lado.",

        titulo2:
            "COR AZUL-ESVERDEADA",

        texto2:
            "Sua coloração está relacionada principalmente " +
            "à presença de metano em sua atmosfera.",

        titulo3:
            "POSSUI ANÉIS",

        texto3:
            "Urano possui um sistema de anéis relativamente discretos."

    },


    Netuno: {

        descricao:
            "Netuno é o planeta mais distante do Sol entre " +
            "os oito planetas do Sistema Solar.",

        titulo1:
            "VENTOS EXTREMOS",

        texto1:
            "Netuno possui alguns dos ventos mais rápidos " +
            "observados no Sistema Solar.",

        titulo2:
            "PLANETA AZUL",

        texto2:
            "A presença de metano na atmosfera contribui " +
            "para a aparência azulada de Netuno.",

        titulo3:
            "UMA GRANDE LUA",

        texto3:
            "Tritão é a maior lua de Netuno e possui uma " +
            "órbita bastante incomum."

    },


    Plutão: {

        descricao:
            "Plutão é um planeta anão localizado na região externa " +
            "do Sistema Solar, no Cinturão de Kuiper.",

        titulo1:
            "PLANETA ANÃO",

        texto1:
            "Plutão foi reclassificado como planeta anão em 2006.",

        titulo2:
            "MUNDO GELADO",

        texto2:
            "Sua superfície possui diferentes tipos de gelo, " +
            "incluindo gelo de nitrogênio.",

        titulo3:
            "CINCO LUAS",

        texto3:
            "Plutão possui cinco luas conhecidas, sendo Caronte " +
            "a maior delas."

    }

};


// ==========================================
// ELEMENTOS DO PAINEL
// ==========================================

const painelInformacoes =
    document.getElementById("painelInformacoes");

const btnFechar =
    document.getElementById("btnFechar");

const infoNome =
    document.getElementById("infoNome");

const infoDescricao =
    document.getElementById("infoDescricao");

const infoTitulo1 =
    document.getElementById("infoTitulo1");

const infoTexto1 =
    document.getElementById("infoTexto1");

const infoTitulo2 =
    document.getElementById("infoTitulo2");

const infoTexto2 =
    document.getElementById("infoTexto2");

const infoTitulo3 =
    document.getElementById("infoTitulo3");

const infoTexto3 =
    document.getElementById("infoTexto3");


// ==========================================
// FUNÇÃO PARA ABRIR O PAINEL
// ==========================================

function abrirPainel(nomePlaneta) {

    const informacao =
        informacoesPlanetas[nomePlaneta];


    if (!informacao) {
        return;
    }


    // Nome do planeta

    infoNome.textContent =
        nomePlaneta.toUpperCase();


    // Descrição principal

    infoDescricao.textContent =
        informacao.descricao;


    // Primeira informação

    infoTitulo1.textContent =
        informacao.titulo1;

    infoTexto1.textContent =
        informacao.texto1;


    // Segunda informação

    infoTitulo2.textContent =
        informacao.titulo2;

    infoTexto2.textContent =
        informacao.texto2;


    // Terceira informação

    infoTitulo3.textContent =
        informacao.titulo3;

    infoTexto3.textContent =
        informacao.texto3;


    // Abre o painel

    painelInformacoes.classList.add("aberto");

}


// ==========================================
// FUNÇÃO PARA FECHAR O PAINEL
// ==========================================

function fecharPainel() {

    painelInformacoes.classList.remove("aberto");

}


// Botão Back

btnFechar.addEventListener(
    "click",
    fecharPainel
);


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


            // Pega o nome do planeta

            const nome =
                menus[index]
                    .querySelector(
                        ".planeta-nome"
                    )
                    .textContent
                    .trim();


            // Abre informações

            abrirPainel(nome);

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
                    "btn-leia-mais"
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

botoesLeiaMais.forEach((botao) => {

    botao.addEventListener(
        "click",
        (event) => {


            // Impede o menu de executar
            // o clique novamente

            event.stopPropagation();


            // Encontra o menu correspondente

            const menu =
                botao.closest(".menu");


            // Pega o nome do planeta

            const nome =
                menu.querySelector(
                    ".planeta-nome"
                )
                .textContent
                .trim();


            // Abre o painel

            abrirPainel(nome);

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