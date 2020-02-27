
//can test this seperately with jest later
//receives strings and parseInts them
export default function CalculatePay(duration, otLimit, basicRate, oTRate) {
    const durationInt = parseInt(duration);
    const otLimitInt = parseInt(otLimit);
    const basicRateInt = parseInt(basicRate);
    const oTRateInt = parseInt(oTRate);
    let basicHours = durationInt;
    let pay = durationInt*basicRateInt;
    if (durationInt > otLimitInt) {
        basicHours = otLimitInt;
        let otHours = durationInt-otLimitInt;
        pay = basicHours*basicRateInt + otHours*oTRateInt;
    }
    return pay;
}