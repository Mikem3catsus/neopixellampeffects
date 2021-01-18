let color = 0
let wave_location = 0
let num_leds = 3
let max_led_index = num_leds - 1
let strip = neopixel.create(DigitalPin.P0, num_leds, NeoPixelMode.RGB)
let wave_speed = 1
let strengths = [num_leds]
basic.forever(function () {
    basic.pause(500)
    for (let i = 0; i <= num_leds - 1; i++) {
        strengths[i] = 0
    }
    wave_location = wave_location + wave_speed
    if (wave_location >= num_leds) {
        wave_location = 0
    }
    strengths[wave_location] = 1
    for (let j = 0; j <= num_leds - 1; j++) {
        color = neopixel.hsl(240, 99, 10 + strengths[j] * 70)
        strip.setPixelColor(j, color)
    }
    //strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.show()
})
