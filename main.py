# Init radio transmition
radio.set_group(1)
# Init LCD_Display
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(10)
LCD1IN8.LCD_Display()
# Init vaiables
minute = 34
heure = 8
NPersonnes = 0

# Init functions
def on_received_number(receivedNumber):
    global NPersonnes
    NPersonnes = receivedNumber
    for index in range(2):
        led.toggle(0, 0)
        basic.pause(300)

def on_every_interval():
    global minute, heure
    minute += 1
    if minute == 60:
        heure += 1
        minute = 0
    if heure == 24:
        heure = 0

def on_every_interval2():
    LCD1IN8.LCD_Clear()
    
    # Affichage de la temperature.
    LCD1IN8.dis_string(10, 55, "" + convert_to_text(input.temperature()) + " C", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    if input.temperature() < 19:  # si 'temperature' < 19°C, afficher un témoin de chauffe.
        LCD1IN8.draw_point(45, 62, LCD1IN8.Get_Color(LCD_COLOR.RED), DOT_PIXEL.DOT_PIXEL_4)
    
    # Nombre de personnes dans la salle
    LCD1IN8.dis_string(63, 15, "" + convert_to_text(NPersonnes) + " Personnes", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    
    # Affichage de la luminosité
    LCD1IN8.dis_string(63, 101, "" + convert_to_text(input.light_level()) + "Lux", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.draw_rectangle(108, 104, 113, 109, LCD1IN8.Get_Color(LCD_COLOR.BLACK), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    if input.light_level() > 200 and NPersonnes > 0:  # si 'luninosité' < 200 ET plus que 0 personnes dans la salle, afficher un témoin de lumière.
        LCD1IN8.draw_point(112, 108, LCD1IN8.Get_Color(LCD_COLOR.YELLOW), DOT_PIXEL.DOT_PIXEL_4)
    
    # Affichage de l'heure
    LCD1IN8.dis_string(63, 61, "" + convert_to_text(heure) + ":" + convert_to_text(minute), LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.LCD_Display()


# Script start here
loops.every_interval(10000, on_every_interval2)
radio.on_received_number(on_received_number)
loops.every_interval(50000, on_every_interval)