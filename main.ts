namespace SpriteKind {
    export const Phase = SpriteKind.create()
    export const Cursor = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`imageTile`, function (sprite, location) {
    game.showLongText("📍 Image Processing", DialogLayout.Bottom)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`voiceTile`, function (sprite, location) {
    game.showLongText("📍 Voice Recognition", DialogLayout.Bottom)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`mlTile`, function (sprite, location) {
    game.showLongText("📍 Machine Learning", DialogLayout.Bottom)
})

scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
