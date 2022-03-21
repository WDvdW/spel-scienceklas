input.onButtonPressed(Button.A, function () {
    varken_MS.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken_MS.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let varken_MS: game.LedSprite = null
varken_MS = game.createSprite(2, 4)
basic.forever(function () {
    fruit = game.createSprite(1, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        fruit.change(LedSpriteProperty.Y, 1)
    }
    if (fruit.isTouching(varken_MS)) {
        fruit.delete()
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
