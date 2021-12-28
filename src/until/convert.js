export default function convertToString(number, isReduce) {
    let string = number.toString();
    let res = string.split('');
    let count = 0;
    let flag = 0;
    for (let i = res.length - 1; i > 0; i--) {
        if (count === 2) {
            count = 0;
            res.splice(i, 0, '.');
        }
        else {
            count++;
        }
    }
    if (isReduce && res.length > 3) {
        for (let i = res.length - 1; i > 0; i--) {
            if (res[i] === '0' && flag < 3) {
                res.pop();
                flag++;
            }
            else if( res[i] === '.'){
                res.pop();
            }
            else {
                break;
            }
        }
        res.push('k');
    }
    return res.join('');
}