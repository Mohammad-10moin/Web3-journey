const crypto =require('crypto');

// const input="Moin";

// const hash=crypto.createHash('sha256').update(input).digest('hex');
// console.log(hash);

let input=0;
while(true){
    inputString="moin"+input.toString();
    // console.log(inputString);
    const hash=crypto.createHash('sha256').update(inputString).digest('hex');
    if(hash.startsWith("00000")){
        console.log(hash);
        console.log(inputString);
        break;
    }
    input++;
}
