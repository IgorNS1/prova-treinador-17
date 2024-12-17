const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_17.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_17[currentQuestionIndex].question
    questions_page_17[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_17.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_17 = [
    {
        question: 'O que um Cliente espera ao pedir sua comida no McDonald\'s?',
        answer: [
            { text: 'Ele espera apenas rapidez no atendimento, sem se preocupar com o sabor ou qualidade da comida.', correct: false },
            { text: 'Ele deseja ser atendido de forma impessoal e rápida, sem interação com a equipe.', correct: false },
            { text: 'Ele quer uma comida saborosa, que pareça e tenha gosto de ter sido servida rapidamente por uma equipe simpática e acolhedora (ou seja, você).', correct: true },
            { text: 'Ele quer uma comida sem sabor, mas que seja barata e servida em grande quantidade.', correct: false },
        ]
    },
    {
        question: 'Como identificamos o Padrão Ouro das Bebidas?',
        answer: [
            { text: 'Apenas a aparência e temperatura das bebidas são importantes.', correct: false },
            { text: 'O sabor não importa desde que a temperatura esteja certa.', correct: false },
            { text: 'Apenas a textura das bebidas é importante para definir o padrão ouro.', correct: false },
            { text: 'Aparência, temperatura adequada ao tipo de produto (quentes ou frias), textura e sabor característico ao produto.', correct: true },
        ]
    },
    {
        question: 'Por que é importante entregar primeiro os sacos e depois as bebidas e sobremesas, seguindo uma ordem específica?',
        answer: [
            { text: 'Para garantir que os itens mais pesados sejam entregues primeiro, sem preocupação com a apresentação.', correct: false },
            { text: 'Para garantir uma apresentação organizada e facilitar o manuseio dos itens pelo cliente.', correct: true },
            { text: 'Para acelerar o processo de entrega sem seguir nenhuma ordem específica.', correct: false },
            { text: 'Porque os sacos não podem ser entregues após as bebidas ou sobremesas.', correct: false },
        ]
    },
    {
        question: 'Quando falamos de modificar pedido, qual é a alternativa incorreta?',
        answer: [
            { text: 'Deve-se modificar o pedido apenas após o cliente confirmar as mudanças.', correct: false },
            { text: 'Para modificar o pedido basta pressionar a tecla "MODIFICAR PEDIDO" e efetuar as alterações desejadas.', correct: true },
            { text: 'Não é possível modificar o pedido depois de enviado para a cozinha.', correct: false },
            { text: 'A modificação do pedido deve ser feita apenas por um supervisor ou gerente.', correct: false },
        ]
    },
    {
        question: 'Por que devemos servir somente alimentos preparados corretamente?',
        answer: [
            { text: 'A primeira razão pela qual os clientes vêm ao McDonald\'s é a nossa comida, outro ponto é a Segurança Alimentar e sempre devemos garantir a experiência do cliente.', correct: true },
            { text: 'Os alimentos preparados corretamente garantem que os clientes comam rapidamente.', correct: false },
            { text: 'A comida pode ser servida de qualquer forma, pois a experiência do cliente não depende disso.', correct: false },
            { text: 'Podemos improvisar no preparo dos alimentos, pois os clientes não se importam muito com isso.', correct: false },
        ]
    },
    {
        question: 'Cite três formas de Fazer Rápido.',
        answer: [
            { text: 'Fazer tudo o mais rápido possível, sem se preocupar com a qualidade.', correct: false },
            { text: 'Sempre esperar que o cliente espere mais, assim garantimos que o atendimento seja feito de forma tranquila.', correct: false },
            { text: 'Ignorar a organização do trabalho e se focar apenas na velocidade de execução.', correct: false },
            { text: 'Pensar antecipadamente sobre o reabastecimento, comunicar-se com a equipe e antecipar volumes elevados.', correct: true },
        ]
    },
    {
        question: 'Como posso promover a economia circular com os clientes?',
        answer: [
            { text: 'Promovendo práticas de reutilização e reciclagem e conscientizando os clientes sobre o impacto ambiental.', correct: false },
            { text: 'Sempre oferecer produtos em embalagens descartáveis e sem considerar alternativas sustentáveis.', correct: false },
            { text: 'Sendo gentil com o cliente sempre que possível.', correct: true },
            { text: 'Evitar falar sobre sustentabilidade com os clientes, pois isso não impacta a experiência deles.', correct: false },
        ]
    },
    {
        question: 'Como devem ser Padrões de sabor dos sanduíches?',
        answer: [
            { text: 'Os sabores dos sanduíches devem ser o mais simples possível, sem muitas combinações de ingredientes.', correct: false },
            { text: 'Os nossos produtos são feitos utilizando vários ingredientes cuidadosamente selecionados para garantir que os sabores se complementem.', correct: true },
            { text: 'Os sanduíches devem ser preparados rapidamente, sem se preocupar com a combinação de sabores.', correct: false },
            { text: 'O sabor dos sanduíches não importa desde que eles sejam feitos com ingredientes baratos e em grande quantidade.', correct: false },
        ]
    },
    {
        question: 'Qual a afirmação correta?',
        answer: [
            { text: 'Todos os ingredientes são utilizados diretamente sem necessidade de tratamento ou preparação.', correct: false },
            { text: 'Alguns dos sanduíches ou bebidas que vendemos têm ingredientes que precisam ser tratados ou preparados antes de usá-los.', correct: true },
            { text: 'A preparação dos ingredientes é opcional, desde que o sabor final seja bom.', correct: false },
            { text: 'Não há necessidade de tratar ingredientes antes de usá-los, independentemente do tipo de alimento.', correct: false },
        ]
    },
    {
        question: 'Cite 2 formas de cumprir a promessa FAZER RÁPIDO?',
        answer: [
            { text: 'Pense antecipadamente sobre o reabastecimento e antecipe volumes elevados.', correct: false },
            { text: 'Ignorar o planejamento, apenas focando em atender rapidamente.', correct: false },
            { text: 'Ajude o cliente em todas as fases da jornada.', correct: true },
            { text: 'Pressione a equipe para que tudo seja feito sem qualidade, apenas focando na velocidade.', correct: false },
        ]
    },
    {
        question: 'Para que servem as teclas de tamanho no POS?',
        answer: [
            { text: 'Elas são usadas para modificar os preços dos itens no menu de forma rápida.', correct: false },
            { text: 'São usadas para adicionar promoções ou descontos aos itens do menu.', correct: false },
            { text: 'São utilizadas para selecionar a quantidade de um item do menu. A quantidade padrão é sempre o mais popular e o mais lógico.', correct: true },
            { text: 'São usadas para registrar a quantidade de itens, de acordo com as opções padrão ou customizadas do cliente.', correct: false },
        ]
    },
    {
        question: 'Por quanto tempo devemos deixar as McFritas escorrer depois de retirarmos do óleo?',
        answer: [
            { text: 'De 5 a 10 segundos.', correct: true },
            { text: 'De 30 a 60 segundos.', correct: false },
            { text: 'De 1 a 2 minutos.', correct: false },
            { text: 'Não há necessidade de deixar as McFritas escorrerem.', correct: false },
        ]
    },
    {
        question: 'Ser positivo é?',
        answer: [
            { text: 'Fazer as coisas sem se importar com os problemas, ignorando o que acontece ao redor.', correct: false },
            { text: 'Ser rápido nas respostas, mesmo que isso signifique ser rude ou impessoal.', correct: false },
            { text: 'Tornar as coisas mais fáceis sendo otimista e construtivo.', correct: true },
            { text: 'Não levar os problemas a sério, já que tudo sempre dá certo no final.', correct: false },
        ]
    },
    {
        question: 'Quem é responsável por manter o restaurante limpo?',
        answer: [
            { text: 'Apenas os funcionários de limpeza são responsáveis por isso.', correct: false },
            { text: 'Somente os gerentes devem garantir que o restaurante esteja limpo.', correct: false },
            { text: 'Os clientes devem ser responsáveis pela limpeza, já que eles geram a sujeira.', correct: false },
            { text: 'Manter um restaurante limpo é responsabilidade de todos.', correct: true },
        ]
    },
    {
        question: 'Qual o tempo de espera para as bebidas frias?',
        answer: [
            { text: 'Não há tempo de espera para bebidas frias.', correct: true },
            { text: 'As bebidas frias devem esperar no mínimo 10 minutos antes de serem servidas.', correct: false },
            { text: 'O tempo de espera para bebidas frias é de 5 minutos para garantir a qualidade.', correct: false },
            { text: 'As bebidas frias devem ser servidas imediatamente após o pedido.', correct: false },
        ]
    },
]