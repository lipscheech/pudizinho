const texts = [
   `Por vezes o amor pode causar dor, isso é certo. Mas quando isso acontece, o melhor remédio é não desistir do
				amor e continuar
				amando. E é isso que eu faço, continuo amando você, mesmo que isso me cause dor. Não porque sou masoquista,
				mas porque o amor que
				sinto por você é maior que qualquer dor que possa sentir. E também porque sei quem você é, sei a mulher
				maravilhosa que es, sei do
				que você é capaz e eu quero está ao seu lado para ver você brilhar. E eu sei que você é capaz de superar
				qualquer obstáculo, de
				vencer qualquer desafio, de superar qualquer dor, porque você é uma mulher forte, corajosa e determinada.
				VOCÊ É FODA!`,
   `Você é meu girassol, em você, encontro a paz que me acalma, a melodia que em meu peito encanta. Como um
				girassol que busca a luz,
				meu coração te procura sempre. Você me fez sorrir e me completou, com seu carinho e com seu calor. Porque
				você é meu caminho, a
				minha base, minha linda louca e mimada, que sabe do poder que tem e que não tem medo de usá-lo.`,
   `Hoje celebramos o dia em que houve o avivamento do amarelo em todo o mundo. O dia que você veio
				para este universo para alegrar todas as nossas vidas. Você não tem noção da energia que vc transmite, da
				alegria que vc
				traz, do amor que vc
				espalha. Do ser incrível que você é, no lidar com as pessoas e com o amor que tem pelos animais. Todos os
				dias você me surpreende e
				me transformar, me faz querer ser alguém igual você, cheia de amor, cheia de paixao ,cheia de compaixão.
				Você não tem noção do quanto você é linda, do quanto é apaixonante, do quanto eu amo observar e te provocar
				explosões de felicidades.`,
            `Com você, aprendi que amar é caminhar juntos, mesmo nas tempestades, e é também admirar o sol nascendo lado
				a lado. Você me faz querer ser alguém melhor, e me transformou em alguém melhor, porque você merece o melhor
				do mundo — e do universo!
				Falta nada se você está comigo, razão da minha vida, presente do céu, quero seu sorriso e o amor de manhã`,
            `Feliz aniversário amor da minha vida, aproveite o resto do seu mês e seu presente. Prometo que serei sempre
				melhor pra atender a sua perfeição.`,
				'Te amo, meu girassol'
];

const typingSpeed = 100; // Velocidade de digitação (ms)
const delayBetweenTexts = 1000; // Intervalo entre os textos (ms)
const paragraphs = document.querySelectorAll(".typing-container p");

let currentParagraph = 0;

function typeText(text, paragraph, callback) {
   let charIndex = 0;

   function typeChar() {
       if (charIndex < text.length) {
           paragraph.textContent += text[charIndex];
           charIndex++;
           setTimeout(typeChar, typingSpeed);
       } else {
           callback();
       }
   }

   typeChar();
}

function startTyping() {
   if (currentParagraph < texts.length) {
       typeText(texts[currentParagraph], paragraphs[currentParagraph], () => {
           currentParagraph++;
           setTimeout(startTyping, delayBetweenTexts);
       });
   }
}

document.addEventListener("DOMContentLoaded", startTyping);