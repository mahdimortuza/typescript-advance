{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const res1 = createArray("bangladesh")
    const resGeneric = createArrayWithGeneric<string>("bangladesh")

    type User = { id: number; name: string }
    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: "Mr. Pathan" })


    // array with tuple 
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    const res10 = createArrayWithTuple<string, number>("bangladesh", 45)
    const res11 = createArrayWithTuple<string, { name: string }>("bangladesh", { name: "asia" })


    const addCourseToStudent = <T>(student: T) => {
        const course = "next level web development"

        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({ name: "Mr. X", email: "X@gmail.com", devType: "NLWD" })
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "apple watch" })








}