$('#buttonStart').click(function () {

    let openText = $('#openText').text();
    let key = $('#key').text();
    let cipherText = $('#cipherText').text();
    
    if (openText.length > 0)
        openToCrypt(lang, openText, key);
    else
        cryptToOpen(lang, cipherText, key);


})

function languageTest(text) {

    let pattern = '/[а-яА-Я]/gu';

    if (text.match(pattern)[0].length > 0)
        return 'ru';
    else
        return 'en';


}

function openToCrypt(lang, text, key) {

}

function cryptToOpen(lang, text, key) {

}
