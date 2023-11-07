/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

enum Ledv {
    pois_päältä,
    päälle

}

enum Kippv {
    keskelle = 90,
    vasemmalle = 180,
    oikealle = 0

}

enum Kasiv {
    keskelle = 90,
    vasemmalle = 0,
    oikealle = 180

}


//% color="#AA278D" weight=300
//% groups="['lediloota', 'kippari", 'pyöritin']"
namespace Vekottimet {

    //% block
    //% group="lediloota"
    export function vasen_led(x: Ledv) {
        pins.digitalWritePin(DigitalPin.P2, x)
    }

    //% block
    //% group="lediloota"
    export function keskimmäinen_led(x: Ledv) {
        pins.digitalWritePin(DigitalPin.P1, x)
    }

    //% block
    //% group="lediloota"
    export function oikea_led(x: Ledv) {
        pins.digitalWritePin(DigitalPin.P0, x)
    }

    //% block
    //% group="kippari"
    export function käännä_levy(orientation: Kippv) {
        pins.servoWritePin(AnalogPin.P0, orientation)
    }

    //% block
    //% group="pyöritin"
    export function käännä_käsi(orientation: Kasiv) {
        pins.servoWritePin(AnalogPin.P0, orientation)
    }



}