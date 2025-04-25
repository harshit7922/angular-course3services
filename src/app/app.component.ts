import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './services/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CourseCardComponent,
        CourseImageComponent,
        NgForOf,
        CommonModule
    ]
})
export class AppComponent implements OnInit {

    courses$ : Observable<Course[]>;    

    constructor(private coursesService:CoursesService) {
    
    }
  

    ngOnInit() {      
        console.log(this.coursesService);
        this.courses$ = this.coursesService.loadCourses();
       
    }

    onEditCourse() {

            //this.courses[1].category = 'ADVANCED';

    }

    save(course: Course) {
        // this.coursesService.saveCourse(course)
        //     .subscribe(
        //         () => console.log('Course Saved!')
        //     );
    }


}
