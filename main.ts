input.onButtonPressed(Button.A, function () {
    if (accel > 40) {
        accel += 5
    } else {
        accel += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (contact) {
        contact = 0
    } else {
        contact = 1
    }
    accel = 0
})
input.onButtonPressed(Button.B, function () {
    if (accel > 40) {
        accel += -5
    } else {
        accel += -1
    }
})
let accel = 0
let contact = 0
contact = 0
accel = Math.constrain(0, 0, 100)
let roulis = Math.constrain(0, 0, 45)
let tangage = Math.constrain(0, 0, 45)
let lacet = Math.constrain(0, 0, 45)
basic.forever(function () {
    roulis = input.rotation(Rotation.Roll)
    tangage = input.rotation(Rotation.Pitch)
})
