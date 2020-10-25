function test(message, operation) {
    function testing(a, b, sign, result) {
        if (typeof a === 'string' || typeof b === 'string') {
            switch (sign) {
                case "+":
                    if (a.concat(b) === result) {
                        console.log("equallll")
                    } else {
                        console.error("errororororor")
                    }
                    break;
            }
        }
        else {
            switch (sign) {
                case "+":
                    if (a + b === result) {
                        console.log("equallll")
                    } else {
                        console.error("errororororor")
                    }
                    break;
                case "-":
                    if (a - b === result) {
                        console.log("equallll")
                    } else {
                        console.error("errororororor")
                    }
                    break;
                case "*":
                    if (a * b === result) {
                        console.log("equallll")
                    } else {
                        console.error("errororororor")
                    }
                    break;
                case "/":
                    if (a / b === result) {
                        console.log("equallll")
                    } else {
                        console.error("errororororor")
                    }
                    break;
            }
        }

    }
    const batata = {
        testing
    }
    console.group(message);
    operation(batata);
    console.groupEnd();
}
test("testing numbers", (t) => {
    var answer = calculate(2, "+", 2);
    t.testing(2, 2, "+", answer);

    answer = calculate("var1 ", "+", 4);
    t.testing("var1 ", 4, "+", answer);

    answer = calculate(10, "-", 5);
    t.testing(10, 5, "-", answer);

    answer = calculate(2, "*", 2);
    t.testing(2, 2, "*", answer);

    answer = calculate(10, "/", 5);
    t.testing(10, 5, "/", answer);
})

// function calculate(a, sign, b) {
//     switch (sign) {
//       case "+":
//         return add(a, b);
//       case "-":
//         return subtract(a, b);
//       case "*":
//         return multiply(a, b);
//       case "/":
//         return divide(a, b);
//       default:
//         return "Please enter a valid sign (+, -, *, /)";
//     }
//   }



// function test(message, operation) {
//     function add(a, b, result) {
//         if (a + b === result) {
//             console.log("equallll")
//         } else {
//             console.error("errororororor")
//         }
//     }
//     const batata={
//         add
//     }
//     console.group(message);
//     operation(batata);
//     console.groupEnd();
//     // function subtract(a,b){

//     // }    
//     // function multiply(a,b){

//     // }    
//     // function divide(a,b){

//     // }

// }