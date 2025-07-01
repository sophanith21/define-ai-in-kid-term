sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("Check the picture carefully, Question Incoming", DialogLayout.Bottom)
    wrongInput = true
    while (wrongInput) {
        input = game.askForString("What is the picture about? HINT!:Moun_ _ _ _", 8)
        if (input == "Mountain") {
            wrongInput = false
        }
    }
    sprites.destroy(imageimageprocessing, effects.spray, 500)
    robotimageprocessing.sayText("I think I know what this image is now!", 5000, true)
    pause(5000)
    robotimageprocessing.sayText("It's about mountains with sun shining over it", 5000, true)
    pause(5500)
    game.showLongText("Correct! As an AI, pictures look like tiny squares filled with numbers!", DialogLayout.Bottom)
    game.showLongText("Comparing those tiny squares with what you have seen (eat) before, you can make smart guesses about what the picture shows!", DialogLayout.Bottom)
    robotimageprocessing.sayText("Ah! So that's why I can understand it", 5000, true)
    pause(5000)
    robotimageprocessing.sayText("It's because I have eaten (seen) a similar image before.", 5000, true)
    pause(5000)
    game.showLongText("That's right.", DialogLayout.Bottom)
    robotimageprocessing.sayText("But I can't recalled when I had eaten it!", 5000, true)
    pause(5000)
    game.showLongText("That's okay, Let's watch some flashback about when you were trained", DialogLayout.Bottom)
    sprites.destroy(AIPlaygroundSprite)
    flashbackSpriteimageprocessing = textsprite.create("FlASHBACK", 0, 15)
    scaling.scaleToPercent(flashbackSpriteimageprocessing, 150, ScaleDirection.Uniformly, ScaleAnchor.Left)
    flashbackSpriteimageprocessing.setPosition(51, 11)
    robotimageprocessing.setPosition(10, 63)
    flashimageimageprocessing = sprites.create(assets.image`mountain-one`, SpriteKind.Food)
    scaling.scaleToPercent(flashimageimageprocessing, 300, ScaleDirection.Uniformly, ScaleAnchor.Left)
    animation.runImageAnimation(
    flashimageimageprocessing,
    assets.animation`Mountain-animation-2`,
    250,
    true
    )
    flashimageimageprocessing.sayText("Hey, this is an image about mountains with sun shining brightly", 5000, true)
    pause(5500)
    flashimageimageprocessing.sayText("Eat me so you can recognize similar picture like me okay?", 5000, true)
})
let flashimageimageprocessing: Sprite = null
let flashbackSpriteimageprocessing: TextSprite = null
let input = ""
let wrongInput = false
let imageimageprocessing: Sprite = null
let robotimageprocessing: Sprite = null
let AIPlaygroundSprite: TextSprite = null
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(assets.song`bg-music-image-processing`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(6)
AIPlaygroundSprite = textsprite.create("AI PLAYGROUND", 0, 15)
scaling.scaleToPercent(AIPlaygroundSprite, 150, ScaleDirection.Uniformly, ScaleAnchor.Left)
AIPlaygroundSprite.setPosition(65, 11)
robotimageprocessing = sprites.create(assets.image`robot_image-imagepro`, SpriteKind.Player)
robotimageprocessing.setPosition(18, 59)
controller.moveSprite(robotimageprocessing, 100, 100)
robotimageprocessing.setBounceOnWall(true)
imageimageprocessing = sprites.create(assets.image`mountain-2`, SpriteKind.Food)
scaling.scaleToPercent(imageimageprocessing, 300, ScaleDirection.Uniformly, ScaleAnchor.Left)
animation.runImageAnimation(
imageimageprocessing,
assets.animation`Mountain-animation`,
250,
true
)
game.showLongText("Hey there little AI!", DialogLayout.Bottom)
game.showLongText("Have you ever wonder how you can look at a picture and understand what's in it?", DialogLayout.Bottom)
game.showLongText("Like knowing there is a cat, a tree or a big bright sun?", DialogLayout.Bottom)
game.showLongText("Try moving around as An AI and consume that image and see", DialogLayout.Bottom)
game.onUpdate(function () {
    if (flashimageimageprocessing) {
        if (robotimageprocessing.overlapsWith(flashimageimageprocessing)) {
            sprites.destroy(flashimageimageprocessing, effects.fountain, 500)
            robotimageprocessing.sayText("Yum! So these tiny squares filled with numbers show a picture about mountains with sun, cloud and tree!", 10000, true)
        }
    }
})
