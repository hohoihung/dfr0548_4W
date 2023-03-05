input.onButtonPressed(Button.A, function () {
    _speed = 40
    move_F()
})
function move_R () {
    _inMotion_F = 0
    _inMotion_R = 1
    if (_speed > _wheel_max_speed) {
        _speed = _wheel_max_speed
    }
    if (_speed < _wheel_min_threshold) {
        _speed = _wheel_min_threshold
    }
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, _speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, _speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, _speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, _speed)
    basic.pause(2000)
}
function forward_L () {
	
}
function reverse_R () {
	
}
function reverse_L () {
	
}
function avoidCollision_F () {
	
}
input.onButtonPressed(Button.B, function () {
    _speed = 40
    move_R()
})
function forward_R () {
	
}
function move_F () {
    _inMotion_F = 1
    _inMotion_R = 0
    if (_speed > _wheel_max_speed) {
        _speed = _wheel_max_speed
    }
    if (_speed < _wheel_min_threshold) {
        _speed = _wheel_min_threshold
    }
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, _speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, _speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, _speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, _speed)
    basic.pause(2000)
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    motor.motorStopAll()
    _inMotion_F = 0
    _inMotion_R = 0
})
function avoidCollision_R () {
	
}
let _speed = 0
let _inMotion_R = 0
let _inMotion_F = 0
let _wheel_min_threshold = 0
let _wheel_max_speed = 0
motor.motorStopAll()
_wheel_max_speed = 150
_wheel_min_threshold = 50
_inMotion_F = 0
_inMotion_R = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    let _collision = 0
    serial.writeValue("_speed", _speed)
    serial.writeValue("_inMotion_F", _inMotion_F)
    if (_collision) {
        if (_inMotion_F) {
            avoidCollision_F()
        } else if (_inMotion_R) {
            avoidCollision_R()
        }
    } else {
        if (_inMotion_F) {
            move_F()
        } else if (_inMotion_R) {
        	
        }
    }
})
