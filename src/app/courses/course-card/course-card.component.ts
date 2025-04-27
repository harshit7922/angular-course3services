import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, DoCheck,
    EventEmitter,
    Input, OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/courses.service';
import {CommonModule, NgIf} from '@angular/common';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    imports: [
        NgIf
    ],
    providers:[CoursesService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements  OnInit, OnDestroy, OnChanges {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();




    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {
        console.log('constructor:', this.course);
    }

    ngOnInit() {
    console.log('ngOnInit:', this.course);

    }

    ngOnChanges(changes: SimpleChanges): void {
       console.log('onchanges method', changes)
    }

    ngOnDestroy() {
        console.log('ngOnDestroy:', this.course);
    }


    onTitleChanged(newTitle: string) {

        this.course.description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }


}
