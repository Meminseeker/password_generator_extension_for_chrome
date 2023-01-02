const form = document.querySelector('form');
const lengthElement = document.getElementById('length');
const characterSetElement = document.getElementById('character-set');
const passwordElement = document.getElementById('password');
const copyButton = document.getElementById('copy-button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const length = lengthElement.value;
    const characterSet = characterSetElement.value;
    const password = generateRandomPassword(length, characterSet);
    // console.log(password);

    passwordElement.textContent = password;
    // copyButton.textContent = "Copy";
    copyButton.style.display = "block";

    copyButton.addEventListener('click', () => {
        copyToClipboard(password);
    });

    // chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
    //     chrome.tabs.sendMessage(tabs[0].id, { type: 'password-generated', password });
    // });
});

function generateRandomPassword(length, characterSet) {
    let characters;
    let password = '';

    switch (characterSet) {
        case "1":
            characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            break;
        case "2":
            characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
            break;
        case "3":
            characters = "1234567890";
            break;
        case "4":
            characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!&#*?";
            break;
        default:
            characters = "asd";
            break;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
}
