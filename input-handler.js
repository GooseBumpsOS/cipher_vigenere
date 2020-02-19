$('#buttonStart').click(function () {

    let openText = $('#openText').val();
    let key = $('#key').val();
    let cipherText = $('#cipherText').val();

    if (openText.length > 0)
        openToCrypt(key, openText, languageTest(openText));
    else
        cryptToOpen(key, cipherText, languageTest(cipherText));


});

$('#openText').keyup(function () {

    $(this).val(deleteNum($(this).val()));

});

$('#cipherText').keyup(function () {

    $(this).val(deleteNum($(this).val()));

});

function deleteNum(text) {

    return text.replace(/[0-9]/g, '');

}


function languageTest(text) {

    if (text.search(/[а-яА-Я]+/gu) !== -1 && text.search(/[a-zA-Z]+/gu) !== -1) {

        alert('Некорректный ввод');
        throw new Error('Некорректный ввод. Встретились два типа языка');

    }

    if (text.search(/[a-zA-Z]+/gu) !== -1)
        return 'en';
    else
        return 'ru';


}

function openToCrypt(key, text, lang) {

    console.log(vizhener.encryption('ru', text.toUpperCase, key));;

}

function cryptToOpen(key, text, lang) {

    console.log(vizhener.decryption(lang, key.toUpperCase, text));

}
