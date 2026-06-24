// ==========================================
// SCRIPT COMPLETO
// ==========================================

// Seleciona todos os planetas
const planets = document.querySelectorAll(".planeta");

// Seleciona todos os menus laterais
const menus = document.querySelectorAll(".menu");

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

    // salva o transform original
    const originalTransform =
        getComputedStyle(planet).transform;

    // ======================================
    // HOVER
    // ======================================

    planet.addEventListener(
        "mouseenter",
        () => {

            // aumenta sem achatar
            planet.style.scale = "1.15";

        }
    );

    planet.addEventListener(
        "mouseleave",
        () => {

            // volta tamanho normal
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

            // ativa planeta
            planet.classList.add(
                "planeta-ativo"
            );

            // ativa menu correspondente
            if (menus[index]) {

                menus[index].classList.add(
                    "ativo"
                );

            }

            // nome do planeta
            const name =
                planet.classList[1] ||
                "Planeta";

            alert(
                "Você clicou em " + name
            );

        }
    );

});

// ==========================================
// CLIQUE NO MENU LATERAL
// ==========================================

menus.forEach((menu, index) => {

    menu.addEventListener(
        "click",
        () => {

            limparAnimacoes();

            // ativa menu
            menu.classList.add(
                "ativo"
            );

            // ativa planeta correspondente
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
// ROTAÇÃO DO SISTEMA SOLAR
// ==========================================

const solar =
    document.querySelector(
        ".sistema-solar"
    );

let rotation = 0;

function rotateSolarSystem() {

    rotation += 0.02;

    // rotação 3D suave
    solar.style.transform =
        `rotateY(${rotation}deg)`;

    requestAnimationFrame(
        rotateSolarSystem
    );

}

// inicia animação
rotateSolarSystem();