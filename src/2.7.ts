{
    // generic constraints with key of operator
    type Vehicle = {
        bike: string
        car: string
        ship: string
    }

    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "rahat",
        age: 26,
        address: "dhaka"
    }

    const car ={
        model: "tesla",
        year: 2020
    }

    const result1 = getPropertyValue(car, "model")






}