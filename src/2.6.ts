{
    // constraints

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "next level web development"

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({
        id: 333,
        name: "Mr. Z",
        email: "Z@gmail.com"
    })

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 222,
        name: "Mr. X",
        email: "X@gmail.com",
        devType: "NLWD"
    })
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr. Y",
        email: "Y@gmail.com",
        hasWatch: "apple watch"
    })


}