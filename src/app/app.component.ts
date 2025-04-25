import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    constructor(private http:HttpClient) {
    
    }
  

    ngOnInit() {      
        const params = new HttpParams()
        .set('page', '1')
        .set('pageSize', '10');

       this.courses$ =  this.http.get<Course[]>('/api/courses',{params})
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
