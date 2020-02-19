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
        if (lang !== "ru" && lang !== "en" || text.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < text.length; i++) {
            s += this.square[this[lang].indexOf(text[i])][this[lang].indexOf(key[i])];
        }
        return s;
    },
    decryption : function (lang, key, cipher) {
        if (lang !== "ru" && lang !== "en" || cipher.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < cipher.length; i++) {
            var row = this[lang].indexOf(key[i])
            coll = this.square[row].indexOf(cipher[i]);
            s += this[lang][coll];
        }
        return s;
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