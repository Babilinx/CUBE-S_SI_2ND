let Temperature = 0
let NPersonnes = 0
// indicateur de fonctionement
loops.everyInterval(10000, function () {
    for (let index = 0; index < 2; index++) {
        led.toggle(0, 0)
        basic.pause(100)
    }
})
loops.everyInterval(10000, function () {
    Temperature = input.temperature()
    if (Temperature > 21) {
        led.plot(3, 3)
    } else {
        led.unplot(3, 3)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            NPersonnes = 1 + NPersonnes
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            NPersonnes = 1 - NPersonnes
        }
    }
})
loops.everyInterval(30000, function () {
    if (0 == 0) {
    	
    }
})
