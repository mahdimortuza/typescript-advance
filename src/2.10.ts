{
    // mapped types 

    const arrowOfNumbers: number[] = [1, 4, 5]
    // const arrOfStrings: string[] = ['1', '4', '5']
    const arrOfStrings: string[] = arrowOfNumbers.map((number) => number.toString()

    )
    console.log(arrOfStrings);

    type AreaNumber = {
        height: string
        width: number
    }

    type Height = AreaNumber["height"] // look up type

    // T => {height: string; width:number}
    // key => ["height"]

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    // const area1: AreaString<{ height: string; width: number }> = {
    //     height: "100"
    // }

    console.log("object");







}