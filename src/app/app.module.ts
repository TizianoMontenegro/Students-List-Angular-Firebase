// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

// Services
import { StudentsService } from './students.service';
import { ButtonComponent } from './button/button.component';
import { HttpService } from './http.service';

const appRoutes: Routes = [
  {path: "", component: StudentsComponent},
  {path: "add-student", component: AddStudentComponent},
  {path: "edit-student/:id", component: EditStudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentsService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
