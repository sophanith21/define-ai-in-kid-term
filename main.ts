controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer("B")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    checkAnswer("A")
})
function checkAnswer (answer: string) {
    selectedAnswer = answer
    if (selectedAnswer == correctAnswers[currentQuestion]) {
        game.splash("✅ Correct!")
    }
    if (!(selectedAnswer == correctAnswers[currentQuestion])) {
        game.splash("❌ Wrong!")
    }
    currentQuestion += 1
    if (currentQuestion < questionTexts.length) {
        askQuestion(currentQuestion)
    } else {
        // Destroy previous text sprites
        if (questionTextSprite) {
            questionTextSprite.destroy(effects.spray, 100)
        }
        if (optionATextSprite) {
            optionATextSprite.destroy(effects.spray, 100)
        }
        if (optionBTextSprite) {
            optionBTextSprite.destroy(effects.spray, 100)
        }
    }
}
function askQuestion (index: number) {
    // Destroy previous text sprites
    if (questionTextSprite) {
        questionTextSprite.destroy(effects.spray, 100)
    }
    if (optionATextSprite) {
        optionATextSprite.destroy(effects.spray, 100)
    }
    if (optionBTextSprite) {
        optionBTextSprite.destroy(effects.spray, 100)
    }
    // Create new ones
    questionTextSprite = textsprite.create(questionTexts[index], 0)
    questionTextSprite.setPosition(10, 60)
    optionATextSprite = textsprite.create("A: " + optionsA[index], 0)
    optionATextSprite.setPosition(10, 80)
    optionBTextSprite = textsprite.create("B: " + optionsB[index], 0)
    optionBTextSprite.setPosition(10, 100)
}
let optionBTextSprite: TextSprite = null
let optionATextSprite: TextSprite = null
let questionTextSprite: TextSprite = null
let selectedAnswer = ""
let currentQuestion = 0
let correctAnswers: string[] = []
let optionsB: string[] = []
let optionsA: string[] = []
let questionTexts: string[] = []
// Setup
scene.setBackgroundColor(8)
let robot1 = sprites.create(assets.image`Robot1`, SpriteKind.Player)
let robot2 = sprites.create(assets.image`Robot1`, SpriteKind.Player)
let pic = sprites.create(assets.image`picAccount`, SpriteKind.Player)
pic.setPosition(80, 30)
scene.centerCameraAt(10, 80)
robot2.setPosition(-50, 120)
let titleImg = image.create(120, 10)
titleImg.printCenter("AIplayground", 1)
let title = sprites.create(titleImg, SpriteKind.Player)
title.setPosition(-30, 30)
let titleUser = image.create(120, 10)
titleUser.printCenter("Dara", 1)
let user = sprites.create(titleUser, SpriteKind.Player)
user.setPosition(55, 30)
// Questions + Answers
questionTexts = ["Q1: Is AI smart?", "Q2: Can AI sleep?"]
optionsA = ["Yes", "Yes"]
optionsB = ["No", "No"]
correctAnswers = ["A", "B"]
// Start the quiz
askQuestion(currentQuestion)
