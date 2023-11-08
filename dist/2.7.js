"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "rahat",
        age: 26,
        address: "dhaka"
    };
    const car = {
        model: "tesla",
        year: 2020
    };
    const result1 = getPropertyValue(car, "model");
}
