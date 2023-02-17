const leap = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return console.log(year + ' - високосный год');
            } else {
                return console.log(year + ' - не високосный год');
            }
        } else {
            return console.log(year + ' - високосный год');
        }
    } else {
        return console.log(year + ' - не високосный год');
    }
};
