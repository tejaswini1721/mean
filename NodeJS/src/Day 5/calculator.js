class Calculator {
    add(n1, n2) {
        return n1 + n2;
    }

    subtract(n1, n2) {
        return n1 - n2;
    }

    static main() {
        let obj = new Calculator();
        // let output = obj.add(1, 2);
        let output = obj.subtract(5, 2);
        console.log(output);
    }



}

Calculator.main();