function startQuiz() {
    document.querySelector('.start-btn').innerText = 'Loading...';
    setTimeout(function() {
        window.location.href = "/Soal 1/soal1.html";
    }, 5000); 
}