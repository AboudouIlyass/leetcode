class Student {
    constructor(name, age, city) {
        this.name = name,
            this.age = age,
            this.city = city
    }
}

class School {
    constructor() {
        this.students = []
        this.id = 1
    }

    addStudent(stdnt) {
        const newstdnt = {
            id: this.id++,
            name: stdnt.name,
            age: stdnt.age,
            city: stdnt.city
        }
        this.students.push(newstdnt)
    }

    getAllStudents() {
        return this.students
    }

    filterByID(id) {
        return this.students.filter(e => e.id === id)[0] || "student dosn't exist"
    }

    remove(id){
        let t = this.students.filter(e => e.id !== id)
        if (t.length === this.students.length) return "dosn't exist"
        this.students = t
        return "done"
    }
}

// const sc = new School()
// sc.addStudent(new Student('karim', 12, 'tanger'))
// sc.addStudent(new Student('amin', 12, 'oujda'))
// sc.addStudent(new Student('douae', 12, 'oujda'))
// sc.addStudent(new Student('saliha', 12, 'oujda'))
// console.log(sc.getAllStudents());

// console.log(sc.remove(1));

// console.log(sc.getAllStudents());
// console.log(sc.filterByID(8));