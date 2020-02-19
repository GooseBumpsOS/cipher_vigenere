$('#buttonStart').click(function () {

    let openText = $('#openText').val();
    let key = $('#key').val();
    let cipherText = $('#cipherText').val();

    if (openText.length > 0)
        openToCrypt(key, openText, languageTest(openText, key));
    else
        cryptToOpen(key, cipherText, languageTest(cipherText, key));


});
$('input[type=radio]').change(function () {

    clearAllinput();

});

function clearAllinput() {

    $('#openText').val("");
    $('#key').val("");
    $('#cipherText').val("");

}

$('input').keyup(function () {

    $(this).val(clearInputByPattern($(this).val()));


});

function clearInputByPattern(text) {

    text = text.replace(/[0-9]/g, '');

    if ($('#ruRadio').prop("checked") === true) {
        text = text.replace(/[A-Za-z]/g, '');
    } else {
        text = text.replace(/[А-Яа-я]/g, '');
    }
    return text;

}


function languageTest(text) {

    if ((text.search(/[а-яА-Я]+/gu) !== -1 && text.search(/[a-zA-Z]+/gu) !== -1)) {

        alert('Некорректный ввод');
        clearAllinput();
        throw new Error('Некорректный ввод. Встретились два типа языка');

    }

    if (text.search(/[a-zA-Z]+/gu) !== -1)
        return 'en';
    else
        return 'ru';


}

function openToCrypt(key, text, lang) {
    if (!(key.length > 0 && text.length > 0)) {
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();
    $('#cipherText').val(vizhener.encryption(lang, text.toUpperCase(), key.toUpperCase()));
}

function cryptToOpen(key, text, lang) {
    if (!(key.length > 0 && text.length > 0)){
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();
    $('#openText').val(vizhener.decryption(lang, key.toUpperCase(), text.toUpperCase()));

}
