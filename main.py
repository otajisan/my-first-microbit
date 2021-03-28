count_down()
sing_kirakira_boshi()

def count_down():
    for num in [3, 2, 1]:
        basic.show_number(num)
    basic.show_string("Go!")

def sing_kirakira_boshi():
    notes = "C - C - G - G - A - A - G G"
    bpm = 180
    music.play_melody(notes, bpm)

def smile():
    basic.show_animation("""
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)

def on_forever():
    smile()
    basic.clear_screen()

basic.forever(on_forever)
