function count_down() {
    for (let num of [3, 2, 1]) {
        basic.showNumber(num)
    }
    basic.showString("Go!")
}

function smile() {
    basic.showAnimation(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
}

function sing_kirakira_boshi() {
    basic.showIcon(IconNames.EigthNote)
    let notes = "C - C - G - G - A - A - G G"
    let bpm = 180
    music.playMelody(notes, bpm)
}

function on_first() {
    count_down()
    sing_kirakira_boshi()
}

on_first()
basic.forever(function on_forever() {
    smile()
    basic.clearScreen()
})
