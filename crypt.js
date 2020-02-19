var vizhener = {
    ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
    en : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    square : [],
    genSqViz : function (lang) {
        var l = this[lang], square = [];
        for (var i = 0; i < l.length; i++) {
            this.square[i] = l.slice(i).concat(l.slice(0, i));
        }
    },
    encryption : function (lang, text, key) {
        if (lang !== "ru" && lang !== "en") return false;
        if (text.length !== key.length) key = this.genKey(text, key);
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < text.length; i++) {
            s += this.square[this[lang].indexOf(text[i])][this[lang].indexOf(key[i])];
        }
        return s;
    },
    decryption : function (lang, key, cipher) {
        if (lang !== "ru" && lang !== "en") return false;
        if (cipher.length !== key.length) key = this.genKey(cipher, key);
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < cipher.length; i++) {
            var row = this[lang].indexOf(key[i])
            coll = this.square[row].indexOf(cipher[i]);
            s += this[lang][coll];
        }
        return s;
    },
    genKey : function (text, key) {

        for (let i = 0; i < Math.ceil(text.length/key.length); i++) {

            key = key.concat(key);
        }

        key = key.concat(key.slice(0, text.length % key.length));

        console.log(key);
        console.log(text);

        return key;

    }
};

/*
*
* vizhener.encryption (язык шифра - ru | en , шифруемый текст , текст ключ)
*
* vizhener.decryption (язык шифра - ru | en , ключ , текст шифра)
*
* */

//
// document.write (vizhener.encryption("en", "ATTACKATDAWN", "LEMONLEMONLE") + "<br>"); //(en) шифруем
// document.write (vizhener.decryption("en", "LEMONLEMONLE", "LXFOPVEFRNHR") + "<br>"); //(en) расшифровываем
//
// document.write (vizhener.encryption("ru", "ПОЖАРГОРИМ", "ЖОПАЖОПАЖО") + "<br>"); //(ru) шифруем
// document.write (vizhener.decryption("ru", "ЖОПАЖОПАЖО", "ЦЭЦАЧСЮРПЫ") + "<br>"); //(ru) расшифровываем