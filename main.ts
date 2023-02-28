tiles.setCurrentTilemap(tilemap`platform`)
scene.setBackgroundColor(6)
let kirbs = sprites.create(assets.image`kirbo`, SpriteKind.Player)
controller.moveSprite(kirbs)
