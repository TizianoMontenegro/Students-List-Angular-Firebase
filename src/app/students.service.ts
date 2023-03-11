import { Injectable } from "@angular/core";
import { Student } from "./configuration";
import { HttpService } from "./http.service";

@Injectable()

export class StudentsService {

    students: Student[] = [
        new Student("Tiziano Montenegro", "aprobado"),
        new Student("Santino Montenegro", "aprobado"),
        new Student("Mario Garcia", "intensificación"),
        new Student("Bertolo Martín", "desaprobado"),
    ];

    constructor(private httpService: HttpService){}

    addNewStudent(name: string, status: string) {
        let newStudent = new Student(name, status);
        this.students.push(newStudent);
        this.httpService.saveStudents(this.students);
        // alert(`El estudiente ${name} ha sido agregado correctamente.`)
    }

    modifyStudent(name: string, status: string, id: number) {
        let studentModified = new Student(name, status);
        // this.students.splice(id,1,studentModified);
        this.httpService.modifyStudent(id, studentModified);
    }

    searchStudent(id: number) {
        return this.students[id];
    }

    removeStudent(id: number) {
        // this.students.splice(id,1);
        this.students.splice(id, 1)
        this.httpService.removeStudent(id);
        this.httpService.saveStudents(this.students);
    }

    getStudents() {
        return this.httpService.loadStudents()
    }
    setStudents(students: Student[]) {
        this.students = students;
    }
}