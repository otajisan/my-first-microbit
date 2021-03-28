count_down()
sing_kirakira_boshi()
function count_down() {
    for (let num of [3, 2, 1]) {
        basic.showNumber(num)
    }
    basic.showString("Go!")
}

function sing_kirakira_boshi() {
    let notes = "C - C - G - G - A - A - G G"
    let bpm = 180
    music.playMelody(notes, bpm)
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

basic.forever(function on_forever() {
    smile()
    basic.clearScreen()
})
