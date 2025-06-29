namespace SpriteKind {
    export const level1 = SpriteKind.create()
    export const level = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
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
        game.showLongText("level 2", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
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
        game.showLongText("Home", DialogLayout.Bottom)
        if (game.ask("Do you want to leave?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
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
        game.showLongText("level 1", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
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
        game.showLongText("level 4", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
function spawnPoint () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.placeOnTile(hey, value)
        tiles.setTileAt(value, assets.tile`myTile4`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
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
        game.showLongText("level 10", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
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
        game.showLongText("level 3", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    scene.setBackgroundColor(7)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
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
        game.showLongText("level 9", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
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
        game.showLongText("level 6", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    scene.setBackgroundColor(6)
})
controller.anyButton.onEvent(ControllerButtonEvent.Repeated, function () {
    scene.cameraShake(1.03, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
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
        game.showLongText("level 5", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
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
    oneLocation(assets.tile`myTile6`, assets.tile`myTile6`)
    oneLocation(assets.tile`myTile0`, assets.tile`myTile0`)
    oneLocation(assets.tile`myTile7`, assets.tile`myTile7`)
    oneLocation(assets.tile`myTile`, assets.tile`myTile`)
    oneLocation(assets.tile`myTile8`, assets.tile`myTile8`)
    oneLocation(assets.tile`myTile9`, assets.tile`myTile9`)
    oneLocation(assets.tile`myTile10`, assets.tile`myTile10`)
    oneLocation(assets.tile`myTile11`, assets.tile`myTile11`)
    oneLocation(assets.tile`myTile12`, assets.tile`myTile12`)
    oneLocation(assets.tile`myTile13`, assets.tile`myTile13`)
}
function oneLocation (locaI: Image, floor: Image) {
    for (let value of tiles.getTilesByType(locaI)) {
        level = sprites.create(img`
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
        level.sayText(text_list[i])
        tiles.placeOnTile(level, value)
        tiles.setTileAt(value, floor)
        i += 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
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
        game.showLongText("level 8", DialogLayout.Bottom)
        if (game.ask("Do you want to enter?")) {
        	
        }
    }
})
let level: Sprite = null
let i = 0
let text_list: string[] = []
let hey: Sprite = null
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
game.onUpdate(function () {
    hey.setImage(img`
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
        `)
    if (hey.vy > 0) {
        hey.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `)
    } else if (hey.vy < 0) {
        hey.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `)
    } else if (hey.vx < 0) {
        hey.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    } else if (hey.vx > 0) {
        hey.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    } else {
    	
    }
})
