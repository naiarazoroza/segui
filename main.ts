input.onButtonPressed(Button.A, function () {
    pausa += 50
})
input.onButtonPressed(Button.B, function () {
    pausa += -50
})
DFRobotMaqueenPlus.I2CInit()
let pausa = 1000
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.WHITH)
    basic.pause(pausa)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.WHITH)
    basic.pause(pausa)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
})
