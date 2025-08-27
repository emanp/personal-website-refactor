
export interface IFormData {
    firstName: string,
    lastName: string,
    email: string,
    reasonsForContact: string,
    message: string
    // dateSubmitted: Date
}

export interface ContactReasonOptions {
    "edit-file": string;
    "debugging-support": string;
    "other": string;
    "delete-file": string;
}

// export function runEach

//simply prints an array 
export function printArray(array: Array<unknown>){

    let arrayText: string = "[\n";
    
    array.forEach((element, index)  => {
        arrayText += `\t ${index}: ${JSON.stringify(element)} \n`;
    });
    arrayText+= "]";


    console.log(arrayText)

}


function sendEmail(){

}
