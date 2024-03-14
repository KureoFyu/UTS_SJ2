let currentQuestion = 1;
const totalQuestions = 5; 

function checkAnswer(button) {
    const correctAnswer = 3;
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextBtn');

    const selectedOption = parseInt(button.dataset.option);

    if (selectedOption === correctAnswer) {
        resultElement.innerText = 'Jawaban Benar!';
        nextButton.style.display = 'block'; 
    } else {
        resultElement.innerText = 'Jawaban benar yaitu 3/C,  Perang Palagan Ambarawa berlangsung 20 Oktober 1945. Ini adalah periode di mana pasukan Pangeran Diponegoro berjuang melawan pasukan kolonial Belanda di Jawa Tengah. ' + correctAnswer;
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
