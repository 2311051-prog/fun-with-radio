input.onButtonPressed(Button.A, function () {
    radio.sendString("999")
})
radio.onReceivedString(function (receivedString) {
    radio.sendString(receivedString)
})
let _1 = 999
radio.setGroup(1)
