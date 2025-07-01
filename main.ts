namespace SpriteKind {
    export const Webname = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.B.isPressed() && jumpTo == 1) {
        game.setDialogFrame(assets.image`Dialogue8`)
        game.showLongText("You can play 1 VS 1", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpTo == 0) {
        jumpTo = 1
        initTo = 1
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
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue10`)
        game.showLongText("That's it for what you need to know. Now enjoy your journey", DialogLayout.Bottom)
    }
})
function spawnpoint () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.placeOnTile(user, value2)
        tiles.setTileAt(value2, sprites.builtin.brick)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue3`)
        game.showLongText("You will explore and consume the knowledge.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue7`)
        game.showLongText("You can compete with other friends too", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.setDialogFrame(assets.image`Dialogue9`)
        game.showLongText("Suprisingly you can also play 2 VS 2", DialogLayout.Bottom)
    }
})
let user: Sprite = null
let box: Sprite = null
let initTo = 0
let jumpTo = 0
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
    }
})
