def on_received_string(receivedString):
    global NPersonnes
    NPersonnes = receivedString
radio.on_received_string(on_received_string)

NPersonnes = ""
radio.set_group(1)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(10)
LCD1IN8.LCD_Display()
minute = 34
heure = 8
NPersonnes = convert_to_text(0)

def on_every_interval():
    LCD1IN8.LCD_Clear()
    # Affichage de la temperature
    LCD1IN8.dis_string(10,
        55,
        "" + convert_to_text(input.temperature()) + " C",
        LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    if input.temperature() < 19:
        LCD1IN8.draw_point(45,
            62,
            LCD1IN8.Get_Color(LCD_COLOR.RED),
            DOT_PIXEL.DOT_PIXEL_4)
    # Nombre de personnes dans la salle
    LCD1IN8.dis_string(63,
        15,
        "" + convert_to_text(NPersonnes) + " Personnes",
        LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    # Affichage de la temperature
    LCD1IN8.dis_string(63,
        101,
        "" + convert_to_text(input.light_level()) + "Lux",
        LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    # Affichage de la temperature
    LCD1IN8.dis_string(63,
        61,
        "" + convert_to_text(heure) + ":" + convert_to_text(minute),
        LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.LCD_Display()
loops.every_interval(60000, on_every_interval)

def on_every_interval2():
    global minute, heure
    minute += 1
    if minute == 60:
        heure += 1
loops.every_interval(60000, on_every_interval2)
