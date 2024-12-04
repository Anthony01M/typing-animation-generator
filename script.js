document.getElementById('textForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const animatedText = document.getElementById('animatedText');

    animatedText.textContent = inputText;
    animatedText.style.animation = 'none';
    animatedText.offsetHeight;
    animatedText.style.animation = 'typing 5s steps(' + inputText.length + ', end), blink-caret 0.75s step-end infinite';
});

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});