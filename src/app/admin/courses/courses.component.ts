import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FiltterPipe } from '../../Pipes/filtter.pipe';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    FiltterPipe,
    CourseCardComponent
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'] // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class CoursesComponent implements OnInit {
  constructor(public home: HomeService, public dialog: MatDialog,private router: Router) {}

  ngOnInit(): void {
    this.home.getAll();
  }

  _filterText: string = '';

  delete(id: any) {
    console.log(id);
    this.home.deleteCourse(id);
  }

  formCourse: FormGroup = new FormGroup({
    Coursename: new FormControl(''),
    Categoryid: new FormControl(''),
    Image: new FormControl('')
  });

  @ViewChild('createDialog') createDialog!: TemplateRef<any>;

  openCreateDialog() {
    this.dialog.open(this.createDialog);
  }

  createCourse() {
    this.home.insertCourse(this.formCourse.value);
  }

  uploadImage(file: any) {
    if (file.length == 0) {
      return;
    }
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadImage(formData);
  }

  showProfile(){
    console.log('inn')
    this.router.navigate(['admin/profile'])
    }
}
