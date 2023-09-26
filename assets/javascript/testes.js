const words = [
    'abacaxi',
    'banana',
    'cachorro',
    'diamante',
    'elefante',
    'futebol',
    'girassol',
    'hamburguer',
    'igreja',
    'janela',
    'kanguru',
    'laranja',
    'macaco',
    'navio',
    'ocidental',
    'piano',
    'quantum',
    'rosa',
    'sapato',
    'tigre',
    'uva',
    'vulcão',
    'xadrez',
    'yoga',
    'zebra',
    'amarelo',
    'bicicleta',
    'chocolate',
    'dinossauro',
    'eletricidade',
    'floresta',
    'guitarra',
    'helicóptero',
    'ilha',
    'jardim',
    'ketchup',
    'lápis',
    'montanha',
    'notícia',
    'ombro',
    'papagaio',
    'quadro',
    'raio',
    'sorvete',
    'tartaruga',
    'umbigo',
    'violino',
    'xícara',
    'yogurte',
    'zumbi',
    'astronauta',
    'bicarbonato',
    'chuveiro',
    'dinheiro',
    'elevador',
    'fotografia',
    'geladeira',
    'hospedagem',
    'iglu',
    'jipe',
    'koala',
    'labirinto',
    'mala',
    'navegação',
    'oliveira',
    'pipoca',
    'queijo',
    'radar',
    'sapateira',
    'tambor',
    'urso',
    'vaca',
    'xicrinha',
    'iogurte',
    'zoológico',
    'amizade',
    'beleza',
    'carro',
    'dente',
    'eleição',
    'flor',
    'gato',
    'hotel',
    'ilha',
    'joia',
    'karma',
    'lua',
    'música',
    'nadar',
    'orquídea',
    'pizza',
    'qualidade',
    'raízes',
    'sol',
    'televisão',
    'universo',
    'viagem',
    'xerife',
    'yoga',
    'zeppelin',
  ];


const try_btn = document.getElementById('tryIt')
try_btn.addEventListener('click', tryIt)

let randomWord = Math.random() * 100
randomWord = Math.floor(randomWord)

const chosenWord = words[randomWord]
const chosenWordArray = Array.from(chosenWord)


window.alert(`A palavra tem ${chosenWord.length} letras`)
console.log(`A palavra tem ${chosenWord.length} letras`)

function tryIt(){
    let letter = document.getElementById('letter').value
    
    if(chosenWordArray.includes(letter)){

        console.log(letter,)let letter = document.getElementById('letter').value
    }
}y