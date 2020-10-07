module.exports = function toReadable (number) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const hundredBillion = ['hundred', 'thousand', 'million', 'billion']
    if (number < 10) {
        return numbers[number]
    }
    if (number < 20) {
        return tenNineteen[number - 10]
    }
    if (number < 100) {
        if (number % 10 === 0) {
            return twentyNinety[Math.floor(number / 10 - 2)]
        } else {
            return twentyNinety[Math.floor(number / 10 - 2)] + ' ' + numbers[number % 10]
        }

    }
    if (number < 1000) {

        let str = numbers[Math.floor(number / 100)] + ' hundred'
        if (number % 100 === 0) return str
        let tens = number - Math.floor(number / 100) * 100
        if (tens < 10) {
            return str + ' ' + numbers[number - Math.floor(number / 100) * 100]
        } else if (tens < 20) {
            return str + ' ' + tenNineteen[tens - 10]
        } else if (number % 10 === 0) {
            return str + ' ' + twentyNinety[Math.floor(tens / 10 - 2)]
        } else {
            return str + ' ' + twentyNinety[Math.floor(tens / 10 - 2)] + ' ' + numbers[tens % 10]
        }
    }
}
