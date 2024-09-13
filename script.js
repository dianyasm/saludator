
document.getElementById('miboton').addEventListener('click', saludar)
function saludar() {
    document.getElementById('frase').innerHTML = ('Hola')
}

document.addEventListener('DOMContentLoaded', function () {
    var confettiButton = document.getElementById('miboton');

    confettiButton.addEventListener('click', function () {
        confetti({
            particleCount: 200, 
            spread: 80,        
            origin: { y: 0.6 },
            colors: ['#c007f6','#ff0a0a', '#0aff0a', '#0a0aff', '#ff0aff', '#e3f607'],
            zIndex: 1000       
        });
    });
});

