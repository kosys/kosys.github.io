function calcAge(birthdayYYYYMMDD) {
    var today = new Date();
    var todayYYYYMMDD = parseInt(addZero(today.getFullYear(), 4) + addZero(today.getMonth() + 1, 2) + addZero(today.getDate(), 2));
    
    return Math.trunc((todayYYYYMMDD - birthdayYYYYMMDD) / 10000);

    function addZero(value, digits) {
        return ("0" + value).slice(-digits);
    }
}