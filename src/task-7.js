
export default function getPolynomial(...coefficients) {
    let n = coefficients.length-1;

    if(coefficients.every(item => item === 0) || !coefficients.length) {
        return "0";
    }

    let result = coefficients.map(function(num) {

        if(num < 0 && num !== -1 && n>1) {
            num = `${num}*x^${n}`;
        } else if (num < 0 && n === 1){
            num = `${num}*x`;
        } else if (num === 0) {
            num = ''
        } else if(num !==0 && n === 0) {
            num = `+${num}`;
        } else if (num === -1 && n !== 1){
            num = `-x^${n}`;
        } else if (num === -1 && n === 1) {
            num = "-x";
        } else if (num === 1 && n === 1){
            num = "+x";
        } else if (num === 1 && n !== 1){
            num = `+x^${n}`;
        } else if (num !== 1 && n === 1) {
            num = `+${num}*x`;
        } else {
            num = `+${num}*x^${n}`;
        }
        n--;
        return num
    }).join('').replace("+-","-");

    if(result[0] === '+') {
        return result.substr(1);
    }
    return result;
}

