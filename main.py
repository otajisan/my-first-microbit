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

def sing_kirakira_boshi():
    basic.show_icon(IconNames.EIGTH_NOTE)
    notes = "C - C - G - G - A - A - G G"
    bpm = 180
    music.play_melody(notes, bpm)

def on_first():
    count_down()
    sing_kirakira_boshi()

def on_forever():
    smile()
    basic.clear_screen()

on_first()
basic.forever(on_forever)
