import { Component, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'] 
})
export class CourseCardComponent {
  @Input() courseName: string | undefined;
  @Input() courseId: number | undefined;

  @Input() categoryid: string | undefined;
  @Input() image: string | undefined;

  @Output() opneProfile=new EventEmitter();
  
  showProfile(){
    this.opneProfile.emit();
    }
}
