import { Injectable } from "@angular/core";
import { Student } from "./configuration";

@Injectable()

export class StudentsService {

    students: Student[] = [
        new Student("Tiziano Montenegro", "aprobado"),
        new Student("Santino Montenegro", "aprobado"),
        new Student("Mario Garcia", "intensificación"),
        new Student("Bertolo Martín", "desaprobado"),
    ];

    addNewStudent(name: string, status: string) {
        let newStudent = new Student(name, status);
        this.students.push(newStudent);
    }

    modifyStudent(name: string, status: string, id: number) {
        let studentModified = new Student(name, status);
        this.students.splice(id,1,studentModified);
    }

    searchStudent(id: number) {
        return this.students[id];
    }

    removeStudent(id: number) {
        this.students.splice(id,1);
    }

}