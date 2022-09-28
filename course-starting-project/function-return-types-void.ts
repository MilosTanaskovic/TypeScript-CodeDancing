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


printResult(add(5, 12));