namespace SpriteKind {
    export const openChest = SpriteKind.create()
    export const closedChest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (isHealthLocked == 0) {
        isHealthLocked = 1
        myCorg.sprite.setPosition(0, 0)
        info.changeLifeBy(-1)
    }
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
let myCorg: Corgio = null
let Coin: Sprite = null
let isHealthLocked = 0
isHealthLocked = 0
info.setLife(3)
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
myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
game.onUpdateInterval(2000, function () {
    if (isHealthLocked == 1) {
        isHealthLocked = 0
    }
})
game.onUpdateInterval(3500, function () {
    if (Coin.x >= 300) {
        Coin.setVelocity(-150, -53)
    } else {
        Coin.setVelocity(50, 45)
    }
})
