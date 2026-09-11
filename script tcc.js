// ==========================================
// SCRIPT COMPLETO
// ==========================================


// ==========================================
// ELEMENTOS
// ==========================================

const planets =
    document.querySelectorAll(".planeta");

const menus =
    document.querySelectorAll(".menu");

const botoesLeiaMais =
    document.querySelectorAll(".btn-leia-mais");


// ==========================================
// INFORMAÇÕES DOS PLANETAS
// ==========================================

const informacoesPlanetas = {


    // ======================================
    // MERCÚRIO
    // ======================================

    Mercúrio: {

        categoria: "PLANETA",

        icone: "☀️",

        temperatura: "167 °C / -180 °C",

        condicao: "EXTREMO DE TEMPERATURA",

        descricao:
            "Mercúrio é o planeta mais próximo do Sol e o menor planeta do Sistema Solar. É um mundo rochoso, coberto por crateras e com uma atmosfera extremamente fina chamada exosfera.",

        distancia:
            "57,9 milhões km",

        diametro:
            "4.879 km",

        massa:
            "3,30 × 10²³ kg",

        gravidade:
            "3,70 m/s²",

        dia:
            "58,6 dias",

        ano:
            "88 dias",

        luas:
            "0",

        tipo:
            "Rochoso",

        atmosfera:
            "Exosfera muito fina",

        composicao:
            "Rochas e metais",

        aneis:
            "Não possui",

        luaPrincipal:
            "Nenhuma",

        titulo1:
            "UM ANO MUITO CURTO",

        texto1:
            "Mercúrio completa uma volta ao redor do Sol em apenas 88 dias terrestres. Por causa disso, possui o ano mais curto entre todos os planetas do Sistema Solar.",

        titulo2:
            "EXTREMAS TEMPERATURAS",

        texto2:
            "A superfície pode atingir cerca de 430 °C durante o dia e cair para aproximadamente -180 °C durante a noite.",

        titulo3:
            "PEQUENO E ROCHOSO",

        texto3:
            "Apesar de pequeno, Mercúrio possui um núcleo metálico muito grande em relação ao seu tamanho e uma superfície cheia de crateras.",

        curiosidade:
            "Mercúrio é o planeta que se move mais rapidamente ao redor do Sol."
    },


    // ======================================
    // VÊNUS
    // ======================================

    Vênus: {

        categoria: "PLANETA",

        icone: "☁️",

        temperatura: "464 °C",

        condicao: "EXTREMAMENTE QUENTE",

        descricao:
            "Vênus é o segundo planeta a partir do Sol e possui uma atmosfera extremamente densa. Sua superfície é um dos ambientes mais quentes do Sistema Solar.",

        distancia:
            "108,2 milhões km",

        diametro:
            "12.104 km",

        massa:
            "4,87 × 10²⁴ kg",

        gravidade:
            "8,87 m/s²",

        dia:
            "243 dias",

        ano:
            "225 dias",

        luas:
            "0",

        tipo:
            "Rochoso",

        atmosfera:
            "Dióxido de carbono",

        composicao:
            "Rochas e metais",

        aneis:
            "Não possui",

        luaPrincipal:
            "Nenhuma",

        titulo1:
            "O PLANETA MAIS QUENTE",

        texto1:
            "Vênus possui uma temperatura média de aproximadamente 464 °C, tornando-se o planeta mais quente do Sistema Solar.",

        titulo2:
            "EFEITO ESTUFA INTENSO",

        texto2:
            "Sua atmosfera é composta principalmente por dióxido de carbono. A enorme quantidade desse gás provoca um efeito estufa extremamente forte.",

        titulo3:
            "ROTAÇÃO RETRÓGRADA",

        texto3:
            "Vênus gira em sentido contrário ao da maioria dos planetas. Seu período de rotação também é mais longo que seu ano.",

        curiosidade:
            "Vênus é semelhante à Terra em tamanho, mas suas condições de superfície são completamente diferentes."
    },


    // ======================================
    // TERRA
    // ======================================

    Terra: {

        categoria: "PLANETA",

        icone: "🌤️",

        temperatura: "15 °C",

        condicao: "CONDIÇÕES FAVORÁVEIS À VIDA",

        descricao:
            "A Terra é o terceiro planeta a partir do Sol e o único mundo conhecido que abriga vida. Possui água líquida abundante, atmosfera protetora e um campo magnético.",

        distancia:
            "149,6 milhões km",

        diametro:
            "12.742 km",

        massa:
            "5,97 × 10²⁴ kg",

        gravidade:
            "9,81 m/s²",

        dia:
            "23,9 horas",

        ano:
            "365,25 dias",

        luas:
            "1",

        tipo:
            "Rochoso",

        atmosfera:
            "Nitrogênio e oxigênio",

        composicao:
            "Rochas, metais e água",

        aneis:
            "Não possui",

        luaPrincipal:
            "Lua",

        titulo1:
            "O PLANETA DA VIDA",

        texto1:
            "A Terra possui condições conhecidas capazes de sustentar vida, incluindo água líquida, uma atmosfera adequada e temperaturas relativamente moderadas.",

        titulo2:
            "MUITA ÁGUA",

        texto2:
            "Cerca de 71% da superfície terrestre é coberta por água. Os oceanos desempenham um papel fundamental no clima e no equilíbrio do planeta.",

        titulo3:
            "CAMPO MAGNÉTICO",

        texto3:
            "O campo magnético terrestre ajuda a proteger o planeta contra parte das partículas carregadas provenientes do Sol.",

        curiosidade:
            "A Terra é o único planeta conhecido até hoje onde existe vida."
    },


    // ======================================
    // MARTE
    // ======================================

    Marte: {

        categoria: "PLANETA",

        icone: "🌪️",

        temperatura: "-63 °C",

        condicao: "FRIO E TEMPESTUOSO",

        descricao:
            "Marte é o quarto planeta a partir do Sol e é conhecido como Planeta Vermelho. Sua superfície apresenta vulcões gigantes, cânions, crateras e sinais de que água líquida existiu no passado.",

        distancia:
            "227,9 milhões km",

        diametro:
            "6.779 km",

        massa:
            "6,42 × 10²³ kg",

        gravidade:
            "3,71 m/s²",

        dia:
            "24,6 horas",

        ano:
            "687 dias",

        luas:
            "2",

        tipo:
            "Rochoso",

        atmosfera:
            "Dióxido de carbono",

        composicao:
            "Rochas, poeira e gelo",

        aneis:
            "Não possui",

        luaPrincipal:
            "Fobos",

        titulo1:
            "O PLANETA VERMELHO",

        texto1:
            "A cor avermelhada de Marte é causada principalmente pela presença de ferro oxidado em sua superfície.",

        titulo2:
            "VULCÕES E CÂNIONS GIGANTES",

        texto2:
            "Marte abriga o Olympus Mons, um dos maiores vulcões conhecidos do Sistema Solar, além do enorme sistema de cânions Valles Marineris.",

        titulo3:
            "POSSUI DUAS LUAS",

        texto3:
            "Marte possui duas pequenas luas conhecidas: Fobos e Deimos. Fobos é a maior e está muito próxima do planeta.",

        curiosidade:
            "Marte possui estações do ano, calotas polares e tempestades de poeira que podem atingir grandes áreas do planeta."
    },


    // ======================================
    // JÚPITER
    // ======================================

    Júpiter: {

        categoria: "PLANETA",

        icone: "🌩️",

        temperatura: "-110 °C",

        condicao: "GIGANTE E TEMPESTUOSO",

        descricao:
            "Júpiter é o maior planeta do Sistema Solar. É um gigante gasoso formado principalmente por hidrogênio e hélio e possui uma atmosfera repleta de tempestades.",

        distancia:
            "778,5 milhões km",

        diametro:
            "139.820 km",

        massa:
            "1,90 × 10²⁷ kg",

        gravidade:
            "24,79 m/s²",

        dia:
            "9,9 horas",

        ano:
            "11,86 anos",

        luas:
            "Muitas luas",

        tipo:
            "Gigante gasoso",

        atmosfera:
            "Hidrogênio e hélio",

        composicao:
            "Hidrogênio e hélio",

        aneis:
            "Possui anéis tênues",

        luaPrincipal:
            "Ganimedes",

        titulo1:
            "O MAIOR PLANETA",

        texto1:
            "Júpiter é tão grande que todos os outros planetas do Sistema Solar poderiam caber dentro dele em conjunto, considerando o volume aproximado.",

        titulo2:
            "GRANDE MANCHA VERMELHA",

        texto2:
            "Uma das características mais famosas de Júpiter é a Grande Mancha Vermelha, uma gigantesca tempestade observada há séculos.",

        titulo3:
            "UM MUNDO DE MUITAS LUAS",

        texto3:
            "Júpiter possui muitas luas. Entre as mais famosas estão Io, Europa, Ganimedes e Calisto, conhecidas como luas galileanas.",

        curiosidade:
            "Ganimedes, uma das luas de Júpiter, é a maior lua conhecida do Sistema Solar."
    },


    // ======================================
    // SATURNO
    // ======================================

    Saturno: {

        categoria: "PLANETA",

        icone: "🌩️",

        temperatura: "-140 °C",

        condicao: "FRIO E TEMPESTUOSO",

        descricao:
            "Saturno é o sexto planeta a partir do Sol e um gigante gasoso conhecido principalmente por seu enorme sistema de anéis.",

        distancia:
            "1,43 bilhões km",

        diametro:
            "116.460 km",

        massa:
            "5,68 × 10²⁶ kg",

        gravidade:
            "10,44 m/s²",

        dia:
            "10,7 horas",

        ano:
            "29,45 anos",

        luas:
            "Mais de 100",

        tipo:
            "Gigante gasoso",

        atmosfera:
            "Hidrogênio e hélio",

        composicao:
            "Hidrogênio, hélio e gelo",

        aneis:
            "Sim",

        luaPrincipal:
            "Titã",

        titulo1:
            "OS FAMOSOS ANÉIS",

        texto1:
            "Os anéis de Saturno são formados principalmente por pedaços de gelo, poeira e material rochoso. Eles estão divididos em várias regiões.",

        titulo2:
            "BAIXA DENSIDADE",

        texto2:
            "Saturno possui uma densidade média menor que a da água. É o planeta menos denso do Sistema Solar.",

        titulo3:
            "TITÃ",

        texto3:
            "Titã é a maior lua de Saturno e possui uma atmosfera espessa. Sua superfície apresenta lagos e mares de hidrocarbonetos líquidos.",

        curiosidade:
            "Saturno possui um sistema de anéis tão extenso que pode ser observado mesmo a grandes distâncias com telescópios."
    },


    // ======================================
    // URANO
    // ======================================

    Urano: {

        categoria: "PLANETA",

        icone: "❄️",

        temperatura: "-195 °C",

        condicao: "EXTREMAMENTE FRIO",

        descricao:
            "Urano é o sétimo planeta a partir do Sol e um gigante de gelo. Sua característica mais marcante é a enorme inclinação de seu eixo de rotação.",

        distancia:
            "2,87 bilhões km",

        diametro:
            "50.724 km",

        massa:
            "8,68 × 10²⁵ kg",

        gravidade:
            "8,69 m/s²",

        dia:
            "17,2 horas",

        ano:
            "84 anos",

        luas:
            "28",

        tipo:
            "Gigante de gelo",

        atmosfera:
            "Hidrogênio, hélio e metano",

        composicao:
            "Água, amônia e metano",

        aneis:
            "Sim",

        luaPrincipal:
            "Titânia",

        titulo1:
            "GIRA DE LADO",

        texto1:
            "Urano possui uma inclinação axial de aproximadamente 98 graus. Por isso, ele parece girar praticamente de lado em comparação com os outros planetas.",

        titulo2:
            "MUNDO AZUL-ESVERDEADO",

        texto2:
            "O metano presente em sua atmosfera absorve parte da luz vermelha e contribui para a coloração azul-esverdeada característica de Urano.",

        titulo3:
            "POSSUI ANÉIS",

        texto3:
            "Urano possui um sistema de anéis escuros e relativamente discretos, além de diversas luas.",

        curiosidade:
            "Por causa da grande inclinação de seu eixo, cada polo de Urano pode passar décadas recebendo luz solar contínua ou permanecendo na escuridão."
    },


    // ======================================
    // NETUNO
    // ======================================

    Netuno: {

        categoria: "PLANETA",

        icone: "🌪️",

        temperatura: "-200 °C",

        condicao: "VENTOS EXTREMOS",

        descricao:
            "Netuno é o oitavo e mais distante planeta do Sol. É um gigante de gelo azul, conhecido por sua atmosfera dinâmica e pelos ventos extremamente rápidos.",

        distancia:
            "4,50 bilhões km",

        diametro:
            "49.244 km",

        massa:
            "1,02 × 10²⁶ kg",

        gravidade:
            "11,15 m/s²",

        dia:
            "16,1 horas",

        ano:
            "164,8 anos",

        luas:
            "16",

        tipo:
            "Gigante de gelo",

        atmosfera:
            "Hidrogênio, hélio e metano",

        composicao:
            "Água, amônia e metano",

        aneis:
            "Sim",

        luaPrincipal:
            "Tritão",

        titulo1:
            "VENTOS EXTREMOS",

        texto1:
            "Netuno apresenta alguns dos ventos mais rápidos conhecidos no Sistema Solar, podendo ultrapassar 2.000 km/h.",

        titulo2:
            "O PLANETA AZUL",

        texto2:
            "O metano presente na atmosfera absorve a luz vermelha e ajuda a produzir a intensa coloração azul de Netuno.",

        titulo3:
            "TRITÃO",

        texto3:
            "Tritão é a maior lua de Netuno. Sua órbita é retrógrada, indicando que provavelmente foi capturada pela gravidade do planeta.",

        curiosidade:
            "Netuno foi o primeiro planeta cuja existência foi prevista matematicamente antes de ser observado diretamente."
    },


    // ======================================
    // PLUTÃO
    // ======================================

    Plutão: {

        categoria: "PLANETA ANÃO",

        icone: "❄️",

        temperatura: "-225 °C / -240 °C",

        condicao: "EXTREMAMENTE CONGELANTE",

        descricao:
            "Plutão é um planeta anão localizado no Cinturão de Kuiper, uma região distante do Sistema Solar. É um mundo pequeno, gelado e com uma atmosfera fina e variável.",

        distancia:
            "5,9 bilhões km",

        diametro:
            "2.377 km",

        massa:
            "1,31 × 10²² kg",

        gravidade:
            "0,62 m/s²",

        dia:
            "6,4 dias",

        ano:
            "248 anos",

        luas:
            "5",

        tipo:
            "Planeta anão",

        atmosfera:
            "Nitrogênio, metano e monóxido de carbono",

        composicao:
            "Rocha e gelo",

        aneis:
            "Não possui",

        luaPrincipal:
            "Caronte",

        titulo1:
            "UM MUNDO GELADO",

        texto1:
            "Plutão apresenta temperaturas extremamente baixas, variando aproximadamente entre -225 °C e -240 °C. Sua superfície possui grandes áreas cobertas por gelo.",

        titulo2:
            "CINCO LUAS",

        texto2:
            "Plutão possui cinco luas conhecidas: Caronte, Estige, Nix, Cérbero e Hidra. Caronte é a maior e possui cerca de metade do tamanho de Plutão.",

        titulo3:
            "CINTURÃO DE KUIPER",

        texto3:
            "Plutão está localizado no Cinturão de Kuiper, uma região além da órbita de Netuno repleta de pequenos corpos congelados.",

        curiosidade:
            "Plutão foi descoberto em 1930, reclassificado como planeta anão em 2006 e recebeu a visita da missão New Horizons em 2015."
    }

};


// ==========================================
// ELEMENTOS DO PAINEL
// ==========================================

const painelInformacoes =
    document.getElementById("painelInformacoes");

const btnFechar =
    document.getElementById("btnFechar");

const infoCategoria =
    document.getElementById("infoCategoria");

const infoNome =
    document.getElementById("infoNome");

const infoIcone =
    document.getElementById("infoIcone");

const infoTemperatura =
    document.getElementById("infoTemperatura");

const infoCondicao =
    document.getElementById("infoCondicao");

const infoDescricao =
    document.getElementById("infoDescricao");

const infoDistancia =
    document.getElementById("infoDistancia");

const infoDiametro =
    document.getElementById("infoDiametro");

const infoMassa =
    document.getElementById("infoMassa");

const infoGravidade =
    document.getElementById("infoGravidade");

const infoDia =
    document.getElementById("infoDia");

const infoAno =
    document.getElementById("infoAno");

const infoLuas =
    document.getElementById("infoLuas");

const infoTipo =
    document.getElementById("infoTipo");

const infoAtmosfera =
    document.getElementById("infoAtmosfera");

const infoComposicao =
    document.getElementById("infoComposicao");

const infoAneis =
    document.getElementById("infoAneis");

const infoLuaPrincipal =
    document.getElementById("infoLuaPrincipal");

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

const infoCuriosidade =
    document.getElementById("infoCuriosidade");


// ==========================================
// ABRIR PAINEL
// ==========================================

function abrirPainel(nomePlaneta) {

    const informacao =
        informacoesPlanetas[nomePlaneta];


    if (!informacao) {
        return;
    }


    infoCategoria.textContent =
        informacao.categoria;


    infoNome.textContent =
        nomePlaneta.toUpperCase();


    infoIcone.textContent =
        informacao.icone;


    infoTemperatura.textContent =
        informacao.temperatura;


    infoCondicao.textContent =
        informacao.condicao;


    infoDescricao.textContent =
        informacao.descricao;


    infoDistancia.textContent =
        informacao.distancia;


    infoDiametro.textContent =
        informacao.diametro;


    infoMassa.textContent =
        informacao.massa;


    infoGravidade.textContent =
        informacao.gravidade;


    infoDia.textContent =
        informacao.dia;


    infoAno.textContent =
        informacao.ano;


    infoLuas.textContent =
        informacao.luas;


    infoTipo.textContent =
        informacao.tipo;


    infoAtmosfera.textContent =
        informacao.atmosfera;


    infoComposicao.textContent =
        informacao.composicao;


    infoAneis.textContent =
        informacao.aneis;


    infoLuaPrincipal.textContent =
        informacao.luaPrincipal;


    infoTitulo1.textContent =
        informacao.titulo1;


    infoTexto1.textContent =
        informacao.texto1;


    infoTitulo2.textContent =
        informacao.titulo2;


    infoTexto2.textContent =
        informacao.texto2;


    infoTitulo3.textContent =
        informacao.titulo3;


    infoTexto3.textContent =
        informacao.texto3;


    infoCuriosidade.textContent =
        informacao.curiosidade;


    painelInformacoes.classList.add(
        "aberto"
    );

}


// ==========================================
// FECHAR PAINEL
// ==========================================

function fecharPainel() {

    painelInformacoes.classList.remove(
        "aberto"
    );

}


btnFechar.addEventListener(
    "click",
    fecharPainel
);


// ==========================================
// LIMPAR ANIMAÇÕES
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
// CLIQUE NOS PLANETAS
// ==========================================

planets.forEach((planet, index) => {


    // HOVER

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


    // CLIQUE

    planet.addEventListener(
        "click",
        () => {

            limparAnimacoes();


            planet.classList.add(
                "planeta-ativo"
            );


            if (menus[index]) {

                menus[index].classList.add(
                    "ativo"
                );

            }


            const nome =
                menus[index]
                    .querySelector(
                        ".planeta-nome"
                    )
                    .textContent
                    .trim();


            abrirPainel(nome);

        }
    );

});


// ==========================================
// CLIQUE NO MENU
// ==========================================

menus.forEach((menu, index) => {

    menu.addEventListener(
        "click",
        (event) => {


            if (
                event.target.classList.contains(
                    "btn-leia-mais"
                )
            ) {

                return;

            }


            limparAnimacoes();


            menu.classList.add(
                "ativo"
            );


            if (planets[index]) {

                planets[index].classList.add(
                    "planeta-ativo"
                );

                planets[index].style.scale =
                    "1.5";

            }


            // Abre também ao clicar no nome/menu

            const nome =
                menu.querySelector(
                    ".planeta-nome"
                )
                .textContent
                .trim();


            abrirPainel(nome);

        }
    );

});


// ==========================================
// BOTÃO LEIA MAIS
// ==========================================

botoesLeiaMais.forEach((botao) => {

    botao.addEventListener(
        "click",
        (event) => {


            event.stopPropagation();


            const menu =
                botao.closest(".menu");


            const nome =
                menu.querySelector(
                    ".planeta-nome"
                )
                .textContent
                .trim();


            // Ativa o menu

            limparAnimacoes();

            menu.classList.add(
                "ativo"
            );


            // Ativa o planeta correspondente

            const index =
                Array.from(menus)
                    .indexOf(menu);


            if (planets[index]) {

                planets[index].classList.add(
                    "planeta-ativo"
                );

                planets[index].style.scale =
                    "1.5";

            }


            abrirPainel(nome);

        }
    );

});


// ==========================================
// FECHAR COM ESC
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            fecharPainel();

        }

    }
);