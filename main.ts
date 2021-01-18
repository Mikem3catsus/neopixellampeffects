let color = 0
let wave_location = 0
let num_leds = 3
let max_led_index = num_leds - 1
let strip = neopixel.create(DigitalPin.P0, num_leds, NeoPixelMode.RGB)
let wave_speed = 1
let wave_strength = 50
let strengths = [num_leds*10]
basic.forever(function () {
    basic.pause(100)
    for (let i = 0; i <= num_leds*10 - 1; i++) {
        strengths[i] = 0
    }
    wave_location = wave_location + wave_speed
    if (wave_location >= num_leds*10) {
        wave_location = 0
        wave_strength =  randint(10, 80)
        wave_strength = 89
    }
    for(let i=0;i<10;i++){
    strengths[wave_location+i] = wave_strength
    }
    for (let j = 0; j <= num_leds - 1; j++) {
        let sum = 0
        for(let k=0;k<10;k++){
            sum = sum + strengths[j*10+k]
        }
        let lum = sum/10
        color = neopixel.hsl(240-lum/5, 99-lum/2, 10 + lum)
        strip.setPixelColor(j, color)
    }
    //strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.show()
})
