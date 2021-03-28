radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    basic.showNumber(receivedNumber)
})
function on_first() {
    count_down()
    sing(opening())
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

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    sing_random_song()
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
function opening(): string {
    return kirakiraboshi()[0]
}

function kirakiraboshi(): string[] {
    return ["C - C - G - G - A - A - G - - -", "F - F - E - E - D - D - C - - -", "G - G - F - F - E - E - D - - -", "G - G - F - F - E - E - D - - -", "C - C - G - G - A - A - G - - -", "F - F - E - E - D - D - C - - -"]
}

function kaerunouta(): string[] {
    return ["C - D - E - F - E - D - C - - -", "E - F - G - A - G - F - E - - -", "C - - - C - - - C - - - C - - -", "C C D D E E F F E - D - C - - -"]
}

function get_random_song(): string[] {
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

function sing_random_song() {
    sing(get_random_song().join(" "))
}

radio.setGroup(1)
radio.sendString(kirakiraboshi().join(" "))
on_first()
basic.forever(function on_forever() {
    smile()
    basic.clearScreen()
})
