namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const player1 = SpriteKind.create()
    export const cam = SpriteKind.create()
    export const player3 = SpriteKind.create()
}
controller.player4.onEvent(ControllerEvent.Connected, function () {
    camra = 4
    update_camra()
})
function change_camra () {
    if (camra == 1) {
        camra = 2
    } else if (camra == 2) {
        camra = 3
    } else if (camra == 3) {
        camra = 4
    } else if (camra == 4) {
        camra = 1
    }
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player_1.sayText(player_1.x)
    timer.after(1000, function () {
        player_1.sayText(player_1.y)
    })
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    change_camra()
})
function move () {
    if (controller.player1.isPressed(ControllerButton.Right)) {
        player_1.x += 2.5
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        player_1.x += -2.5
    }
    if (controller.player1.isPressed(ControllerButton.Down)) {
        player_1.y += 2.5
    }
    if (controller.player1.isPressed(ControllerButton.Up)) {
        player_1.y += -2.5
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        player_2.x += 2.5
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        player_2.x += -2.5
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        player_2.y += 2.5
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        player_2.y += -2.5
    }
    if (controller.player4.isPressed(ControllerButton.Right)) {
        player_4.x += 2.5
    }
    if (controller.player4.isPressed(ControllerButton.Left)) {
        player_4.x += -2.5
    }
    if (controller.player4.isPressed(ControllerButton.Down)) {
        player_4.y += 2.5
    }
    if (controller.player4.isPressed(ControllerButton.Up)) {
        player_4.y += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Up)) {
        player_3.y += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Right)) {
        player_3.x += 2.5
    }
    if (controller.player3.isPressed(ControllerButton.Left)) {
        player_3.x += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Down)) {
        player_3.y += 2.5
    }
    if (controller.player3.isPressed(ControllerButton.Up)) {
        player_3.y += -2.5
    }
}
function update_camra () {
    if (camra == 1) {
        scene.cameraFollowSprite(player_1)
    } else if (camra == 2) {
        scene.cameraFollowSprite(player_2)
    } else if (camra == 3) {
        scene.cameraFollowSprite(player_3)
    } else if (camra == 4) {
        scene.cameraFollowSprite(player_4)
    }
}
let player_4: Sprite = null
let player_3: Sprite = null
let player_2: Sprite = null
let player_1: Sprite = null
let camra = 0
camra = 1
scene.cameraFollowSprite(player_1)
tiles.setCurrentTilemap(tilemap`level1`)
player_1 = sprites.create(assets.image`myImage1`, SpriteKind.player1)
player_2 = sprites.create(assets.image`myImage0`, SpriteKind.player2)
player_3 = sprites.create(assets.image`myImage2`, SpriteKind.player3)
player_4 = sprites.create(assets.image`myImage`, SpriteKind.cam)
let enemy_sprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let enemy_velocety = -30
enemy_sprite.setVelocity(-30, 0)
enemy_sprite.setPosition(300, 120)
player_4.setBounceOnWall(false)
game.onUpdate(function () {
    update_camra()
    move()
    if (true) {
    	
    }
})
