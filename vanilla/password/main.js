let passwordInput = document.querySelector("input")
let passwordIndicator = document.querySelectorAll(".password-indicator")

passwordInput.addEventListener("input", (e) => {
    let password = e.target.value
    // conic-gradient's max rotate angle is 12 * 30 = 360deg
    let strength = Math.min(password.length, 12)
    let degree = strength * 30
    let gradientColor = strength <= 4 ? "#ff2c1c" : strength <= 8 ? "#ff9800" : "#12ff12"

    passwordIndicator.forEach(item =>  { 
        // The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. 
        // The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center).

        // conic-gradient(color1 deg, color2 deg, ...)
        // start with gradientColor, rotate to target degree and transform to #111, rotate to target degree and over
        item.style.background = `conic-gradient(${gradientColor} ${degree}deg, #111 ${degree}deg)`
    })

})