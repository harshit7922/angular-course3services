import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, InjectionToken, Injector, OnInit} from '@angular/core';
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
import { HttpClient } from '@angular/common/http';

function courseServiceProvider(http: HttpClient):   CoursesService {
    return new CoursesService(http);
}
const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CourseCardComponent,
        CourseImageComponent,
        NgForOf,
        CommonModule
    ],
    providers: [
        { 
            provide: COURSES_SERVICE, 
            useFactory: courseServiceProvider,
            deps: [HttpClient]
        }],
})
export class AppComponent implements OnInit {

    courses$ : Observable<Course[]>;    

    constructor(@Inject(COURSES_SERVICE) private coursesService:CoursesService) {
    
    }
  

    ngOnInit() {      
        console.log(this.coursesService);
        this.courses$ = this.coursesService.loadCourses();
       
    }

    onEditCourse() {

            //this.courses[1].category = 'ADVANCED';

    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }


}
