input.onButtonPressed(Button.A, function () {
    radio.sendString("999")
})
radio.onReceivedString(function (receivedString) {
    _1 = receivedString
    radio.sendString(receivedString)
})
let _1 = ""
radio.setGroup(1)
