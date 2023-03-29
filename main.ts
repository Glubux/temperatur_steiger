input.onButtonPressed(Button.A, function () {
    if (messen == 1) {
        messen = 0
    } else {
        messen = 1
    }
})
let messen = 0
messen = 0
basic.forever(function () {
    if (messen == 1) {
        music.playTone(10 * input.temperature(), music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    if (messen == 1) {
        if (input.temperature() > 40) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                # # # # #
                . . . . .
                `)
        } else if (input.temperature() > 30) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                # # # # #
                . . . . .
                `)
        } else if (input.temperature() > 20) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                . . . . .
                `)
        } else if (input.temperature() > 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (input.temperature() > 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
})
