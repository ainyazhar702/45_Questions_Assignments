// creatting a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// using for-loop
for(let oneNumber of numbers){
    let oridnalEnding: string;

    if(oneNumber === 1){
        oridnalEnding = "st"
    }
    else if(oneNumber === 2){
        oridnalEnding = "nd"
    }
    else if(oneNumber === 3){
        oridnalEnding = "rd"
    }
    else{
        oridnalEnding = "th"
    }

    
    console.log(`${oneNumber}${oridnalEnding}`);
}
