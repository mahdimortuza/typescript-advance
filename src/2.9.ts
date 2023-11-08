{
    // conditional type
    type a1 = number
    type b1 = number

    type x = a1 extends null ? true : false // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type Sheikh = {
        bike: string
        car: string
        ship: string
        plane: string
    }

    type checkVehicle<T> = T extends keyof Sheikh ? true : false

    type HasPlane = checkVehicle<"plane">







}