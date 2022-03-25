radio.onReceivedString(function (receivedString) {
    NPersonnes = receivedString
})
let NPersonnes = ""
radio.setGroup(1)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(10)
LCD1IN8.LCD_Display()
let minute = 34
let heure = 8
NPersonnes = convertToText(0)
loops.everyInterval(1000, function () {
    LCD1IN8.LCD_Clear()
    // Affichage de la temperature
    LCD1IN8.DisString(
    10,
    55,
    "" + convertToText(input.temperature()) + " C",
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    if (input.temperature() < 19) {
        LCD1IN8.DrawPoint(
        45,
        62,
        LCD1IN8.Get_Color(LCD_COLOR.RED),
        DOT_PIXEL.DOT_PIXEL_4
        )
    }
    // Nombre de personnes dans la salle
    LCD1IN8.DisString(
    63,
    15,
    "" + convertToText(NPersonnes) + " Personnes",
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    // Affichage de la temperature
    LCD1IN8.DisString(
    63,
    101,
    "" + convertToText(input.lightLevel()) + "Lux",
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    LCD1IN8.DrawRectangle(
    108,
    104,
    113,
    109,
    LCD1IN8.Get_Color(LCD_COLOR.BLACK),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    if (input.lightLevel() > 200) {
        LCD1IN8.DrawPoint(
        112,
        108,
        LCD1IN8.Get_Color(LCD_COLOR.YELLOW),
        DOT_PIXEL.DOT_PIXEL_4
        )
    }
    // Affichage de la temperature
    LCD1IN8.DisString(
    63,
    61,
    "" + convertToText(heure) + ":" + convertToText(minute),
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    LCD1IN8.LCD_Display()
})
loops.everyInterval(60000, function () {
    minute += 1
    if (minute == 60) {
        heure += 1
    }
})
