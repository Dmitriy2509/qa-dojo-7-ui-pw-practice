import test from "@playwright/test";


test("Unit-001 Verify if number is pair", {tag: ["@unit"]}, ()=>{
    const number = 4;

    if(number % 2 !== 0) {
        console.log("number is not pair");
    } else {
        console.log("number is pair");
    }
});

test("Unit-002 Verify time greeting", {tag:["@unit", "@timeGreeting"]}, ()=>{
    const hour = 15;

    if (hour > 0 && hour < 12) {
        console.log("Доброго ранку!");
    }

    if (hour >= 12 && hour < 18) {
        console.log("Доброго дня!");
    }

    if (hour >= 18) {
        console.log("Доброго вечора!");
    }
});

test("Unit-003 Verify grade", {tag: ["@unit", "@grade"]}, ()=>{
    const grade = 42;

    if(grade >= 50) {
        console.log("Тест складено");
    }

    if(grade < 50) {
        console.log("Тест не складено");
    }
});

test("Verify vote", {tag: ["@unit", "@vote"]}, ()=>{
    const age = 17;

    if(age >= 18){
        console.log("Ви можете голосувати.");
    } else {
        console.log("Ви ще не можете голосувати.");
    }
});

test("Verify biggest number", {tag: ["@unit", "@biggestNumber"]}, ()=>{
    const firstNumber = 10;
    const secondNumber = 1;

    if(firstNumber > secondNumber) {
        console.log("firstNumber is bigger");
    } else if (secondNumber > firstNumber) {
        console.log("secondNumber is bigger");
        //@ts-ignore
    } else if (firstNumber === secondNumber) {
        console.log("numbers the same");
    }
});

test("traffic light color", {tag: ["@unit", "@trafficLightColor"]}, ()=>{
    const color = "yellow";
    //@ts-ignore
    if (color === "red") {
        console.log("зачекайте");
    }

    if (color === "yellow") {
        console.log("підготуйтеся");
    }
    //@ts-ignore
    if (color === "green") {
        console.log("переходьте");
    }
});

test("type of number", {tag: ["@unit", "@typeOfNumber"]}, ()=>{
    const number = -5;

    if (number > 0) {
        console.log("Число додатнє.");
    }

    if (number < 0) {
        console.log("Число від’ємне.");
    }
     //@ts-ignore
    if (number === 0) {
        console.log("Число дорівнює нулю.");
    }
});