namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const player1 = SpriteKind.create()
    export const cam = SpriteKind.create()
    export const player3 = SpriteKind.create()
}

let camra = 0
let enemy_sprite : Sprite = null
let player_1 : Sprite = null
let player_2 : Sprite = null
let player_3 : Sprite = null
let player_4 : Sprite = null
let enemy_velocety = 0
// player movement
function move() {
    if (controller.player1.isPressed(ControllerButton.B)) {
        change_camra()
    }
    
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

controller.player4.onEvent(ControllerEvent.Connected, function on_player4_connected() {
    
    camra = 4
    update_camra()
    enemy_sprite.setVelocity(-30, 0)
    enemy_sprite.setPosition(300, 120)
})
function change_camra() {
    
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

controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    player_1.sayText(player_1.x)
    timer.after(1000, function on_after() {
        player_1.sayText(player_1.y)
    })
})
function start() {
    
    camra = 1
    scene.cameraFollowSprite(player_1)
    tiles.setCurrentTilemap(tilemap`
        level1
    `)
    player_1 = sprites.create(assets.image`
        myImage1
    `, SpriteKind.player1)
    player_2 = sprites.create(assets.image`
        myImage0
    `, SpriteKind.player2)
    player_3 = sprites.create(assets.image`
        myImage2
    `, SpriteKind.player3)
    player_4 = sprites.create(assets.image`
        myImage
    `, SpriteKind.cam)
    enemy_sprite = sprites.create(img`
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
    enemy_velocety = -30
    player_4.setBounceOnWall(false)
}

function update_camra() {
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

game.onUpdate(function on_on_update() {
    game_update()
})
//  game update code
function game_update() {
    update_camra()
    move()
}

