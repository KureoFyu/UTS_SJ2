let currentQuestion = 1;
const totalQuestions = 5; 

function checkAnswer(button) {
    const correctAnswer = 2;
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextBtn');

    const selectedOption = parseInt(button.dataset.option);

    if (selectedOption === correctAnswer) {
        resultElement.innerText = 'Jawaban Benar!';
        nextButton.style.display = 'block'; 
    } else {
        resultElement.innerText = 'Jawaban benar nomer 2/B, Pangeran Diponegoro merupakan tokoh utama yang memimpin pemberontakan melawan Belanda dalam Perang Palagan Ambarawa. Dia adalah seorang pemimpin Jawa yang sangat dihormati dan mampu mengorganisir perlawanan rakyat Jawa terhadap penjajah Belanda. ' + correctAnswer;
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
