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
        resultElement.innerText = 'Salah yang benar nomer 3/C ,Setelah Perang Palagan Ambarawa, hasil akhirnya adalah penangkapan dan pengasingan Pangeran Diponegoro ke Manado oleh Belanda. Pangeran Diponegoro, yang memimpin pemberontakan besar terhadap Belanda di Jawa, akhirnya ditangkap pada 28 Maret 1830 setelah beberapa tahun perang yang sengit. Setelah penangkapannya, Pangeran Diponegoro diasingkan ke Manado, sebuah wilayah yang jauh dari Jawa, untuk mencegahnya memimpin pemberontakan lebih lanjut. Penangkapan ini menandai akhir dari perang yang sangat berdarah ini, meskipun perlawanan terhadap kekuasaan kolonial Belanda terus berlanjut di tempat lain di Indonesia. ' + correctAnswer;
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
