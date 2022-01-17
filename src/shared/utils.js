export const getRandomNumber = (inicial, final) => {
    return Math.floor(Math.random() * (final - inicial + 1) + inicial)
}

export const getLetraNumber = (number) => {
    console.log('number', number >= 1);
    if (number >= 1 && number <= 12) {
        return "B"
    }else if (number >= 13 && number <= 24) {
        return "I"
    } else if (number >= 25 && number <= 36) {
        return "N"
    } else if (number >= 37 && number <= 48) {
        return "G"
    } else if (number >= 49 && number <= 60) {
        return "O"
    }
}