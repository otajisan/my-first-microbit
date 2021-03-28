radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    basic.showNumber(receivedNumber)
})
function on_first() {
    count_down()
    sing(get_random_song())
}

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

radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
function kirakiraboshi(): string {
    return ["C - C - G - G - A - A - G - - -", "F - F - E - E - D - D - C - - -", "G - G - F - F - E - E - D - - -", "G - G - F - F - E - E - D - - -", "C - C - G - G - A - A - G - - -", "F - F - E - E - D - D - C - - -"].join(" ")
}

function kaerunouta(): string {
    return ["C - D - E - F - E - D - C - - -", "E - F - G - A - G - F - E - - -", "C - - - C - - - C - - - C - - -", "C C D D E E F F E - D - C - - -"].join(" ")
}

function get_random_song(): string {
    if (Math.randomBoolean()) {
        return kaerunouta()
    }
    
    return kirakiraboshi()
}

function sing(song: string) {
    basic.showIcon(IconNames.EigthNote)
    let bpm = 240
    music.playMelody(song, bpm)
}

radio.setGroup(1)
radio.sendString(kirakiraboshi())
on_first()
basic.forever(function on_forever() {
    smile()
    basic.clearScreen()
})
