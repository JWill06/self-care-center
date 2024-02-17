var affirmations = ["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];

var affirmationButton = document.querySelector('.button1');
var mantraButton = document.querySelector('.button2');
var messageButton = document.querySelector('.button3');
var message = document.querySelector('#yourMessage');
var messageImage = document.querySelector('#meditationImage');
var removeButton = document.querySelector('.remove');

affirmationButton.addEventListener('click', function(){
    mantraButton.checked = false;
});

mantraButton.addEventListener('click', function(){
    affirmationButton.checked = false;
});

messageButton.addEventListener('click', function(){
    if (!affirmationButton.checked && !mantraButton.checked) {
         alert('A button must be clicked before receiving your message!🙂');
    } else {
        randomMessage();
        }
    });

removeButton.addEventListener('click', function(){
    if(!message.innerText.trim()){
        alert('There must be a message in order to delete it!🗑️');
    } else {
        removeMessage();
    }
});

function randomMessage(){
    var randomAffirmation = getRandomAffirmation(affirmations);
    var randomMantra = getRandomMantra(mantras);
    
    if(affirmationButton.checked){
        getMessage(randomAffirmation);
    } else if(mantraButton.checked){
        getMessage(randomMantra);
    }
}

function getMessage(text) {
    message.innerHTML = '';
    message.innerText += text;
}

function getRandomAffirmation(affirmations){
    var randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
}

function getRandomMantra(mantras){
    var randomIndex = Math.floor(Math.random() * mantras.length);
    return mantras[randomIndex];
}

function removeMessage(){
    messageImage.src = 'assets/meditate.svg'; 
    messageImage.style.display = 'none'; 
    message.innerHTML = `<div id="messageImage" style="display: block">
    <img id="meditationImage" src="assets/meditate.svg" class="svg" alt="Image">
 </div>`;
    
}