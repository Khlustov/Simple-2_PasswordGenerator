const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const passwordLength = document.querySelector('.password-length')
const generate = document.querySelector('.button__generate')
const newPassword = document.querySelector('.password')
generate.addEventListener('click', function() {
    let password = ''
    if(!/^[0-9]+$/.test(passwordLength.value)) {        
        alert('It shoul be a number')
        passwordLength.value = ''        
    }
    else if(passwordLength.value < 8) {
        alert(`It's not enaugh`)
        passwordLength.value = ''
    }
    else if(passwordLength.value > 32) {
        alert('Too much')
        passwordLength.value = ''
    }
    else {
        for(let i = 0; i < passwordLength.value; i++) {
            password += symbols[makeRandomPassword()]
            newPassword.textContent = password
        }
    }
})

function makeRandomPassword() {
    return Math.floor(Math.random() * symbols.length)
}
