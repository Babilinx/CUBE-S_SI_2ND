//  Init radio transmition
radio.setGroup(1)
//  Init LCD_Display
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(10)
LCD1IN8.LCD_Display()
//  Init vaiables
let minute = 34
let heure = 8
let NPersonnes = 0
//  Init functions
//  Script start here
loops.everyInterval(10000, function on_every_interval2() {
    LCD1IN8.LCD_Clear()
    //  Affichage de la temperature.
    LCD1IN8.DisString(10, 55, "" + convertToText(input.temperature()) + " C", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    if (input.temperature() < 19) {
        //  si 'temperature' < 19°C, afficher un témoin de chauffe.
        LCD1IN8.DrawPoint(45, 62, LCD1IN8.Get_Color(LCD_COLOR.RED), DOT_PIXEL.DOT_PIXEL_4)
    }
    
    //  Nombre de personnes dans la salle
    LCD1IN8.DisString(63, 15, "" + convertToText(NPersonnes) + " Personnes", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    //  Affichage de la luminosité
    LCD1IN8.DisString(63, 101, "" + convertToText(input.lightLevel()) + "Lux", LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.DrawRectangle(108, 104, 113, 109, LCD1IN8.Get_Color(LCD_COLOR.BLACK), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    if (input.lightLevel() > 200 && NPersonnes > 0) {
        //  si 'luninosité' < 200 ET plus que 0 personnes dans la salle, afficher un témoin de lumière.
        LCD1IN8.DrawPoint(112, 108, LCD1IN8.Get_Color(LCD_COLOR.YELLOW), DOT_PIXEL.DOT_PIXEL_4)
    }
    
    //  Affichage de l'heure
    LCD1IN8.DisString(63, 61, "" + convertToText(heure) + ":" + convertToText(minute), LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.LCD_Display()
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    NPersonnes = receivedNumber
    for (let index = 0; index < 2; index++) {
        led.toggle(0, 0)
        basic.pause(300)
    }
})
loops.everyInterval(50000, function on_every_interval() {
    
    minute += 1
    if (minute == 60) {
        heure += 1
        minute = 0
    }
    
    if (heure == 24) {
        heure = 0
    }
    
})
