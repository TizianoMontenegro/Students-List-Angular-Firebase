import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  formAddName: string = "";
  formAddStatus: string = "";
  errorFormAddName: string = "";
  errorFormAddStatus: string = "";

  constructor(
    private studentsService: StudentsService,
    private router: Router) {}

  addNewStudent() {
    let validName: number = 0;
    let validStatus: number = 0;
    if(this.formAddName == "") {
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
      this.formAddName = "";
      this.formAddStatus = "";
      setTimeout(()=>{this.router.navigate(["/"])},400);
    }
  }
}
