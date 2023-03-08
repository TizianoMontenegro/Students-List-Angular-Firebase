import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from './configuration';

@Injectable()

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loadStudents() {
    return this.httpClient.get("https://app-students-a1237-default-rtdb.firebaseio.com/students.json");
  }

  addStudent(student: Student[]) {
    this.httpClient.put("https://app-students-a1237-default-rtdb.firebaseio.com/students.json", student).subscribe(
      response => console.log("Response -> ", response),
      error => console.log("Error -> ",error)
    )
  }

  modifyStudent(index: number, studentModified: Student) {
    let studentSelected = `https://app-students-a1237-default-rtdb.firebaseio.com/students/${index}.json`;
    this.httpClient.put(studentSelected, studentModified).subscribe(
      response => console.log("Response -> ", response),
      error => console.log("Error -> ",error)
    )
  }

  removeStudent(index: number) {
    let studentSelected = `https://app-students-a1237-default-rtdb.firebaseio.com/students/${index}.json`;
    this.httpClient.delete(studentSelected).subscribe(
      response => console.log("Response -> ", response),
      error => console.log("Error -> ",error)
    )
  }
}
