{
    // generic type
    type GenericType<T> = Array<T>

    // const rollNumbers: number[] = [2,3,5]
    const rollNumbers: GenericType<number> = [2, 3, 5]

    // const mentors: string[] = ["rahat", "mortuza", "mahdi"]
    const mentors: Array<string> = ["rahat", "mortuza", "mahdi"]

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericType<boolean> = [true, false, true]


    // array of object procedure by generic
    const user: GenericType<{ name: string, age: number }> = [
        {
            name: "rahat",
            age: 100
        },
        {
            name: "mahdi",
            age: 150
        }
    ]


    const add = (x: number, y: number) => x + y
    add(30, 20)


    // generic tuple
    type GenericTuple<x, y> = [x, y]

    const munush: GenericTuple<string, string> = ["Mr. X", "Mr. y"]

    const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: "rahat", email: "rahat@gmail.com" }]



}