controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (kirbojumpcount <= 1) {
        kirbs.vy = -120
        kirbojumpcount += 1
    }
})
let kirbojumpcount = 0
let kirbs: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(6)
kirbs = sprites.create(assets.image`kirbo`, SpriteKind.Player)
controller.moveSprite(kirbs, 100, 0)
kirbs.ay = 200
kirbojumpcount = 2
game.onUpdate(function () {
    if (kirbs.isHittingTile(CollisionDirection.Bottom)) {
        kirbojumpcount = 0
    }
})
