"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("bangladesh");
    const resGeneric = createArrayWithGeneric("bangladesh");
    const resGenericObj = createArrayWithGeneric({ id: 222, name: "Mr. Pathan" });
    // array with tuple 
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("bangladesh", 45);
    const res11 = createArrayWithTuple("bangladesh", { name: "asia" });
    const addCourseToStudent = (student) => {
        const course = "next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Mr. X", email: "X@gmail.com", devType: "NLWD" });
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "apple watch" });
}
