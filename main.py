def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

def on_first():
    count_down()
    sing(opening())

def count_down():
    for num in [3, 2, 1]:
        basic.show_number(num)
    basic.show_string("Go!")

def smile():
    basic.show_animation("""
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)

def on_button_pressed_a():
    sing_random_song()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def opening():
    return kirakiraboshi()[0]

def kirakiraboshi():
    return [
        "C - C - G - G - A - A - G - - -",
        "F - F - E - E - D - D - C - - -",
        "G - G - F - F - E - E - D - - -",
        "G - G - F - F - E - E - D - - -",
        "C - C - G - G - A - A - G - - -",
        "F - F - E - E - D - D - C - - -"
    ]

def kaerunouta():
    return [
        "C - D - E - F - E - D - C - - -",
        "E - F - G - A - G - F - E - - -",
        "C - - - C - - - C - - - C - - -",
        "C C D D E E F F E - D - C - - -"
    ]

def get_random_song():
    if Math.random_boolean():
        return kaerunouta()
    return kirakiraboshi()

def sing(song):
    basic.show_icon(IconNames.EIGTH_NOTE)
    bpm = 240
    music.play_melody(song, bpm)

def sing_random_song():
    sing(get_random_song().join(" "))

radio.set_group(1)
radio.send_string(kirakiraboshi().join(" "))

on_first()

def on_forever():
    smile()
    basic.clear_screen()
basic.forever(on_forever)
