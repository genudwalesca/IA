const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "De que maneira a luta contra a homofobia e a preservação das tradições da Semana Farroupilha podem se complementar na promoção de práticas sustentáveis que evitem a extinção de animais?",
        alternativas: [
            {
                texto: "A luta contra a homofobia busca construir uma sociedade mais justa e igualitária, onde o respeito à individualidade é primordial. Essa mentalidade de respeito pode ser estendida ao meio ambiente e à fauna. A Semana Farroupilha, por sua vez, ao valorizar a conexão com a terra e o campo, pode reforçar a ideia de que a preservação ambiental é uma herança a ser mantida. A união desses valores pode inspirar ações de consumo consciente e apoio a projetos de conservação ambiental em comunidades rurais do Sul do Brasil.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Combater a homofobia envolve questionar preconceitos e estereótipos, o que pode abrir a mente para novas perspectivas sobre como nos relacionamos com o mundo. A Semana Farroupilha, com sua ênfase na vida campeira e na relação com a natureza, pode ser o cenário para promover a adoção de práticas agrícolas sustentáveis e o uso responsável dos recursos naturais. Pense em ações de reflorestamento em áreas degradadas ou a promoção da agricultura familiar orgânica que proteja habitats de espécies ameaçadas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como a promoção da diversidade, incluindo a orientação sexual, pode se alinhar com as tradições da Semana Farroupilha para fortalecer a conscientização sobre a extinção de espécies animais?",
        alternativas: [
            {
                texto: "A Semana Farroupilha, ao celebrar a cultura gaúcha, poderia incorporar em seus eventos discussões sobre a importância da diversidade humana, incluindo a homossexualidade, como um valor fundamental para uma sociedade justa. Essa mesma valorização da vida, em todas as suas formas, pode ser expandida para a causa da extinção animal, mostrando que a defesa da vida em sua plenitude, seja ela humana ou animal, é um princípio unificador. A inclusão de palestras e atividades que abordem a coexistência pacífica e o respeito às diferenças pode abrir caminho para o engajamento em causas ambientais.",
                afirmacao: "afirmação"
            },
            {
                texto: " Ao invés de ser um obstáculo, a rica tradição da Semana Farroupilha pode ser um veículo para promover a diversidade. Imagine rodas de chimarrão onde se discute não apenas a história gaúcha, mas também a importância do respeito às diferentes orientações sexuais e o impacto da ação humana na perda de biodiversidade. Eventos que incentivem a criação de artefatos culturais que representem a diversidade e a fauna ameaçada podem gerar um novo olhar sobre a Semana Farroupilha e a causa ambiental.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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
