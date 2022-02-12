let Temperature = 0
loops.everyInterval(10000, function () {
    Temperature = input.temperature()
    if (Temperature > 21) {
        led.plot(3, 3)
    } else if (Temperature < 19) {
        for (let index = 0; index < 100; index++) {
            led.toggle(3, 3)
            basic.pause(100)
        }
        Temperature = input.temperature()
    } else {
        led.unplot(3, 3)
    }
})
// indicateur de fonctionement
loops.everyInterval(10000, function () {
    for (let index = 0; index < 2; index++) {
        led.toggle(0, 0)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
