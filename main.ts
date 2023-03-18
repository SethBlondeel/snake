let X = 0
let Y = 0
basic.forever(function () {

for (let i = 0; i < 5; i++) {    
basic.pause(250)
X=i
led.plot(X,Y)
}

basic.pause(250)
Y += 1

for (let i = 4; i > -1; i--) {
basic.pause(250)
X = i
led.plot(X,Y)
}

basic.pause(250)
Y += 1

for (let i = 0; i < 5; i++) {
basic.pause(250)
X = i
led.plot(X, Y)
}

basic.pause(250)
Y += 1

for (let i = 4; i > -1; i--) {
basic.pause(250)
X = i
led.plot(X, Y)
}

basic.pause(250)
Y += 1

for (let i = 0; i < 5; i++) {
basic.pause(250)
X = i
led.plot(X, Y)
}
basic.pause (250)
basic.clearScreen()
X = 0
Y = 0
})