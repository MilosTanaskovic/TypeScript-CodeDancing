function add(n1: number, n2: number): number {
    return n1 + n2;
}

// void
function printResult(num: number): void {
    console.log('Reslt: ', num);
}

// undefine
function printResultU(num: number): undefined {
    console.log('Reslt: ', num);
    return;
}

// callback func
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}


printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(2, 4, (result) => {
    console.log(result);
})