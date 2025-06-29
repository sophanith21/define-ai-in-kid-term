sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("Check the picture carefully, Question Incoming", DialogLayout.Bottom)
    wrongInput = true
    while (wrongInput) {
        input = game.askForString("What is the picture about? hint!:Moun_ _ _ _", 12)
        if (input == "Mountain") {
            wrongInput = false
        }
    }
    sprites.destroy(mySprite2, effects.spray, 500)
    mySprite.sayText("I think I know what this image is now!", 5000, true)
    pause(5000)
    mySprite.sayText("It's about mountains with sun shining over it", 5000, true)
    pause(5500)
    game.showLongText("Correct! As an AI, pictures look like tiny squares filled with numbers!", DialogLayout.Bottom)
    game.showLongText("Comparing those tiny squares with what you have seen (eat) before, you can make smart guesses about what the picture shows!", DialogLayout.Bottom)
    mySprite.sayText("Ah! So that's why I can understand it", 5000, true)
    pause(5000)
    mySprite.sayText("It's because I have eaten (seen) a similar image before.", 5000, true)
    pause(5000)
    game.showLongText("That's right.", DialogLayout.Bottom)
    mySprite.sayText("But I can't recalled when I had eaten it!", 5000, true)
    pause(5000)
    game.showLongText("That's okay, Let's watch some flashback about when you were trained", DialogLayout.Bottom)
    sprites.destroy(textSprite)
    textSprite2 = textsprite.create("FlASHBACK", 0, 15)
    scaling.scaleToPercent(textSprite2, 150, ScaleDirection.Uniformly, ScaleAnchor.Left)
    textSprite2.setPosition(51, 11)
    mySprite.setPosition(10, 63)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f f 
        . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
        . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
        . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
        . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
        . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
        . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
        . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    scaling.scaleToPercent(mySprite3, 300, ScaleDirection.Uniformly, ScaleAnchor.Left)
    animation.runImageAnimation(
    mySprite3,
    [img`
        . f f f f f f f f f f f f f f f 
        . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
        . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
        . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
        . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
        . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
        . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
        . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f f 
        . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
        . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
        . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
        . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
        . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
        . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
        . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f f 
        . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
        . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
        . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
        . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
        . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
        . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
        . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f f 
        . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
        . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
        . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
        . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
        . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
        . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
        . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    true
    )
    mySprite3.sayText("Hey, this is an image about mountains with sun shining brightly", 5000, true)
    pause(5500)
    mySprite3.sayText("Eat me so you can recognize similar picture like me okay?", 5000, true)
})
let mySprite3: Sprite = null
let textSprite2: TextSprite = null
let input = ""
let wrongInput = false
let mySprite2: Sprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`0078000408030400001c00010a006400f401640000040000000000000000000000000005000004390000000400012508000c00012510001400011e18001c0001291c002000011d240028000220252c003000031d1e2a30003400012434003800012506001c00010a006400f401640000040000000000000000000000000000000002060004000800012007001c00020a006400f4016400000400000000000000000000000000000000030c0000000400012a08000c00012c08001c000e050046006603320000040a002d0000006400140001320002010002190034003800012238003c0002222540004400012448004c000124`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(6)
textSprite = textsprite.create("AI PLAYGROUND", 0, 15)
scaling.scaleToPercent(textSprite, 150, ScaleDirection.Uniformly, ScaleAnchor.Left)
textSprite.setPosition(65, 11)
mySprite = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ................ff.....ff...............
    ................ff.....ff...............
    ................ff.....ff...............
    ................fffffffff...............
    ................fffffffff...............
    ..............fff1111111fff.............
    ..............ff11ff1ff11ff.............
    .............fff11ff1ff11fff............
    .............f1f111111111f1f............
    .............f1f11fffff11f1f............
    .............fff11f111f11fff............
    ..............ff11fffff11ff.............
    ..............fff1111111fff.............
    ................fffffffff...............
    ..f..........fffff11111fffff.........f..
    ..fffffffffffffff1111111ffffffffffffff..
    ...fffffffffff11111fff11111ffffffffff...
    ....ffffffff.f1111fffff1111f.fffffff....
    .....fffffff.f111fffffff111f.ffffff.....
    ......ffffff.f111f1f1f1f111f.fffff......
    .......fffff.f111fffffff111f.fffff......
    .........fffff1111fffff1111ffffff.......
    ..........ffff1111111111111fffff........
    .............fffffffffffffff............
    .............fffffffffffffff............
    ..............fffff....ffff.............
    ..............fffff....ffff.............
    ..............fffff....ffff.............
    ..............fffff....ffff.............
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
mySprite.setPosition(18, 59)
controller.moveSprite(mySprite, 100, 100)
mySprite.setBounceOnWall(true)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f f 
    . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
    . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
    . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
    . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
    . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
    . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
    . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
scaling.scaleToPercent(mySprite2, 300, ScaleDirection.Uniformly, ScaleAnchor.Left)
animation.runImageAnimation(
mySprite2,
[img`
    . f f f f f f f f f f f f f f f 
    . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
    . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
    . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
    . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
    . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
    . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
    . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f f 
    . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
    . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
    . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
    . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
    . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
    . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
    . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f f 
    . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
    . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
    . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
    . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
    . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
    . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
    . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f f 
    . f 6 6 6 6 6 6 6 6 6 1 5 5 5 f 
    . f 6 6 6 6 6 6 6 6 6 6 1 5 5 f 
    . f 7 7 6 6 6 6 6 6 6 6 1 1 5 f 
    . f 7 7 7 6 6 6 6 6 6 6 6 6 1 f 
    . f 7 7 7 6 7 7 7 7 6 6 6 6 6 f 
    . f 6 7 6 7 4 4 4 4 4 7 6 6 6 f 
    . f 6 7 4 4 4 4 4 4 4 4 7 7 7 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
250,
true
)
game.showLongText("Hey there little AI!", DialogLayout.Bottom)
game.showLongText("Have you ever wonder how you can look at a picture and understand what's in it?", DialogLayout.Bottom)
game.showLongText("Like knowing there is a cat, a tree or a big bright sun?", DialogLayout.Bottom)
game.showLongText("Try moving around as An AI and consume that image and see", DialogLayout.Bottom)
game.onUpdate(function () {
    if (mySprite3) {
        if (mySprite.overlapsWith(mySprite3)) {
            sprites.destroy(mySprite3, effects.fountain, 500)
            mySprite.sayText("Yum! So these tiny squares filled with numbers show a picture about mountains with sun, cloud and tree!", 10000, true)
        }
    }
})
