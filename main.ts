function startGame () {
    timer.after(800, function () {
        name_p1 = textsprite.create("Player 1", 8, 11)
        name_p1.setPosition(28, 6)
        score_p1 = statusbars.create(20, 4, StatusBarKind.Health)
        score_p1.setPosition(15, 15)
        score_p1.value = 100
        player1 = sprites.create(robot1, SpriteKind.Player)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), player1)
        player1.setPosition(13, 100)
        namep2 = textsprite.create("Player 2", 8, 11)
        namep2.setPosition(132, 6)
        score_p2 = statusbars.create(20, 4, StatusBarKind.Health)
        score_p2.setPosition(145, 14)
        score_p2.value = 100
        player2 = sprites.create(robot1, SpriteKind.Player)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), player2)
        player2.setPosition(147, 100)
        timer.after(1000, function () {
            countDown()
        })
    })
}
info.onCountdownEnd(function () {
    question.setText("")
    answer1.setText("")
    answer2.setText("")
    textSprite = textsprite.create("Correct Answer: " + answerList[currentIndex], 0, 1)
    textSprite.setPosition(77, 57)
    checkAnswer()
    timer.after(3000, function () {
        textSprite.setText("")
        currentIndex = currentIndex + 1
        qmcDisplay()
    })
})
function qmcDisplay () {
    questionList = ["1. What can AI do ?", "2. What is AI like?", "3. Why is AI special"]
    choiceA = ["A. Think and Learn", "A. A smart robot", "A. It eats food"]
    choiceB = ["B. Sleep", "B. A toy car", "B. It learns from people"]
    answerList = ["A", "A", "B"]
    timer.after(500, function () {
        if (currentIndex < questionList.length) {
            info.startCountdown(10)
            question = textsprite.create(questionList[currentIndex])
            question.setPosition(78, 33)
            answer1 = textsprite.create(choiceA[currentIndex])
            answer1.setPosition(79, 55)
            answer2 = textsprite.create(choiceB[currentIndex])
            answer2.setPosition(78, 72)
            player1Answer = ""
            player2Answer = ""
        } else {
            game.splash("Competition finished!")
            if (score_p1.value > score_p2.value) {
                game.splash("Player 1 WINS!")
            } else if (score_p1.value < score_p2.value) {
                game.splash("Player 2 WINS!")
            } else {
                game.splash("It is a tie!")
            }
            game.reset()
        }
    })
}
function checkAnswer () {
    if (player1Answer == answerList[currentIndex]) {
        score_p1.value += 20
    } else {
        score_p1.value -= 20
    }
    if (player2Answer == answerList[currentIndex]) {
        score_p2.value += 20
    } else {
        score_p2.value -= 20
    }
}
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player3) {
    if (player3 == mp.playerSelector(mp.PlayerNumber.One)) {
        player1Answer = "B"
    } else {
        player2Answer = "B"
    }
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player3) {
    if (player3 == mp.playerSelector(mp.PlayerNumber.One)) {
        player1Answer = "A"
    } else {
        player2Answer = "A"
    }
})
function countDown () {
    title = textsprite.create("Let's compete")
    title.setPosition(80, 62)
    timer.after(1000, function () {
        title.setText("")
        count = textsprite.create("")
        for (let index = 3; index >= 0; index--) {
            let captureIndex = index
            let delay = (3 - index) * 1000
            timer.after(delay, function () {
                count.setText("" + captureIndex)
                if (captureIndex == 0) {
                    count.setText("GO!")
                    count.setPosition(84, 62)
                    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
                    timer.after(1000, function() {
                        count.setText("")
                        qmcDisplay()
                    })
                } else {
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
                }
            })
        }
    })
}
let player2Answer = ""
let player1Answer = ""
let choiceB: string[] = []
let choiceA: string[] = []
let questionList: string[] = []
let answerList: string[] = []
let textSprite: TextSprite = null
let answer2: TextSprite = null
let answer1: TextSprite = null
let question: TextSprite = null
let player2: Sprite = null
let namep2: TextSprite = null
let player1: Sprite = null
let name_p1: TextSprite = null
let title: TextSprite = null
let currentIndex = 0
let score_p2: StatusBarSprite = null
let score_p1: StatusBarSprite = null
let count: TextSprite = null
currentIndex = 0
scene.setBackgroundColor(8)
title = textsprite.create("Competition Phase")
title.setPosition(77, 62)
timer.after(2000, function () {
    title.setText("")
    startGame()
})
