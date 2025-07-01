namespace SpriteKind {
    export const Webname = SpriteKind.create()
    export const level1 = SpriteKind.create()
    export const level = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue`)
        game.showLongText("Hello dear! Let me introduce you what you need to know before starting", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue2`)
        game.showLongText("First, you are a newly born AI which you need to learn as you grow up.", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpTo == 4) {
        checkAnswer("B")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 2) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("level 4", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
function spawnPoint () {
    for (let value3 of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.placeOnTile(hey, value3)
        tiles.setTileAt(value3, assets.tile`myTile4`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue8`)
        game.showLongText("You can play 1 VS 1", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpTo == 0) {
        jumpTo +=1
        initTo = jumpTo
    } else if (jumpTo == 1 && end) {
        jumpTo += 1
        initTo = jumpTo
        end = false
    } else if (jumpTo == 2 && end) {
        jumpTo += 1
        initTo = jumpTo
        end = false
    } else if (jumpTo == 3 && end) {
        jumpTo += 1
        initTo = jumpTo
        end = false
    } else if (jumpTo == 4 && end) {
        jumpTo += 1
        initTo = jumpTo
        end = false
    } else if (jumpTo == 5 && end) {
        jumpTo += 1
        initTo = jumpTo
        end = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue5`)
        game.showLongText("After finish all the learning phase you will become a powerful AI who can do a lot of tasks", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue4`)
        game.showLongText("The more you learn, the smarter you are", DialogLayout.Bottom)
        game.showLongText("The more you learn, the smarter you are", DialogLayout.Bottom)
    }
})
function box2 (location: Image, floor: Image) {
    for (let value of tiles.getTilesByType(location)) {
        box = sprites.create(assets.image`Chest`, SpriteKind.Player)
        tiles.placeOnTile(box, value)
        tiles.setTileAt(value, floor)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue6`)
        game.showLongText("After learning, guess what you can do next?", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue10`)
        game.showLongText("That's it for what you need to know. Now enjoy your journey", DialogLayout.Bottom)
        end = true
        game.showLongText("Press A to go into the MAP", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11-map`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 2) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("level 8", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Repeated, function () {
    scene.cameraShake(1.03, 500)
})
function spawnpoint () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.placeOnTile(user, value2)
        tiles.setTileAt(value2, sprites.builtin.brick)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10-map`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("level 7", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
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
        game.showLongText("Press A to continue to the competition phase",DialogLayout.Bottom);
        end = true
    }
}
function levelLocation () {
    text_list = [
    "level 1",
    "level 2",
    "level 3",
    "level 4",
    "level 5",
    "level 6",
    "level 7",
    "level 8",
    "level 9",
    "level 10"
    ]
    i = 0
    oneLocation(assets.tile`transparency16`, assets.tile`transparency16`)
    oneLocation(assets.tile`myTile0-map`, assets.tile`myTile0-map`)
    oneLocation(assets.tile`myTile7-map`, assets.tile`myTile7-map`)
    oneLocation(assets.tile`myTile-map`, assets.tile`myTile-map`)
    oneLocation(assets.tile`myTile8-map`, assets.tile`myTile8-map`)
    oneLocation(assets.tile`myTile9-map`, assets.tile`myTile9-map`)
    oneLocation(assets.tile`myTile10-map`, assets.tile`myTile10-map`)
    oneLocation(assets.tile`myTile11-map`, assets.tile`myTile11-map`)
    oneLocation(assets.tile`transparency16`, assets.tile`transparency16`)
    oneLocation(assets.tile`myTile13-map`, assets.tile`myTile13-map`)
}
function oneLocation (locaI: Image, floor: Image) {
    for (let value22 of tiles.getTilesByType(locaI)) {
        level2 = sprites.create(img`
            ...bbbbbbbbbb...
            ..b1111111111b..
            .b111111111111b.
            .b111111111111b.
            .bddccccccccddb.
            .bdc66666666cdb.
            .bdc61d66666cdb.
            .bdc6d666666cdb.
            .bdc66666666cdb.
            .bdc66666666cdb.
            .bdc66666666cdb.
            .bddccccccccddb.
            .cbbbbbbbbbbbbc.
            fccccccccccccccf
            fbbbbbbbbbbbbbbf
            fbcdddddddddddbf
            fbcbbbbbbbbbbcbf
            fbcbbbbbbbbbbcbf
            fbccccccccccccbf
            fbbbbbbbbbbbbbbf
            fbffffffffffffbf
            ffffffffffffffff
            `, SpriteKind.level)
        level2.sayText(text_list[i])
        tiles.placeOnTile(level2, value22)
        tiles.setTileAt(value22, floor)
        i += 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8-map`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 2) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("level 5", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue3`)
        game.showLongText("You will explore and consume the knowledge.", DialogLayout.Bottom)
    }
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 2) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("Home", DialogLayout.Bottom)
        if (game.ask("Do you want to leave?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue9`)
        game.showLongText("Suprisingly you can also play 2 VS 2", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6-map`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 2) {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..c111111111111111dbcc..
            .b11dcccccccccccccccc...
            cddcccccccccccccccc.....
            ccccc...................
            `)
        game.setDialogCursor(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        game.showLongText("level 1", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
            end = true
        }
    }
})
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
    questionTextSprite.setPosition(75, 30)
    optionATextSprite = textsprite.create("A: " + optionsA[index], 0)
    optionATextSprite.setPosition(49, 51)
    optionBTextSprite = textsprite.create("B: " + optionsB[index], 0)
    optionBTextSprite.setPosition(46, 62)
}
let pic: Sprite = null
let robot2: Sprite = null
let robot1: Sprite = null
let optionsB: string[] = []
let optionsA: string[] = []
let flashimageimageprocessing: Sprite = null
let flashbackSpriteimageprocessing: TextSprite = null
let AIPlaygroundSprite: TextSprite = null
let robotimageprocessing: Sprite = null
let imageimageprocessing: Sprite = null
let input = ""
let wrongInput = false
let level2: Sprite = null
let i = 0
let text_list: string[] = []
let optionBTextSprite: TextSprite = null
let optionATextSprite: TextSprite = null
let questionTextSprite: TextSprite = null
let questionTexts: string[] = []
let currentQuestion = 0
let correctAnswers: string[] = []
let selectedAnswer = ""
let user: Sprite = null
let box: Sprite = null
let initTo = 0
let end = false
let hey: Sprite = null
let jumpTo = 0
let titleUser = null
let titleImg = null

scene.setBackgroundColor(13)
let mySprite = sprites.create(assets.image`robot-land`, SpriteKind.Player)
mySprite.setPosition(75, 40)
mySprite.setScale(0.5, ScaleAnchor.Middle)
let Nameweb = textsprite.create("AI PLAYGOUND", 0, 15)
Nameweb.setPosition(40, 10)
let name_user = textsprite.create("Dara", 0, 15)
name_user.setPosition(143, 20)
let pf = sprites.create(assets.image`user-icon`, SpriteKind.Player)
pf.setScale(0.1, ScaleAnchor.Middle)
pf.setPosition(143, 10)
let message = textsprite.create("Let's learn more", 0, 15)
message.setPosition(80, 75)
let message2 = textsprite.create("about AI!", 0, 15)
message2.setPosition(80, 85)
let button = sprites.create(assets.image`button-land`, SpriteKind.Player)
button.setPosition(95, 110)
button.setScale(0.3, ScaleAnchor.Middle)
let button1 = textsprite.create("Learn", 0, 1)
button1.setPosition(47, 105)
let button2 = textsprite.create("Compete", 0, 1)
button2.setPosition(107, 105)
game.showLongText("Press A to \"Learn\", Press B to \"Compete\"", DialogLayout.Bottom)
game.onUpdate(function () {
    if (initTo == 1) {
        initTo = 0
        sprites.destroy(mySprite)
        sprites.destroy(message)
        sprites.destroy(message2)
        sprites.destroy(button1)
        sprites.destroy(button2)
        sprites.destroy(button)
        sprites.destroy(Nameweb)
        sprites.destroy(name_user)
        scene.setBackgroundColor(7)
        user = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level`)
        controller.moveSprite(user, 100, 100)
        scene.cameraFollowSprite(user)
        spawnpoint()
        box2(assets.tile`myTile0`, assets.tile`myTile0`)
        box2(assets.tile`myTile1`, assets.tile`myTile1`)
        box2(assets.tile`myTile2`, assets.tile`myTile2`)
        box2(assets.tile`myTile4`, assets.tile`myTile4`)
        box2(assets.tile`myTile7`, assets.tile`myTile7`)
        box2(assets.tile`myTile9`, assets.tile`myTile9`)
        box2(assets.tile`myTile10`, assets.tile`myTile10`)
        box2(assets.tile`myTile13`, assets.tile`myTile13`)
        box2(assets.tile`myTile14`, assets.tile`myTile14`)
        box2(assets.tile`myTile3`, assets.tile`myTile3`)
    } else if (initTo == 2) {
        initTo = 0
        hey = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(hey, 100, 100)
        scene.cameraFollowSprite(hey)
        tiles.setCurrentTilemap(tilemap`level`)
        levelLocation()
        spawnPoint()
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
    } else if (initTo == 3) {
        tiles.setCurrentTilemap(tilemap`level1`)
        sprites.destroy(user)
        sprites.destroy(user)
        sprites.destroyAllSpritesOfKind(SpriteKind.level)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        initTo = 0
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
        music.play(music.createSong(assets.song`bg-music-image-processing`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(6)
        AIPlaygroundSprite = textsprite.create("AI PLAYGROUND", 0, 15)
        scaling.scaleToPercent(AIPlaygroundSprite, 150, ScaleDirection.Uniformly, ScaleAnchor.Left)
        AIPlaygroundSprite.setPosition(65, 11)
        robotimageprocessing = sprites.create(assets.image`robot_image-imagepro`, SpriteKind.Player)
        scene.cameraFollowSprite(robotimageprocessing)
        scene.cameraFollowSprite(null)
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
    } else if (initTo == 4) {
        sprites.destroy(flashbackSpriteimageprocessing)
        sprites.destroy(robotimageprocessing)
        initTo = 0
        scene.setBackgroundColor(13)
        robot1 = sprites.create(assets.image`Robot1`, SpriteKind.Player)
        robot2 = sprites.create(assets.image`Robot1`, SpriteKind.Player)
        pic = sprites.create(assets.image`picAccount`, SpriteKind.Player)
        pic.setPosition(136, 13)
        robot2.setPosition(142, 49)
        robot1.setPosition(12, 61)
        // Questions + Answers
        questionTexts = ["Q1: Is AI smart?", "Q2: Can AI sleep?"]
        optionsA = ["Yes", "Yes"]
        optionsB = ["No", "No"]
        correctAnswers = ["A", "B"]
        // Start the quiz
        askQuestion(currentQuestion)
        
        
    }
})
game.onUpdate(function () {
    if (flashimageimageprocessing) {
        if (robotimageprocessing.overlapsWith(flashimageimageprocessing)) {
            sprites.destroy(flashimageimageprocessing, effects.fountain, 500)
            robotimageprocessing.sayText("Yum! So these tiny squares filled with numbers show a picture about mountains with sun, cloud and tree!", 10000, true)
            pause(10000);
            game.showLongText("Press A to Continnue to \"Quiz\" Phase", DialogLayout.Bottom)
            end = true
        }
    }
})
