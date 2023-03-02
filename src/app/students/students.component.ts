import { Component, OnInit } from '@angular/core';
import { Student } from '../configuration';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students!: Student[];

  formAddName: string = "";
  formAddStatus: string = "";
  errorFormAddName: string = "";
  errorFormAddStatus: string = "";

  constructor(private studentsService: StudentsService){}
  ngOnInit():void {
    this.students = this.studentsService.students;
  }
  
  addNewStudent() {
    let validName: number = 0;
    let validStatus: number = 0;
    if(
      this.formAddName == "" ||
      this.formAddName.length < 8) {
      validName = 0;
      this.errorFormAddName = "el campo es inválido"
    }else{
      this.errorFormAddName = "";
      validName = 1;
    }
    if(this.formAddStatus == "") {
      validStatus = 0;
      this.errorFormAddStatus = "el campo esta vacío";
    }else{
      this.errorFormAddStatus = "";
      validStatus = 1;
    }

    if(validName === 1 && validStatus === 1) {
      this.studentsService.addNewStudent(this.formAddName, this.formAddStatus);
    }
}
}
