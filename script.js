const container = document.querySelector('#js-container');
const btn = document.querySelector('#js-btn');

function showCrow() {
    const crowImg = document.querySelector('#js-crow-img');
    const crowSpeechBubble = document.querySelector('#js-speech-bubble');
    crowSpeechBubble.style.display = 'block';
    crowImg.style.display = 'block';

    const messages = ['Bodya es un asno D:<', 'зла ти людина', 'нехороша :('];

    for (let i = 0; i < messages.length; i++) {

        setTimeout(function() {
            crow.say(messages[i]);
        }, i * 2000);
    }
}

const crow = {
    speechBubble: document.querySelector('#js-speech-bubble'),
    say: function(message) {
        this.speechBubble.textContent = message;
    },
}

btn.addEventListener('click', showCrow);
btn.addEventListener('click', function() {
    btn.style.display = 'none';
})
