import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  formAddName: string = "";
  formAddStatus: string = "";
  errorFormAddName: string = "";
  errorFormAddStatus: string = "";
  index!: number;

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit():void {
      this.index = this.activatedRoute.snapshot.params["id"];
      let studentSelected = this.studentsService.searchStudent(this.index);
      this.formAddName = studentSelected.name;
      this.formAddStatus = studentSelected.status;
    }

  editStudent() {
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
      this.studentsService.modifyStudent(this.formAddName, this.formAddStatus, this.index);
      this.formAddName = "";
      this.formAddStatus = "";
      this.router.navigate(["/"]);
    }
  }

}
