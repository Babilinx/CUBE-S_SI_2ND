let Temperature = 0
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
