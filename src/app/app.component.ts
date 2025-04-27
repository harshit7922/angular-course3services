import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, InjectionToken, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {APP_CONFIG, AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './services/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



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

    courses$ = COURSES; //Observable<Course[]>;    

    constructor(private coursesService:CoursesService, @Inject(CONFIG_TOKEN) private conf: AppConfig) {
        console.log(conf);
    }
  

    ngOnInit() {      
        //this.courses$ = this.coursesService.loadCourses();
       
    }

    onEditCourse() {

            this.courses$[0].category = 'ADVANCED';

    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }


}
