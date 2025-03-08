export const digitsEnToFa = (number:any) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number.toString().replace(/\d/g, (digit:any) => persianDigits[digit]);
  };
  
  export const formatPrice = (price:number) => {
    return digitsEnToFa(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };