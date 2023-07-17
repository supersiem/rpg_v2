@namespace
class SpriteKind:
    player2 = SpriteKind.create()
    player1 = SpriteKind.create()
    cam = SpriteKind.create()
    player3 = SpriteKind.create()
camra = 0
enemy_sprite: Sprite = None
player_1: Sprite = None
player_2: Sprite = None
player_3: Sprite = None
player_4: Sprite = None
enemy_velocety = 0
#player movement
def move():
    if controller.player1.is_pressed(ControllerButton.B):
        change_camra()
    if controller.player1.is_pressed(ControllerButton.RIGHT):
        player_1.x += 2.5
    if controller.player1.is_pressed(ControllerButton.LEFT):
        player_1.x += -2.5
    if controller.player1.is_pressed(ControllerButton.DOWN):
        player_1.y += 2.5
    if controller.player1.is_pressed(ControllerButton.UP):
        player_1.y += -2.5
    if controller.player2.is_pressed(ControllerButton.RIGHT):
        player_2.x += 2.5
    if controller.player2.is_pressed(ControllerButton.LEFT):
        player_2.x += -2.5
    if controller.player2.is_pressed(ControllerButton.DOWN):
        player_2.y += 2.5
    if controller.player2.is_pressed(ControllerButton.UP):
        player_2.y += -2.5
    if controller.player4.is_pressed(ControllerButton.RIGHT):
        player_4.x += 2.5
    if controller.player4.is_pressed(ControllerButton.LEFT):
        player_4.x += -2.5
    if controller.player4.is_pressed(ControllerButton.DOWN):
        player_4.y += 2.5
    if controller.player4.is_pressed(ControllerButton.UP):
        player_4.y += -2.5
    if controller.player3.is_pressed(ControllerButton.UP):
        player_3.y += -2.5
    if controller.player3.is_pressed(ControllerButton.RIGHT):
        player_3.x += 2.5
    if controller.player3.is_pressed(ControllerButton.LEFT):
        player_3.x += -2.5
    if controller.player3.is_pressed(ControllerButton.DOWN):
        player_3.y += 2.5
    if controller.player3.is_pressed(ControllerButton.UP):
        player_3.y += -2.5

def on_player4_connected():
    global camra
    camra = 4
    update_camra()
    enemy_sprite.set_velocity(-30, 0)
    enemy_sprite.set_position(300, 120)
controller.player4.on_event(ControllerEvent.CONNECTED, on_player4_connected)


def change_camra():
    global camra
    if camra == 1:
        camra = 2
    elif camra == 2:
        camra = 3
    elif camra == 3:
        camra = 4
    elif camra == 4:
        camra = 1

def on_player1_button_a_pressed():
    player_1.say_text(player_1.x)
    
    def on_after():
        player_1.say_text(player_1.y)
    timer.after(1000, on_after)
    
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def start():
    global camra, player_1, player_2, player_3, player_4, enemy_sprite, enemy_velocety
    camra = 1
    scene.camera_follow_sprite(player_1)
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    player_1 = sprites.create(assets.image("""
        myImage1
    """), SpriteKind.player1)
    player_2 = sprites.create(assets.image("""
        myImage0
    """), SpriteKind.player2)
    player_3 = sprites.create(assets.image("""
        myImage2
    """), SpriteKind.player3)
    player_4 = sprites.create(assets.image("""
        myImage
    """), SpriteKind.cam)
    enemy_sprite = sprites.create(img("""
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
        """),
        SpriteKind.player)
    enemy_velocety = -30
    player_4.set_bounce_on_wall(False)

def update_camra():
    if camra == 1:
        scene.camera_follow_sprite(player_1)
    elif camra == 2:
        scene.camera_follow_sprite(player_2)
    elif camra == 3:
        scene.camera_follow_sprite(player_3)
    elif camra == 4:
        scene.camera_follow_sprite(player_4)

def on_on_update():
    game_update()
game.on_update(on_on_update)

# game update code
def game_update():
    update_camra()
    move()