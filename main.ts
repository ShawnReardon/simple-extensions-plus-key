namespace SpriteKind {
    export const openChest = SpriteKind.create()
    export const closedChest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
	
})
info.onCountdownEnd(function () {
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (hasKey == 1) {
        tiles.setTileAt(tiles.getTileLocation(19, 5), sprites.dungeon.chestOpen)
        info.startCountdown(0.1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    hasKey = 1
    Coin.destroy()
})
let hasKey = 0
let Coin: Sprite = null
tiles.setTilemap(tilemap`level_2`)
tiles.setTileAt(tiles.getTileLocation(19, 5), sprites.dungeon.chestClosed)
Coin = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . 5 5 . . . . . 
    . 5 5 5 5 5 5 . 
    . 5 5 . 5 . 5 . 
    . . . . 5 . 5 . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.Food)
Coin.setPosition(0, 0)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
game.onUpdateInterval(3500, function () {
    if (Coin.x >= 300) {
        Coin.setVelocity(-50, -53)
    } else {
        Coin.setVelocity(50, 50)
    }
})
