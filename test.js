function isItSmiley(num){
    if(num === 1){
        return true
    }else{
        const numberInDigits = [];
        while(num !== 0){
            let r = parseInt(num%10);
            num = parseInt(num/10);
        numberInDigits.push(r);
        }
        let sum =0 ;
        for(let i=0;i<numberInDigits.length;i++){
            sum = sum + numberInDigits[i] * numberInDigits[i];
        }
        console.log(sum);   

        if(sum === 1){
            return true;
        }else{
            if(parseInt(sum/10) == 0){
                return false;
            }else{
                isItSmiley(sum);
            }
        }
    }
}
