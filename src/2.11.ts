{
    // utility types
    // pick

    type Person = {
        name: string
        age: number
        email?: string
        contactNo: string
    }

    type NameAge = Pick<Person, "name" | "age">


    // omit
    type ContactInfo = Omit<Person, "name" | "age">


    //required
    type PersonRequired = Required<Person>

    // partial
    type PersonPartial = Partial<Person>

    // readonly
    type PersonReadOnly = Readonly<Person>


    const person1: PersonReadOnly = {
        name: "Mr. XY",
        age: 200,
        contactNo: "017"
    }

    // person1.name = "Mr. YZ"

    // record 
    // type MyObj = {
    //     a: string
    //     b: string
    // }

    type MyObj = Record<string, string>

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }
}