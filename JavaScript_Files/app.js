eventlisteners()

function eventlisteners() {
    document.getElementById("form-container").addEventListener("submit",translateText)
}

function translateText(e) {
    let target_text = document.getElementById("target-text")
    let select_language = document.getElementById("select-language")

    let newTranslate = new Translate(target_text.value, select_language.value)

    newTranslate.getTranslate().
    then(data => UI.addTranslateToUı(data.lang.split("-")[0],data.lang.split("-")[1],data.text[0])).
    catch(err => console.log("error occured"))

    e.preventDefault()
}