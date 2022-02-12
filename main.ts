let Temperature = 0
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
	
})
