
class UI {

    static addTranslateToUı(currentLanguage,targetLanguage,translatedText) {
        
        const outputDiv = document.getElementById("output")

        const firstImage = document.getElementById("outputImage1")
        const secondImage = document.getElementById("outputImage2")
        const translated_Text = outputDiv.firstElementChild

        firstImage.src = `images/${currentLanguage}.png`
        secondImage.src = `images/${targetLanguage}.png`
        translated_Text.textContent = translatedText
    }
}

