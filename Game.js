//data
const characters = [
    {
        name: ["Roshar"],
        hints: [
            "Planeta onde ocorre a série O Caminho dos Reis.",
            "Possui tempestades violentas e seres chamados de spren.",
            "Kaladin e Shallan são personagens importantes nesse mundo.",
            "A magia é baseada na ligação com spren.",
        ],
        image: "Images/roshar.jpg"
    },
    {
        name: ["Atium"],
        hints: [
            "Metal capaz de amarzenar idade.",
            "Rouba poderes temporais alomânticos.",
            "Vê o futuro de outras pessoas.",
            "Permite que os usuários de alomancia se movam através das linhas de poder em Mistborn.",
        ],
        image: "Images/atium.jpeg.jpg"
    },
    {
        name: ["Nightblood"],
        hints: [
            "É uma espada muito poderosa.",
            "É uma das espadas importantes na trama.",
            "Pode conceder vida a quem é morto por ela.",
            "Seu nome está relacionado à cor."
        ],
        image: "Images/nightblood.jpg"
    },
    {
        name: ["Ferro",],
        hints: [
            "Metal usado em Mistborn para aumentar suas habilidades mágica.",
            "Rouba Força humana.",
            "Puxa fontes de metais próximas.",
            "Armazena peso físico.",
        ],
        image: "Images/ferro.jpeg"
    },
    {
        name: ["Kaladin", "Kaladin Stormblessed", "Kaladin Filho da Tempestade"],
        hints: [
            "Sua jornada pessoal envolve superar traumas e encontrar esperança.",
            "É um personagem central na série.",
            "Possuí um espreno de honra.",
            "É um Cavaleiro Radiante.",
        ],
        image: "Images/kaladin.jpg"
    },
    {
        name: ["Hoid", "Wit", "Midius"],
        hints: [
            "Personagem que aparece em várias obras do Cosmere, muitas vezes sob diferentes identidades",
            "Ele é conhecido por sua astúcia e habilidade de contar histórias.",
            "Sua presença é sutil, mas significativa, na série.",
            "Ele foi um dos indivíduos presentes na destruição de Adonalsium.",
        ],
        image: "Images/hoid.jpg"
    },
    {
        name: ["Eshonai"],
        hints: [
            "`É um dos líderes dos Parshendi em The Stormlight Archive.",
            "É um dos principais antagonistas da série.",
            "Sua raça possui uma conexão única com os Espíritos Antigos.",
            "Sua irmã é Venli",
        ],
        image: "Images/eshonai.jpg"
    },
    {
        name: ["Breath", "Biochroma", "Biocroma"],
        hints: [
            "Qual é o nome do sistema de magia baseado em respiração em Warbreaker",
            "Quanto mais Respirações uma pessoa possui, mais poderosa ela se torna.",
            "Este sistema envolve a transferência de Respiração entre pessoas.",
            "É o sistema de magia predominante no mundo de Nalthis.",
        ],
        image: "Images/breath.jpg"
    },
    {
        name: ["Syl", "Sylphrena"],
        hints: [
            "Espreno do Kaladin.",
            "Ama dançar junto com o vento.",
            "Está ligada à honra.",
            "Seu apoio é crucial para o desenvolvimento de Kaladin como um Radiante.",
        ],
        image: "Images/syl.jpg"
    },
    {
        name: ["Szeth", "Szeth-son-son-Vallano"],
        hints: [
            "Respónsavel pela morte do antigo rei de Alethkar.",
            "Conhecido como o assasino de branco.",
            "Possuí a espada Nightblood.",
            "Vem das terras de Shinovar.",
        ],
        image: "Images/szeth.jpg"
    },
    {
        name: ["Tien"],
        hints: [
            " Ele é um personagem que exerce grande influência sobre Kaladin.",
            "Ele é mencionado diversas vezes em flashbacks de Kaladin.",
            "Sua relação é marcada por amor fraternal e proteção.",
        ],
        image: "Images/tien.jpg"
    },
    {
        name: ["Veil"],
        hints: [
            "É umas das personalidades de Shallan.",
            "Usada especialmete para disfarce.",
            "Ganhou forma pela primeira vez em Palavras de Radiância.",
        ],
        image: "Images/veil.jpg"
    },
    {
        name: ["O Caminho dos Reis"],
        hints: [
            "Este livro é uma parte importante da trama de Dalinar.",
            "Contém os relatos das visões e experiências de Dalinar.",
            "O título do livro é uma referência à sua jornada pessoal.",
        ],
        image: "Images/livro.jpeg"
    },
    {
        name: ["Stormfather", "Pai das Tempestades"],
        hints: [
            "Este personagem é uma figura misteriosa e sábia.",
            "Sua natureza está intimamente ligada aos fenômenos climáticos em Roshar.",
            "É uma entidade divina de poder imenso.",
            "Ele é considerado uma figura sagrada pelos povos de Roshar.",
        ],
        image: "Images/stormfather.png"
    },
    {
        name: ["Lift"],
        hints: [
            "Teve sua aparição em um interlúdio em Palavras de Radiância",
            "O nome do seu espreno é Wyndle.",
            "É de origem de um Bairro de Ladrões na cidade de Azir.",
        ],
        image: "Images/lift.jpg"
    },
    {
        name: ["Padrão"],
        hints: [
            "Espreno associado à habilidade única de criar ilusões",
            "Desempenha um papel crucial na vida de Shallan.",
            "É bisbilhoteiro",
        ],
        image: "Images/padrao.jpg"
    },
    {
        name: ["Jasnah Kholin", "Jasnah"],
        hints: [
            "Ela é conhecida por sua inteligência e racionalidade.",
            "Sua personalidade é muitas vezes descrita como reservada e perspicaz.",
            "Ela pertence à família real de Alethkar.",
            "Alguns a veem como intimidadora.",
        ],
        image: "Images/jasnah.jpg"
    },
    {
        name: ["Tress"],
        hints: [
            "Conhecida pela cor de seus cabelos.",
            "Coleciona xícaras.",
            "Vive em um mar esmeralda.",
            "É uma pirata.",
        ],
        image: "Images/tress.jpg"
    },
    {
        name: ["Scadrial"],
        hints: [
            "Este planeta é o foco principal da série Mistborn.",
            "O nome deste planeta também é usado para se referir ao sistema solar em que se encontra.",
            "Lar de Vin, a protagonista de Mistborn.",
            "O nome deste planeta é frequentemente mencionado nas discussões sobre o equilíbrio entre Ruína e Preservação."
        ],
        image: ""
    },
    {
        name: ["Alomancia", "Alomânticos"],
        hints: [
            "Sistema de magia de Mistborn.",
            "Queima de metais.",
        ],
        image: "Images/atium.jpeg.jpg"
    },
    {
        name: ["Lirin"],
        hints: [ 
            "Médico renomado na cidade de Hearthstone..",
            "Pai de um membro da Ponte Quatro.",
            "Valoriza a vida humana acima de tudo e se esforça para salvar vidas, mesmo em circunstâncias difíceis."
        ],
        image: "Images/lirin.jpg"
    },
    {
        name: ["Adolin", "Adolin Kholin"],
        hints: [
            "Personagem notável por sua habilidade em combate.",
            "Galanteador.",
            "É um fractário.",
            "Tem olhos azuis claros e cabelos loiros com mechas pretas.",
        ],
        image: "Images/adolin.jpg"
    },
    {
        name: ["Renarin", "Renarin Kholin"],
        hints: [
            "Faz parte da família real de Alethkar.",
            "É um Cavaleiro Radiante.",
            "Sofre por ter uma doença conhecida como fraqueza do sangue.",
            "É uma pessoa quieta, próxima do irmão, mas rejeitada por todos os outros."
        ],
        image: "Images/renarin.jpg"
    },
    {
        name: ["Siri"],
        hints: [
            "Conhecida por ser rebelde e colorida.",
            "É enviada para se casar com o Deus-Rei de Hallandren.",
            "Princesa de Idris.",
        ],
        image: "Images/siri.jpg"
    },
    {
        name: ["Vivenna"],
        hints: [
            "Filha mais velha do Rei Dedelin.",
            "Determinada, disciplinada e leal."
        ],
        image: "Images/vivenna.jpg"
    }
];

//Game
let currentCharacter;
let score = 0;
let highestScore = 0;
let attemptCount = 0;

function startGame() {
    document.getElementById('score').innerText = `Pontuação : ${score}`;
    document.getElementById('message').textContent = "";
    document.getElementById('imageContainer').innerHTML = "<div></div>";
    attemptCount = 0;
    const randomIndex = Math.floor(Math.random() * characters.length);
    currentCharacter = characters[randomIndex];
    console.log(currentCharacter);
    document.getElementById('hint').textContent = `Dica 1: ${currentCharacter.hints[0]}`;
}
function checkAnswer() {
    const guess = document.getElementById('guessInput').value.toLowerCase();
    console.log(guess);
    if (currentCharacter.name.some((el) => (el.toLowerCase() == guess))) {
        document.getElementById("start").innerText = "Continuar Jogando";
        score += (25 - (attemptCount * 5));
        highestScore = Math.max(highestScore, score);
        document.getElementById('high-score').innerText = `Pontuação mais alta : ${highestScore}`;
        document.getElementById('score').innerText = `Pontuação : ${score}`;
        document.getElementById('message').textContent = "Parabéns! Você adivinhou certo!";
        const characterImage = document.createElement("img");
        characterImage.src = currentCharacter.image;
        characterImage.id = "game-img";
        document.getElementById('imageContainer').appendChild(characterImage);
        document.getElementById('hint').textContent = '';
    } else {
        attemptCount++;
        if (attemptCount >= 5) {
            document.getElementById('message').textContent = `Desculpe! Você ficou sem tentativas. A resposta correta é ${currentCharacter.name[0]}`;
            highestScore = Math.max(highestScore, score);
            score = 0;
            document.getElementById('score').innerText = `Pontuação : ${score}`;
            document.getElementById('high-score').innerText = `Pontuação mais alta: ${highestScore}`;
            document.getElementById("start").innerText = "Iniciar Jogo";
            document.getElementById('hint').textContent = '';
        } else {
            const hintNumber = attemptCount + 1;
            document.getElementById('hint').textContent = `Dica ${hintNumber}: ${currentCharacter.hints[hintNumber - 1]}`;
            document.getElementById('message').textContent = "Resposta errada! Tente novamente.";
        }
    }
    document.getElementById('guessInput').value = '';
}
