// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000808080800000000000000000000000008080808000707000a0a0a0a0000000008080808000007000a0a0a0a0000000008080808000000000a0a0a0a0000000000010000000000000a0a0a0a000000000001000000000000000601000000000000010606000000000007010700000000070101010002000000000107000000000700000100020200000001000402000000000501000000000000010002000000000b0b0b0b0000000005010000000000000b0b0b0b0101010101010000000000000b0b0b0b0000000000000000000002020b0b0b0b0000000000000000030302020202000000070700000003030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 2 2 . . . . 2 2 2 
2 . . . . 2 2 2 2 . . . . 2 2 2 
2 . . . . 2 2 2 2 . . . . 2 2 2 
2 2 . 2 2 2 2 2 2 . . . . 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 
2 2 . . . 2 2 2 2 2 2 . 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 2 . . . . 2 2 2 2 2 . 2 2 2 2 
2 2 . . . . . . . . . . 2 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.builtin.forestTiles0,sprites.swamp.swampTile13,sprites.castle.tileDarkGrass3,sprites.swamp.swampTile3,myTiles.tile3,myTiles.tile4,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "imageTile":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "voiceTile":
            case "tile10":return tile10;
            case "mlTile":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
