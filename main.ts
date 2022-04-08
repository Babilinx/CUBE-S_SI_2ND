let NPersonnes = 0
radio.setGroup(1)
radio.setTransmitPower(7)
loops.everyInterval(200, function () {
    if (input.buttonIsPressed(Button.A)) {
        NPersonnes += 1
        radio.sendNumber(NPersonnes)
    }
    if (input.buttonIsPressed(Button.B)) {
        NPersonnes += -1
        radio.sendNumber(NPersonnes)
    }
})
