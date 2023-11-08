"use strict";
{
    // mapped types 
    const arrowOfNumbers = [1, 4, 5];
    // const arrOfStrings: string[] = ['1', '4', '5']
    const arrOfStrings = arrowOfNumbers.map((number) => number.toString());
    console.log(arrOfStrings);
    // const area1: AreaString<{ height: string; width: number }> = {
    //     height: "100"
    // }
    console.log("object");
}
