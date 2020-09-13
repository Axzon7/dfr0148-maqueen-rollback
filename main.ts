let item = false
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) > 10) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (item == false) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else if (maqueen.sensor(PingUnit.Centimeters) < 10 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    }
})
