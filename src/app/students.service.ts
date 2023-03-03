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
}