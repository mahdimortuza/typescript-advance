{
    // interface
    type User1 = {
        name: string
        age: number
    }

    interface User2 {
        name: string
        age: number
    }


    // creating type with intersection 
    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const person: UserWithRole1 = {
        name: "rahat",
        age: 54,
        role: "student"
    }


    // in js  object --> object, array --> object, function --> object

    // using type
    type Roll1 = number[]


    // using interface 
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll2 = [1, 2, 3]


    type Add1 = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2
}