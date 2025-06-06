const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a promoção da diversidade, incluindo a orientação sexual, pode se alinhar com as tradições da Semana Farroupilha para fortalecer a conscientização sobre a extinção de espécies animais?",
        alternativas: [
            {
                texto: "A Semana Farroupilha, ao celebrar a cultura gaúcha, poderia incorporar em seus eventos discussões sobre a importância da diversidade humana, incluindo a homossexualidade, como um valor fundamental para uma sociedade justa. Essa mesma valorização da vida, em todas as suas formas, pode ser expandida para a causa da extinção animal, mostrando que a defesa da vida em sua plenitude, seja ela humana ou animal, é um princípio unificador.",
                afirmacao: "A inclusão de palestras e atividades que abordem a coexistência pacífica e o respeito às diferenças pode abrir caminho para o engajamento em causas ambientais."
            },
            {
                texto: "Ao invés de ser um obstáculo, a rica tradição da Semana Farroupilha pode ser um veículo para promover a diversidade. Imagine rodas de chimarrão onde se discute não apenas a história gaúcha, mas também a importância do respeito às diferentes orientações sexuais e o impacto da ação humana na perda de biodiversidade.",
                afirmacao: "Eventos que incentivem a criação de artefatos culturais que representem a diversidade e a fauna ameaçada podem gerar um novo olhar sobre a Semana Farroupilha e a causa ambiental."
            }
        ]
    },
    {
        enunciado: "De que maneira a luta contra a homofobia e a preservação das tradições da Semana Farroupilha podem se complementar na promoção de práticas sustentáveis que evitem a extinção de animais?",
        alternativas: [
            {
                texto: "A luta contra a homofobia busca construir uma sociedade mais justa e igualitária, onde o respeito à individualidade é primordial. Essa mentalidade de respeito pode ser estendida ao meio ambiente e à fauna. A Semana Farroupilha, por sua vez, ao valorizar a conexão com a terra e o campo, pode reforçar a ideia de que a preservação ambiental é uma herança a ser mantida.",
                afirmacao: "A união desses valores pode inspirar ações de consumo consciente e apoio a projetos de conservação ambiental em comunidades rurais do Sul do Brasil.

            },
            {
                texto: " Combater a homofobia envolve questionar preconceitos e estereótipos, o que pode abrir a mente para novas perspectivas sobre como nos relacionamos com o mundo. A Semana Farroupilha, com sua ênfase na vida campeira e na relação com a natureza, pode ser o cenário para promover a adoção de práticas agrícolas sustentáveis e o uso responsável dos recursos naturais.",
                afirmacao: "Pense em ações de reflorestamento em áreas degradadas ou a promoção da agricultura familiar orgânica que proteja habitats de espécies ameaçadas."
            }
        ]
    },
    {
        enunciado: "Quais estratégias de comunicação que abordam a homofobia poderiam ser adaptadas para conscientizar o público da Semana Farroupilha sobre a extinção de animais, mantendo o respeito às particularidades de cada tema?",
        alternativas: [
            {
                texto: " Campanhas que utilizam narrativas pessoais e depoimentos, eficazes na luta contra a homofobia, poderiam ser adaptadas para a conscientização ambiental. Durante a Semana Farroupilha, poderiam ser apresentadas histórias de produtores rurais que adotam práticas sustentáveis para proteger a fauna local, ou relatos de como a extinção de uma espécie afeta o equilíbrio de um ecossistema.",
                afirmacao: "A chave é criar uma conexão emocional com o público, assim como se faz ao abordar a homofobia, mostrando o impacto real nas vidas (humanas e animais)."
            },
            {
                texto: "O uso de elementos artísticos e culturais, como músicas, poesias e peças teatrais que abordam a homofobia, pode ser replicado na Semana Farroupilha para falar sobre a extinção animal. Poderiam ser criadas letras de músicas gaúchas que falassem sobre a beleza da fauna nativa e a urgência de sua preservação, ou encenações que retratassem o drama da perda de habitats.",
                afirmacao: "A utilização de ícones e símbolos regionais pode potencializar a mensagem e torná-la mais próxima da realidade do público gaúcho"
            }
        ]
    },
    {
        enunciado: "Como a inclusão de debates sobre homofobia na programação da Semana Farroupilha pode, indiretamente, contribuir para o engajamento da comunidade na proteção de espécies ameaçadas de extinção?",
        alternativas: [
            {
                texto: "A inclusão de debates sobre homofobia na Semana Farroupilha pode promover um ambiente de maior aceitação e respeito às diferenças. Uma comunidade que aprende a valorizar a diversidade humana está mais propensa a valorizar também a diversidade da vida em geral, incluindo a animal.",
                afirmacao: "Ao combater a intolerância em uma esfera, cria-se um precedente para a tolerância em outras, pavimentando o caminho para o engajamento em causas ambientais."
            },
            {
                texto: "Discutir a homofobia na Semana Farroupilha pode desafiar preconceitos e abrir espaço para o pensamento crítico. Essa capacidade de questionar e de se informar pode ser transferida para a questão da extinção animal, incentivando as pessoas a buscar informações sobre as causas e soluções para o problema.",
                afirmacao: "A conscientização sobre a complexidade da homofobia pode, de forma análoga, levar a um maior entendimento sobre a complexidade das relações ecológicas e a necessidade de preservação."
            }
        ]
    },
    {
        enunciado: "De que forma a celebração da identidade e da tradição na Semana Farroupilha pode ser um ponto de partida para abordar a homofobia e, ao mesmo tempo, incentivar a conservação da fauna silvestre local?",
        alternativas: [
            {
                texto: "A Semana Farroupilha, ao celebrar a identidade gaúcha, pode enfatizar que essa identidade é construída sobre valores como o respeito e a camaradagem. Esses mesmos valores podem ser expandidos para incluir o respeito à diversidade sexual e à vida selvagem. Poderiam ser organizadas palestras com historiadores e naturalistas que explicassem como a fauna local faz parte da identidade e da história do Rio Grande do Sul.",
                afirmacao: "A valorização da herança cultural pode incluir a herança ambiental, mostrando que ambas estão intrinsecamente ligadas."
            },
            {
                texto: " A tradição da Semana Farroupilha, com seus rodeios e acampamentos, pode ser usada como um palco para a conscientização. Poderiam ser promovidas exposições de fotos da fauna nativa, com informações sobre espécies ameaçadas, ou até mesmo atividades educativas para crianças que ensinassem sobre a importância da biodiversidade. Ao mesmo tempo, debates sobre homofobia poderiam ser inseridos em espaços abertos, utilizando a informalidade do evento para desmistificar o tema.",
                afirmacao: "A celebração da cultura e da vida campeira pode ser um convite à reflexão sobre a responsabilidade humana na preservação de todos os seres vivos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Walesca";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
