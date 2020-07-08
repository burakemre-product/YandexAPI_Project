class Translate {
    constructor(text,language) {
        this.apiKey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481"
        this.text = text
        this.language = language
    }

    async getTranslate() {

        const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=${this.language}`)
        const data = response.json()
        return data
    }
}



