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

    async addNewStudent(name: string, status: string) {
        let newStudent = new Student(name, status);
        await this.students.push(newStudent);
        await this.httpService.addStudent(this.students)
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
        this.httpService.removeStudent(id);
    }

    getStudents() {
        return this.httpService.loadStudents()
    }
    setStudents(students: Student[]) {
        this.students = students;
    }
}