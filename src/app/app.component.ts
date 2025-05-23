import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, InjectionToken, Injector, OnInit, reflectComponentType} from '@angular/core';
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
import { FilterByCategoryPipe } from './courses/filter-by-category.pipe';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CourseCardComponent,
        CourseImageComponent,
        NgForOf,
        CommonModule,
        FilterByCategoryPipe
    ],
    standalone: true
   
})
export class AppComponent implements OnInit {

    courses$ = COURSES; //Observable<Course[]>;    

    constructor(private coursesService:CoursesService, @Inject(CONFIG_TOKEN) private conf: AppConfig) {
        
    }
  

    ngOnInit() {      
      
       
    }

    onEditCourse() {
            // const refObj:any  = {...this.courses$[0]};
            // refObj.description = 'Angular';
            // this.courses$[0] = refObj;
            
            //this will not get triggered on change method as object is not changed. 
            this.courses$[1].category = 'Advanced'; 
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }


}
