class Student
{
    private name: string = ''
    private course: Subject|null = null
    private cpf: string = ''

    public getName(): string {
        return this.name;
    }

    public getCpf(): string {
        return this.cpf
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public setCpf(newCpf: string): void {
        this.cpf = newCpf;
    }

    public setCourse(newCourse: Subject): void {
        this.course = newCourse;
    }

    public getCourse(): Subject|null {
        return this.course;
    }

}


function getDayWeek(dayNumber: number) {
    switch (dayNumber) {
        case -1: return 'Sunday'
        break;
        case 0: return 'Monday'
        break;
        case 1: return 'Tuesday'
        break;
        case 2: return 'Wednesday'
        break;
        case 3: return 'Thursday'
        break;
        case 4: return 'Friday'
        break;
        case 5: return 'Saturday'
        break
        case 6: return 'Sunday'
        break;
        default: return '' 
}
}

class SchoolClass
{
    private name: string
    private students: Array<Student> = []
    private lessons: Array<Lesson> = []
    private dateClass: Date = new Date('2024-12-05')

    constructor(name: string) {
        this.name = name
    }

    public setStudent(student: Student): void {
        console.log(`The ${student.getName()} was registred!`)
        this.students.push(student)
    }

    public getStudent() {
        this.students.forEach((element) =>
        console.log(element.getName())
    )
    }

    public setLessons(lesson: Lesson): void {
        this.lessons.push(lesson)
    }

    public getDay(): string {
        return getDayWeek(this.dateClass.getDay())
    }
}

class Lesson
{
    private nameLesson: string = ''
    private lessonDate: Date = new Date('2024-12-05')

    public constructor(nameLesson: string, lessonDate: Date) {
        this.nameLesson = nameLesson
        this.lessonDate = lessonDate
    }

    public setNameLesson(newName: string): void {
        this.nameLesson = newName;
    }

    public getNameLesson(): string {
        return this.nameLesson;
    }

    public getDay(): string {
        return getDayWeek(this.lessonDate.getDay());
    }
}

class Teacher
{
    private nameTeacher: string
    private cpf: string

    public constructor(name: string, cpf: string) {
        this.nameTeacher = name
        this.cpf = cpf
    }

    public setName(newName: string): void {
        this.nameTeacher = newName
    }

    public getName(): string {
        return this.nameTeacher;
    }

    public setCpf(newCpf: string): void {
        this.cpf = newCpf;
    }

    public getCpf(): string {
        return this.cpf;
    }
}

class Subject
{
    private nameSubject: string
    private weekDays: Array<Date>
    private professor: Teacher

    constructor(nameSubject: string, weekDays: Array<Date>, professor: Teacher) {
        this.nameSubject = nameSubject;
        this.weekDays = weekDays;
        this.professor = professor;
    }

    public setNameSub(newSub: string): void {
        this.nameSubject = newSub;
    }

    public getNameSub(): string {
        return this.nameSubject;
    }

    public setProfessor(newProfessor: Teacher): void {
        this.professor = newProfessor;
    }

    public getProfessor(): string {
        return `Professor Name: ${this.professor.getName()}`;
    }

    public getDays(): void {
        this.weekDays.forEach((element) => 
            console.log(getDayWeek(element.getDay()))
        )
    }
}

let professor1 = new Teacher('Gustavo Berned', '123.123.123-76');
let professor2 = new Teacher('Lucas Alves', '123.123.123-99');
let professor3 = new Teacher('Mária Cláudia', '123.123.123-82');

let date
let english = new Subject('English', [new Date('2024-12-05'), new Date('2024-12-06')], professor3)

let student1 = new Student()
student1.setName('Vitor Reis')
student1.setCpf('123.123.123-12')
student1.setCourse(english)

let student2 = new Student()
student2.setName('Lucas Luut')
student2.setCpf('123.123.123-74')
student1.setCourse(english)

let pronoun = new Lesson('Pronouns', new Date('2024-12-04'))
let verbs = new Lesson('Verbs', new Date('2024-11-27'))

let schoolClass = new SchoolClass('English School')
schoolClass.setStudent(student1);
schoolClass.setStudent(student2)
schoolClass.setLessons(pronoun)
schoolClass.setLessons(verbs)

console.log(schoolClass.getDay())
schoolClass.getStudent()

english.getDays()