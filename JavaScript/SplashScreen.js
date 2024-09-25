//Codigo de Splash Screen
window.addEventListener("load", function() {
    // Simula una carga de contenido (puedes personalizar el tiempo)
    setTimeout(function() {
        document.getElementById('splash').classList.add('hidden');
        document.body.classList.add('show-content');
    }, 2000); // El splash dura 2 segundos antes de empezar a desvanecerse
});

window.addEventListener("load", function() {
var video = document.getElementById('splash-video');
video.onended = function() {
document.getElementById('splash').classList.add('hidden');
document.body.classList.add('show-content');
};
});