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

  constructor(private studentsService: StudentsService){}
  ngOnInit():void {
    this.students = this.studentsService.students;
  }
}
