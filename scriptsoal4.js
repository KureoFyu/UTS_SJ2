let currentQuestion = 1;
const totalQuestions = 5; 

function checkAnswer(button) {
    const correctAnswer = 4;
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextBtn');

    const selectedOption = parseInt(button.dataset.option);

    if (selectedOption === correctAnswer) {
        resultElement.innerText = 'Jawaban Benar!';
        nextButton.style.display = 'block'; 
    } else {
        resultElement.innerText = 'Jawaban benar adalah nomer 4/D,  Lokasi utama pertempuran dalam Perang Palagan Ambarawa adalah di wilayah Jawa Tengah, khususnya di sekitar kota Ambarawa. ' + correctAnswer;
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
