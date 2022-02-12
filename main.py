Temperature = 0

# indicateur de fonctionement
def on_every_interval():
    for index in range(2):
        led.toggle(0, 0)
        basic.pause(100)
loops.every_interval(10000, on_every_interval)

def on_every_interval2():
    global Temperature
    Temperature = input.temperature()
    if Temperature > 21:
        led.plot(3, 3)
    else:
        led.unplot(3, 3)
loops.every_interval(10000, on_every_interval2)

def on_forever():
    pass
basic.forever(on_forever)
