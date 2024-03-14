let currentQuestion = 1;
const totalQuestions = 5; 

function checkAnswer(button) {
    const correctAnswer = 1;
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextBtn');

    const selectedOption = parseInt(button.dataset.option);

    if (selectedOption === correctAnswer) {
        resultElement.innerText = 'Jawaban Benar!';
        nextButton.style.display = 'block'; 
    } else {
        resultElement.innerText = 'Jawaban benar yaitu Nomer 1/A, Pertikaian kekuasaan antara Pangeran Diponegoro dan Belanda: Pada awal abad ke-19, terjadi ketegangan antara Belanda yang menguasai Hindia Belanda (sekarang Indonesia) dan Pangeran Diponegoro yang merupakan tokoh Jawa yang memperjuangkan kemerdekaan Jawa dari kekuasaan kolonial Belanda. Pangeran Diponegoro menentang kebijakan-kebijakan kolonial yang merugikan rakyat dan agresi terhadap budaya dan agama Jawa. ' + correctAnswer;
        nextButton.style.display = 'none';  
    }
}


function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        resetQuiz(); 
    } else {
        alert('Ini adalah soal terakhir.');
    }
}

function resetQuiz() {
    document.getElementById('result').innerText = '';
    document.getElementById('nextBtn').style.display = 'none';
}
